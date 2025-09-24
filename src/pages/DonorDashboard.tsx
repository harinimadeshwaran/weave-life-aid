import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  User, 
  Calendar, 
  MapPin, 
  LogOut,
  Edit,
  CheckCircle,
  Clock,
  Phone,
  Hospital
} from 'lucide-react';
import { useAuth } from '@/App';
import { useToast } from '@/hooks/use-toast';

const DonorDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Mock data
  const [donations] = useState([
    {
      id: '1',
      hospital: 'City General Hospital',
      date: '2024-02-15',
      status: 'Completed',
      recipient: 'Emergency Patient',
      bloodGroup: 'O+'
    },
    {
      id: '2',
      hospital: 'Regional Medical Center',
      date: '2024-01-10',
      status: 'Completed',
      recipient: 'Surgery Patient',
      bloodGroup: 'O+'
    }
  ]);

  const [camps] = useState([
    {
      id: '1',
      title: 'Community Blood Drive',
      date: '2024-04-15',
      location: 'Central Community Center',
      time: '9:00 AM - 5:00 PM',
      organizer: 'Red Cross'
    },
    {
      id: '2',
      title: 'University Health Fair',
      date: '2024-04-22',
      location: 'State University Campus',
      time: '10:00 AM - 4:00 PM',
      organizer: 'University Health Services'
    }
  ]);

  const [requests] = useState([
    {
      id: '1',
      patientName: 'Emergency Patient',
      hospital: 'City General Hospital',
      bloodGroup: 'O+',
      urgency: 'Critical',
      distance: '2.5 miles',
      contact: '+1 (555) 123-4567'
    },
    {
      id: '2',
      patientName: 'John Doe',
      hospital: 'Regional Medical Center',
      bloodGroup: 'O+',
      urgency: 'Moderate',
      distance: '5.1 miles',
      contact: '+1 (555) 987-6543'
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
                  to="/dashboard/donor"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/dashboard/donor/profile"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  My Profile
                </Link>
                <Link
                  to="/dashboard/donor/donations"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  My Donations
                </Link>
                <Link
                  to="/dashboard/donor/camps"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Upcoming Camps
                </Link>
                <Link
                  to="/dashboard/donor/requests"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blood Requests
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
          <Route path="/" element={<DashboardHome donations={donations} requests={requests} />} />
          <Route path="/profile" element={<DonorProfile />} />
          <Route path="/donations" element={<MyDonations donations={donations} />} />
          <Route path="/camps" element={<UpcomingCamps camps={camps} />} />
          <Route path="/requests" element={<BloodRequests requests={requests} />} />
        </Routes>
      </div>
    </div>
  );
};

const DashboardHome = ({ donations, requests }: { donations: any[]; requests: any[] }) => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Donor Dashboard</h1>
        <p className="text-gray-600">Welcome back! Thank you for being a life-saver.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Donations</p>
                <p className="text-2xl font-bold text-gray-900">{donations.length}</p>
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
                <p className="text-sm font-medium text-gray-600">Lives Saved</p>
                <p className="text-2xl font-bold text-gray-900">{donations.length * 3}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Requests</p>
                <p className="text-2xl font-bold text-gray-900">{requests.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Next Eligible</p>
                <p className="text-2xl font-bold text-gray-900">45 days</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Donations</CardTitle>
          </CardHeader>
          <CardContent>
            {donations.slice(0, 3).map((donation) => (
              <div key={donation.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
                <div>
                  <p className="font-medium">{donation.hospital}</p>
                  <p className="text-sm text-gray-600">{donation.date}</p>
                </div>
                <Badge className="bg-green-100 text-green-800">
                  {donation.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Urgent Requests Near You</CardTitle>
          </CardHeader>
          <CardContent>
            {requests.slice(0, 3).map((request) => (
              <div key={request.id} className="py-3 border-b last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{request.bloodGroup} needed</p>
                  <Badge variant={request.urgency === 'Critical' ? 'destructive' : 'default'}>
                    {request.urgency}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{request.hospital} • {request.distance}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const DonorProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isAvailable, setIsAvailable] = useState(true);
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    bloodGroup: user?.bloodGroup || 'O+',
    location: 'Los Angeles, CA',
    age: '28',
    weight: '70',
    lastDonation: '2024-02-15'
  });

  const handleSave = () => {
    toast({
      title: "Profile updated successfully!",
      description: "Your information has been saved.",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-600">Manage your donor information and availability</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-6 w-6 text-red-600" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input
                  value={profile.name}
                  onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  value={profile.phone}
                  onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blood Group
                </label>
                <Select value={profile.bloodGroup} onValueChange={(value) => setProfile(prev => ({ ...prev, bloodGroup: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((group) => (
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
                Location
              </label>
              <Input
                value={profile.location}
                onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                </label>
                <Input
                  type="number"
                  value={profile.age}
                  onChange={(e) => setProfile(prev => ({ ...prev, age: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                </label>
                <Input
                  type="number"
                  value={profile.weight}
                  onChange={(e) => setProfile(prev => ({ ...prev, weight: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Donation
                </label>
                <Input
                  type="date"
                  value={profile.lastDonation}
                  onChange={(e) => setProfile(prev => ({ ...prev, lastDonation: e.target.value }))}
                />
              </div>
            </div>

            <Button onClick={handleSave} className="btn-medical">
              <Edit className="mr-2 h-4 w-4" />
              Save Profile
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Availability Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Available for Donation</p>
                <p className="text-sm text-gray-600">Toggle your availability status</p>
              </div>
              <Switch
                checked={isAvailable}
                onCheckedChange={setIsAvailable}
              />
            </div>

            <div className={`p-4 rounded-lg ${isAvailable ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
              <p className={`font-medium ${isAvailable ? 'text-green-900' : 'text-gray-700'}`}>
                Status: {isAvailable ? 'Available' : 'Unavailable'}
              </p>
              <p className={`text-sm ${isAvailable ? 'text-green-700' : 'text-gray-600'}`}>
                {isAvailable 
                  ? 'You will receive notifications for blood requests'
                  : 'You will not receive any donation requests'
                }
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Donation Eligibility</h4>
                  <div className="space-y-2 text-sm">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Age: Eligible (18-65)
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Weight: Eligible (&gt;50kg)
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Last donation: &gt;56 days ago
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const MyDonations = ({ donations }: { donations: any[] }) => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Donations</h1>
        <p className="text-gray-600">Track your donation history and impact</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{donations.length}</div>
            <p className="text-gray-600">Total Donations</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{donations.length * 3}</div>
            <p className="text-gray-600">Lives Saved</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{donations.length * 450}ml</div>
            <p className="text-gray-600">Blood Donated</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {donations.map((donation) => (
          <Card key={donation.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <h3 className="text-lg font-semibold">{donation.hospital}</h3>
                    <Badge className="bg-green-100 text-green-800">
                      {donation.status}
                    </Badge>
                    <Badge className="bg-red-100 text-red-800">
                      {donation.bloodGroup}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="space-y-1">
                      <p><strong>Date:</strong> {donation.date}</p>
                      <p><strong>Recipient:</strong> {donation.recipient}</p>
                    </div>
                    <div className="space-y-1">
                      <p><strong>Volume:</strong> 450ml</p>
                      <p><strong>Type:</strong> Whole Blood</p>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <Button variant="outline" size="sm">
                    Download Certificate
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

const UpcomingCamps = ({ camps }: { camps: any[] }) => {
  const { toast } = useToast();

  const handleRegister = (campId: string) => {
    toast({
      title: "Registered successfully!",
      description: "You've been registered for the blood donation camp.",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Blood Donation Camps</h1>
        <p className="text-gray-600">Find and register for blood donation camps near you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {camps.map((camp) => (
          <Card key={camp.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{camp.title}</h3>
                  <p className="text-gray-600">Organized by {camp.organizer}</p>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {camp.date} • {camp.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {camp.location}
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 mb-1">What to bring:</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Valid photo ID</li>
                    <li>• Good health and adequate rest</li>
                    <li>• Hydrated (drink plenty of water)</li>
                  </ul>
                </div>

                <Button 
                  onClick={() => handleRegister(camp.id)}
                  className="w-full btn-medical"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Register for Camp
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const BloodRequests = ({ requests }: { requests: any[] }) => {
  const { toast } = useToast();

  const handleAccept = (requestId: string) => {
    toast({
      title: "Request accepted!",
      description: "The hospital will contact you with further details.",
    });
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'High':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Blood Requests Near You</h1>
        <p className="text-gray-600">Help save lives by responding to urgent blood requests</p>
      </div>

      <div className="space-y-4">
        {requests.map((request) => (
          <Card key={request.id} className="hover:shadow-lg transition-shadow">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Hospital className="h-4 w-4 mr-2" />
                        {request.hospital}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {request.distance} away
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        {request.contact}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Posted 2 hours ago
                      </div>
                    </div>
                  </div>
                  
                  {request.urgency === 'Critical' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                      <p className="text-red-800 text-sm font-medium">
                        🚨 URGENT: This patient needs blood immediately. Lives are at stake.
                      </p>
                    </div>
                  )}
                </div>
                <div className="ml-4 space-y-2">
                  <Button 
                    onClick={() => handleAccept(request.id)}
                    className="btn-medical"
                    size="sm"
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Accept Request
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Get Directions
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

export default DonorDashboard;