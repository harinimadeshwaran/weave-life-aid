import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, Heart, ArrowLeft, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';

const RegisterDonor = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    bloodGroup: '',
    location: '',
    contactNumber: '',
    email: '',
    password: '',
    lastDonation: '',
    medicalConditions: ''
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  const genders = ['Male', 'Female', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['name', 'age', 'gender', 'bloodGroup', 'location', 'contactNumber', 'email', 'password'];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData].trim());
    
    if (emptyFields.length > 0) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!agreedToTerms) {
      toast({
        title: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    // Simulate registration
    toast({
      title: "Donor registration successful!",
      description: "Thank you for joining our life-saving community. Please login to continue.",
    });

    navigate('/login?role=donor');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Become a Blood Donor</h1>
            <p className="text-gray-600">Join our community of life-savers and help those in need</p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl flex items-center">
                <Heart className="mr-3 h-6 w-6 text-red-600" />
                Donor Registration
              </CardTitle>
              <p className="text-gray-600">Fill in your details to become a verified blood donor</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <Input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="Enter your age"
                      min="18"
                      max="65"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('gender', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        {genders.map((gender) => (
                          <SelectItem key={gender} value={gender}>
                            {gender}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Blood Group *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('bloodGroup', value)}>
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
                    Location (City/State) *
                  </label>
                  <Input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g., Los Angeles, CA"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number *
                  </label>
                  <Input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a strong password"
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Blood Donation (Optional)
                  </label>
                  <Input
                    type="date"
                    name="lastDonation"
                    value={formData.lastDonation}
                    onChange={handleInputChange}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    You must wait at least 56 days between whole blood donations
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medical Conditions (Optional)
                  </label>
                  <Input
                    type="text"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleInputChange}
                    placeholder="List any relevant medical conditions or medications"
                  />
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Donor Requirements
                  </h3>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Age between 18-65 years</li>
                    <li>• Weight at least 110 lbs (50 kg)</li>
                    <li>• Good general health</li>
                    <li>• No blood donation in the last 56 days</li>
                    <li>• Pass medical screening</li>
                  </ul>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  />
                  <label 
                    htmlFor="terms" 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{' '}
                    <a href="#" className="text-red-600 hover:text-red-500">
                      terms and conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-red-600 hover:text-red-500">
                      privacy policy
                    </a>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-medical"
                  size="lg"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Register as Donor
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center space-y-3">
                  <p className="text-sm text-gray-600">Already have an account?</p>
                  <Link to="/login">
                    <Button variant="outline" className="w-full">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Login
                    </Button>
                  </Link>
                  <div className="text-center">
                    <Link 
                      to="/register/user" 
                      className="text-sm text-blue-600 hover:text-blue-500"
                    >
                      Looking for blood? Register as a user instead
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegisterDonor;