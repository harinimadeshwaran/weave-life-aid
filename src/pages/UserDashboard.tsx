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
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">BloodLife</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link
                  to="/dashboard/user"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/dashboard/user/find-donors"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Find Donors
                </Link>
                <Link
                  to="/dashboard/user/request-blood"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Request Blood
                </Link>
                <Link
                  to="/dashboard/user/my-requests"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  My Requests
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, {user?.name}</span>
              <Button onClick={handleLogout} variant="outline" size="sm">
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
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Available Donors</p>
                <p className="text-2xl font-bold text-gray-900">150+</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Requests</p>
                <p className="text-2xl font-bold text-gray-900">{requests.filter(r => r.status === 'Pending').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Successful Matches</p>
                <p className="text-2xl font-bold text-gray-900">{requests.filter(r => r.status === 'Accepted').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link to="/dashboard/user/find-donors">
              <Button className="w-full justify-start" variant="outline">
                <Search className="mr-2 h-4 w-4" />
                Find Blood Donors
              </Button>
            </Link>
            <Link to="/dashboard/user/request-blood">
              <Button className="w-full justify-start btn-medical">
                <Plus className="mr-2 h-4 w-4" />
                Create Blood Request
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Requests</CardTitle>
          </CardHeader>
          <CardContent>
            {requests.slice(0, 3).map((request) => (
              <div key={request.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div>
                  <p className="font-medium">{request.bloodGroup} needed</p>
                  <p className="text-sm text-gray-600">{request.hospital}</p>
                </div>
                <Badge variant={request.status === 'Pending' ? 'destructive' : 'default'}>
                  {request.status}
                </Badge>
              </div>
            ))}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDonors.map((donor) => (
          <Card key={donor.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <User className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{donor.name}</h3>
                    <p className="text-sm text-gray-600">Age: {donor.age}</p>
                  </div>
                </div>
                <Badge className="bg-red-100 text-red-800">
                  {donor.bloodGroup}
                </Badge>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {donor.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  {donor.contact}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Last donation: {donor.lastDonation}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  {donor.availability}
                </Badge>
                <Button size="sm" className="btn-medical">
                  Contact Donor
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
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