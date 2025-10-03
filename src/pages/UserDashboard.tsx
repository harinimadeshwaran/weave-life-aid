import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Heart, 
  FileText, 
  LogOut, 
  User,
  Phone,
  MapPin,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  Plus
} from 'lucide-react';
import { useAuth } from '@/App';
import { useToast } from '@/hooks/use-toast';

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Mock data
  const [donors] = useState([
    {
      id: '1',
      name: 'John Smith',
      age: 28,
      bloodGroup: 'O+',
      location: 'Los Angeles, CA',
      contact: '+1 (555) 123-4567',
      availability: 'Available',
      lastDonation: '2024-01-15'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      age: 32,
      bloodGroup: 'A+',
      location: 'Los Angeles, CA',
      contact: '+1 (555) 987-6543',
      availability: 'Available',
      lastDonation: '2024-02-20'
    }
  ]);

  const [requests] = useState([
    {
      id: '1',
      patientName: 'Emergency Patient',
      hospital: 'City General Hospital',
      bloodGroup: 'O+',
      urgency: 'Critical',
      status: 'Pending',
      date: '2024-03-15',
      location: 'Downtown Medical District'
    },
    {
      id: '2',
      patientName: 'Jane Doe',
      hospital: 'Regional Medical Center',
      bloodGroup: 'A+',
      urgency: 'Moderate',
      status: 'Accepted',
      date: '2024-03-10',
      location: 'North Healthcare Campus'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="bg-[var(--gradient-secondary)] p-2 rounded-lg shadow-md">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold heading-medical">BloodLife</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link
                  to="/dashboard/user"
                  className="text-gray-700 hover:text-[hsl(var(--secondary))] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/dashboard/user/find-donors"
                  className="text-gray-700 hover:text-[hsl(var(--secondary))] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Find Donors
                </Link>
                <Link
                  to="/dashboard/user/request-blood"
                  className="text-gray-700 hover:text-[hsl(var(--primary))] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Request Blood
                </Link>
                <Link
                  to="/dashboard/user/my-requests"
                  className="text-gray-700 hover:text-[hsl(var(--secondary))] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  My Requests
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Welcome, {user?.name}</span>
              <Button onClick={handleLogout} variant="secondary" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<DashboardHome requests={requests} />} />
          <Route path="/find-donors" element={<FindDonors donors={donors} />} />
          <Route path="/request-blood" element={<RequestBlood />} />
          <Route path="/my-requests" element={<MyRequests requests={requests} />} />
        </Routes>
      </div>
    </div>
  );
};

const DashboardHome = ({ requests }: { requests: any[] }) => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">User Dashboard</h1>
        <p className="text-gray-600">Find blood donors and manage your requests</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-feature hover:scale-hover">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="icon-medical bg-[hsl(var(--secondary))]/10">
                <Search className="h-6 w-6 text-[hsl(var(--secondary))]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Available Donors</p>
                <p className="text-3xl font-bold heading-medical">150+</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="card-feature hover:scale-hover">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="icon-medical bg-[hsl(var(--primary))]/10">
                <Heart className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Active Requests</p>
                <p className="text-3xl font-bold heading-medical">{requests.filter(r => r.status === 'Pending').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="card-feature hover:scale-hover">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="icon-medical bg-[hsl(var(--success))]/10">
                <CheckCircle className="h-6 w-6 text-[hsl(var(--success))]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Successful Matches</p>
                <p className="text-3xl font-bold heading-medical">{requests.filter(r => r.status === 'Accepted').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="card-medical">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Heart className="mr-2 h-5 w-5 text-[hsl(var(--primary))]" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link to="/dashboard/user/find-donors">
              <Button className="w-full justify-start" variant="secondary" size="lg">
                <Search className="mr-2 h-5 w-5" />
                Find Blood Donors
              </Button>
            </Link>
            <Link to="/dashboard/user/request-blood">
              <Button className="w-full justify-start" variant="medical" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Create Blood Request
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="card-medical">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <FileText className="mr-2 h-5 w-5 text-[hsl(var(--secondary))]" />
              Recent Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            {requests.length > 0 ? (
              requests.slice(0, 3).map((request) => (
                <div key={request.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
                  <div>
                    <p className="font-semibold heading-medical">{request.bloodGroup} needed</p>
                    <p className="text-sm text-medical">{request.hospital}</p>
                  </div>
                  <Badge className={request.status === 'Pending' ? 'status-pending' : 'status-approved'}>
                    {request.status}
                  </Badge>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-4">No requests yet</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const FindDonors = ({ donors }: { donors: any[] }) => {
  const [searchBloodGroup, setSearchBloodGroup] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  const filteredDonors = donors.filter(donor => {
    return (
      (searchBloodGroup === '' || donor.bloodGroup === searchBloodGroup) &&
      (searchLocation === '' || donor.location.toLowerCase().includes(searchLocation.toLowerCase()))
    );
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Blood Donors</h1>
        <p className="text-gray-600">Search for compatible blood donors in your area</p>
      </div>

      {/* Search Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blood Group
              </label>
              <Select onValueChange={setSearchBloodGroup}>
                <SelectTrigger>
                  <SelectValue placeholder="Select blood group" />
                </SelectTrigger>
                <SelectContent>
                  {bloodGroups.map((group) => (
                    <SelectItem key={group} value={group}>
                      {group}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <Input
                placeholder="Enter city or state"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Donor Results */}
      {filteredDonors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonors.map((donor) => (
            <Card key={donor.id} className="card-donor hover:scale-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[hsl(var(--primary))]/10 p-3 rounded-full">
                      <User className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-bold heading-medical">{donor.name}</h3>
                      <p className="text-sm text-muted-foreground">Age: {donor.age}</p>
                    </div>
                  </div>
                  <Badge className="bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] font-bold text-base px-3 py-1">
                    {donor.bloodGroup}
                  </Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-medical">
                    <MapPin className="h-4 w-4 mr-2 text-[hsl(var(--primary))]" />
                    {donor.location}
                  </div>
                  <div className="flex items-center text-sm text-medical">
                    <Phone className="h-4 w-4 mr-2 text-[hsl(var(--primary))]" />
                    {donor.contact}
                  </div>
                  <div className="flex items-center text-sm text-medical">
                    <Calendar className="h-4 w-4 mr-2 text-[hsl(var(--primary))]" />
                    Last donation: {donor.lastDonation}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-[hsl(var(--success))] border-[hsl(var(--success))]">
                    {donor.availability}
                  </Badge>
                  <Button size="sm" variant="medical">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="card-feature">
          <CardContent className="p-12 text-center">
            <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold heading-medical mb-2">No Donors Found</h3>
            <p className="text-muted-foreground">Try adjusting your search filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

const RequestBlood = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    patientName: '',
    hospital: '',
    location: '',
    bloodGroup: '',
    urgency: '',
    details: ''
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  const urgencyLevels = ['Critical', 'High', 'Moderate', 'Low'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Blood request submitted successfully!",
      description: "We'll notify available donors in your area.",
    });

    // Reset form
    setFormData({
      patientName: '',
      hospital: '',
      location: '',
      bloodGroup: '',
      urgency: '',
      details: ''
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Request Blood</h1>
        <p className="text-gray-600">Submit a blood request for urgent medical needs</p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="mr-2 h-6 w-6 text-red-600" />
            Blood Request Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Patient Name *
                </label>
                <Input
                  required
                  value={formData.patientName}
                  onChange={(e) => setFormData(prev => ({ ...prev, patientName: e.target.value }))}
                  placeholder="Enter patient name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blood Group *
                </label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, bloodGroup: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodGroups.map((group) => (
                      <SelectItem key={group} value={group}>
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hospital Name *
              </label>
              <Input
                required
                value={formData.hospital}
                onChange={(e) => setFormData(prev => ({ ...prev, hospital: e.target.value }))}
                placeholder="Enter hospital name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <Input
                  required
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Hospital location"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency Level *
                </label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details
              </label>
              <Textarea
                value={formData.details}
                onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                placeholder="Any additional information about the request"
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full btn-medical" size="lg">
              <Heart className="mr-2 h-5 w-5" />
              Submit Blood Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const MyRequests = ({ requests }: { requests: any[] }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Accepted':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical':
        return 'text-red-600 bg-red-100';
      case 'High':
        return 'text-orange-600 bg-orange-100';
      case 'Moderate':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-green-600 bg-green-100';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Blood Requests</h1>
        <p className="text-gray-600">Track the status of your blood requests</p>
      </div>

      <div className="space-y-4">
        {requests.map((request) => (
          <Card key={request.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <h3 className="text-lg font-semibold">{request.patientName}</h3>
                    <Badge className={getUrgencyColor(request.urgency)}>
                      {request.urgency}
                    </Badge>
                    <Badge className="bg-red-100 text-red-800">
                      {request.bloodGroup}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="space-y-1">
                      <p><strong>Hospital:</strong> {request.hospital}</p>
                      <p><strong>Location:</strong> {request.location}</p>
                    </div>
                    <div className="space-y-1">
                      <p><strong>Date:</strong> {request.date}</p>
                      <div className="flex items-center">
                        <strong className="mr-2">Status:</strong>
                        {getStatusIcon(request.status)}
                        <span className="ml-1">{request.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;