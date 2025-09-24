import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, Heart, User, Shield, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/App';
import Navbar from '@/components/Navbar';

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();
  
  const [showPassword, setShowPassword] = useState(false);
  const [activeRole, setActiveRole] = useState(searchParams.get('role') || 'user');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    const role = searchParams.get('role');
    if (role && ['admin', 'user', 'donor'].includes(role)) {
      setActiveRole(role);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate login with mock data
    const mockUser = {
      id: '1',
      name: activeRole === 'admin' ? 'Admin User' : activeRole === 'donor' ? 'John Donor' : 'Jane User',
      email: formData.email,
      role: activeRole as 'admin' | 'user' | 'donor',
      bloodGroup: activeRole === 'donor' ? 'O+' : undefined
    };

    login(mockUser);
    
    toast({
      title: "Login successful!",
      description: `Welcome back, ${mockUser.name}`,
    });

    // Redirect to appropriate dashboard
    navigate(`/dashboard/${activeRole}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return Shield;
      case 'donor':
        return Heart;
      default:
        return User;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'text-purple-600 border-purple-200 bg-purple-50';
      case 'donor':
        return 'text-red-600 border-red-200 bg-red-50';
      default:
        return 'text-blue-600 border-blue-200 bg-blue-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-center">Login</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeRole} onValueChange={setActiveRole} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="user" className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>User</span>
                  </TabsTrigger>
                  <TabsTrigger value="donor" className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>Donor</span>
                  </TabsTrigger>
                  <TabsTrigger value="admin" className="flex items-center space-x-1">
                    <Shield className="h-4 w-4" />
                    <span>Admin</span>
                  </TabsTrigger>
                </TabsList>

                {['user', 'donor', 'admin'].map((role) => {
                  const Icon = getRoleIcon(role);
                  const colorClass = getRoleColor(role);
                  
                  return (
                    <TabsContent key={role} value={role}>
                      <div className={`p-4 rounded-lg border mb-6 ${colorClass}`}>
                        <div className="flex items-center space-x-3">
                          <Icon className="h-6 w-6" />
                          <div>
                            <h3 className="font-semibold capitalize">{role} Login</h3>
                            <p className="text-sm opacity-80">
                              {role === 'admin' 
                                ? 'Manage users, donors, and requests'
                                : role === 'donor'
                                ? 'Access your donor profile and history'
                                : 'Find donors and manage blood requests'
                              }
                            </p>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={`Enter your ${role} email`}
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                          </label>
                          <div className="relative">
                            <Input
                              type={showPassword ? 'text' : 'password'}
                              name="password"
                              value={formData.password}
                              onChange={handleInputChange}
                              placeholder="Enter your password"
                              required
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-400" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                            />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                          </label>
                          <a href="#" className="text-sm text-red-600 hover:text-red-500">
                            Forgot password?
                          </a>
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full btn-medical"
                          size="lg"
                        >
                          Sign in as {role.charAt(0).toUpperCase() + role.slice(1)}
                        </Button>
                      </form>
                    </TabsContent>
                  );
                })}
              </Tabs>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center space-y-3">
                  <p className="text-sm text-gray-600">Don't have an account?</p>
                  <div className="flex flex-col space-y-2">
                    <Link to="/register/user">
                      <Button variant="outline" className="w-full">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Register as User
                      </Button>
                    </Link>
                    <Link to="/register/donor">
                      <Button variant="outline" className="w-full text-red-600 border-red-600 hover:bg-red-50">
                        <Heart className="mr-2 h-4 w-4" />
                        Register as Donor
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo Credentials */}
          <Card className="mt-6 bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Demo Credentials</h3>
              <div className="text-sm text-blue-800 space-y-1">
                <p><strong>Admin:</strong> admin@bloodlife.org / admin123</p>
                <p><strong>Donor:</strong> donor@bloodlife.org / donor123</p>
                <p><strong>User:</strong> user@bloodlife.org / user123</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;