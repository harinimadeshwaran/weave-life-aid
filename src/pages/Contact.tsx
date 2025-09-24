import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Heart
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Emergency Hotline',
      details: '+1 (555) 123-4567',
      description: '24/7 emergency blood requests',
      color: 'text-red-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'help@bloodlife.org',
      description: 'General inquiries and support',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Main Office',
      details: '123 Medical Center Drive',
      description: 'Health City, State 12345',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon - Fri: 8AM - 6PM',
      description: 'Weekend emergency line available',
      color: 'text-purple-600'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Have questions about blood donation or need emergency assistance? 
              We're here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className={`bg-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center ${info.color}`}>
                    <info.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="font-medium text-gray-900 mb-1">
                    {info.details}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Emergency Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Send className="mr-3 h-6 w-6 text-red-600" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
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
                          required
                          placeholder="Your full name"
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
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What is this regarding?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Please describe your inquiry in detail..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full btn-medical text-white font-semibold"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Information */}
            <div className="space-y-8">
              {/* Emergency Alert */}
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-900 mb-2">
                        Emergency Blood Needed?
                      </h3>
                      <p className="text-red-800 mb-4">
                        For urgent blood requirements, call our 24/7 emergency hotline immediately.
                      </p>
                      <Button className="btn-medical">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Emergency Line
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hospital Partners */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Partner Hospitals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">City General Hospital</h4>
                        <p className="text-sm text-gray-600">Downtown Medical District</p>
                      </div>
                      <p className="text-sm font-medium text-green-600">24/7</p>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Regional Medical Center</h4>
                        <p className="text-sm text-gray-600">North Healthcare Campus</p>
                      </div>
                      <p className="text-sm font-medium text-green-600">24/7</p>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Community Health Clinic</h4>
                        <p className="text-sm text-gray-600">South Side Location</p>
                      </div>
                      <p className="text-sm font-medium text-blue-600">8AM-6PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Quick Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <h4 className="font-medium text-gray-900">Donor Requirements</h4>
                      <p className="text-sm text-gray-600">Age, health, and eligibility criteria</p>
                    </a>
                    <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <h4 className="font-medium text-gray-900">Donation Process</h4>
                      <p className="text-sm text-gray-600">What to expect during donation</p>
                    </a>
                    <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <h4 className="font-medium text-gray-900">Safety Guidelines</h4>
                      <p className="text-sm text-gray-600">Our safety and screening procedures</p>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;