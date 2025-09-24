import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Users, 
  Heart, 
  FileText, 
  Calendar,
  BarChart3,
  LogOut,
  Edit,
  Trash2,
  Plus,
  Search,
  Shield,
  UserCheck,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '@/App';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Mock data
  const [users] = useState([
    { id: '1', name: 'Alice Johnson', email: 'alice@example.com', bloodGroup: 'A+', location: 'Los Angeles', joined: '2024-01-15', status: 'Active' },
    { id: '2', name: 'Bob Smith', email: 'bob@example.com', bloodGroup: 'O-', location: 'San Francisco', joined: '2024-02-20', status: 'Active' },
  ]);

  const [donors] = useState([
    { id: '1', name: 'John Donor', email: 'john@example.com', bloodGroup: 'O+', location: 'Los Angeles', lastDonation: '2024-02-15', available: true, donations: 5 },
    { id: '2', name: 'Sarah Donor', email: 'sarah@example.com', bloodGroup: 'A+', location: 'San Diego', lastDonation: '2024-01-10', available: true, donations: 3 },
  ]);

  const [requests] = useState([
    { id: '1', patient: 'Emergency Patient', hospital: 'City General', bloodGroup: 'O+', urgency: 'Critical', status: 'Pending', date: '2024-03-15' },
    { id: '2', patient: 'Jane Doe', hospital: 'Regional Medical', bloodGroup: 'A+', urgency: 'Moderate', status: 'Assigned', date: '2024-03-14' },
  ]);

  const [camps] = useState([
    { id: '1', title: 'Community Blood Drive', date: '2024-04-15', location: 'Central Community Center', registered: 45, target: 100 },
    { id: '2', title: 'University Health Fair', date: '2024-04-22', location: 'State University Campus', registered: 32, target: 80 },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">BloodLife Admin</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link to="/dashboard/admin" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link to="/dashboard/admin/users" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                  Manage Users
                </Link>
                <Link to="/dashboard/admin/donors" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                  Manage Donors
                </Link>
                <Link to="/dashboard/admin/requests" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                  Requests
                </Link>
                <Link to="/dashboard/admin/camps" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                  Camps
                </Link>
                <Link to="/dashboard/admin/reports" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                  Reports
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Admin: {user?.name}</span>
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
          <Route path="/" element={<DashboardHome users={users} donors={donors} requests={requests} camps={camps} />} />
          <Route path="/users" element={<ManageUsers users={users} />} />
          <Route path="/donors" element={<ManageDonors donors={donors} />} />
          <Route path="/requests" element={<ManageRequests requests={requests} donors={donors} />} />
          <Route path="/camps" element={<ManageCamps camps={camps} />} />
          <Route path="/reports" element={<Reports users={users} donors={donors} requests={requests} camps={camps} />} />
        </Routes>
      </div>
    </div>
  );
};

const DashboardHome = ({ users, donors, requests, camps }: any) => {
  const stats = [
    { title: 'Total Users', value: users.length, icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { title: 'Active Donors', value: donors.filter((d: any) => d.available).length, icon: Heart, color: 'text-red-600', bgColor: 'bg-red-100' },
    { title: 'Pending Requests', value: requests.filter((r: any) => r.status === 'Pending').length, icon: AlertCircle, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    { title: 'Upcoming Camps', value: camps.length, icon: Calendar, color: 'text-green-600', bgColor: 'bg-green-100' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage users, donors, and blood donation activities</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className={`p-2 ${stat.bgColor} rounded-lg`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Blood Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {requests.slice(0, 5).map((request: any) => (
                <div key={request.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{request.bloodGroup} for {request.patient}</p>
                    <p className="text-sm text-gray-600">{request.hospital}</p>
                  </div>
                  <Badge variant={request.urgency === 'Critical' ? 'destructive' : 'default'}>
                    {request.urgency}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Donors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {donors.filter((d: any) => d.available).slice(0, 5).map((donor: any) => (
                <div key={donor.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{donor.name}</p>
                    <p className="text-sm text-gray-600">{donor.bloodGroup} • {donor.location}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Available</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ManageUsers = ({ users }: any) => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (userId: string) => {
    toast({ title: "Edit user functionality would be implemented here" });
  };

  const handleDelete = (userId: string) => {
    toast({ title: "Delete user functionality would be implemented here" });
  };

  const filteredUsers = users.filter((user: any) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Users</h1>
          <p className="text-gray-600">View and manage registered users</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Registered Users</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-80"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Blood Group</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user: any) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge className="bg-red-100 text-red-800">{user.bloodGroup}</Badge>
                  </TableCell>
                  <TableCell>{user.location}</TableCell>
                  <TableCell>{user.joined}</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">{user.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(user.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(user.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

const ManageDonors = ({ donors }: any) => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleAvailability = (donorId: string) => {
    toast({ title: "Donor availability updated" });
  };

  const filteredDonors = donors.filter((donor: any) =>
    donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Donors</h1>
          <p className="text-gray-600">View and manage blood donors</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Donor
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Blood Donors</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search donors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-80"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Blood Group</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Last Donation</TableHead>
                <TableHead>Total Donations</TableHead>
                <TableHead>Available</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDonors.map((donor: any) => (
                <TableRow key={donor.id}>
                  <TableCell className="font-medium">{donor.name}</TableCell>
                  <TableCell>{donor.email}</TableCell>
                  <TableCell>
                    <Badge className="bg-red-100 text-red-800">{donor.bloodGroup}</Badge>
                  </TableCell>
                  <TableCell>{donor.location}</TableCell>
                  <TableCell>{donor.lastDonation}</TableCell>
                  <TableCell>{donor.donations}</TableCell>
                  <TableCell>
                    <Switch
                      checked={donor.available}
                      onCheckedChange={() => handleToggleAvailability(donor.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

const ManageRequests = ({ requests, donors }: any) => {
  const { toast } = useToast();

  const handleAssignDonor = (requestId: string) => {
    toast({ title: "Donor assigned successfully" });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Blood Requests</h1>
        <p className="text-gray-600">View and manage blood requests</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blood Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Hospital</TableHead>
                <TableHead>Blood Group</TableHead>
                <TableHead>Urgency</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request: any) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.patient}</TableCell>
                  <TableCell>{request.hospital}</TableCell>
                  <TableCell>
                    <Badge className="bg-red-100 text-red-800">{request.bloodGroup}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={request.urgency === 'Critical' ? 'destructive' : 'default'}>
                      {request.urgency}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={request.status === 'Pending' ? 'destructive' : 'default'}>
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{request.date}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAssignDonor(request.id)}
                      disabled={request.status !== 'Pending'}
                    >
                      <UserCheck className="h-4 w-4 mr-1" />
                      Assign Donor
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

const ManageCamps = ({ camps }: any) => {
  const { toast } = useToast();

  const handleAddCamp = () => {
    toast({ title: "Add camp functionality would be implemented here" });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Blood Donation Camps</h1>
          <p className="text-gray-600">Organize and manage donation camps</p>
        </div>
        <Button onClick={handleAddCamp} className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Camp
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {camps.map((camp: any) => (
          <Card key={camp.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{camp.title}</h3>
                  <p className="text-gray-600">{camp.location}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Date:</strong> {camp.date}</p>
                <p><strong>Registered:</strong> {camp.registered}/{camp.target} donors</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${(camp.registered / camp.target) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button size="sm" className="flex-1">
                  Send Notifications
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Reports = ({ users, donors, requests, camps }: any) => {
  const totalDonations = donors.reduce((sum: number, donor: any) => sum + donor.donations, 0);
  const activeDonors = donors.filter((d: any) => d.available).length;
  const pendingRequests = requests.filter((r: any) => r.status === 'Pending').length;
  const upcomingCamps = camps.length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
        <p className="text-gray-600">View system performance and statistics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{users.length}</div>
            <p className="text-gray-600">Total Users</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{totalDonations}</div>
            <p className="text-gray-600">Total Donations</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{activeDonors}</div>
            <p className="text-gray-600">Active Donors</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{totalDonations * 3}</div>
            <p className="text-gray-600">Lives Saved</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-6 w-6" />
              Blood Group Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['O+', 'A+', 'B+', 'AB+', 'O-', 'A-', 'B-', 'AB-'].map((group) => {
                const count = donors.filter((d: any) => d.bloodGroup === group).length;
                const percentage = donors.length > 0 ? (count / donors.length) * 100 : 0;
                return (
                  <div key={group} className="flex items-center justify-between">
                    <span className="font-medium">{group}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-600 h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{count}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium">System Health</span>
                <Badge className="bg-green-100 text-green-800">Healthy</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="font-medium">Active Sessions</span>
                <span className="font-bold">{users.length + donors.length}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium">Pending Requests</span>
                <span className="font-bold">{pendingRequests}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="font-medium">Upcoming Camps</span>
                <span className="font-bold">{upcomingCamps}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;