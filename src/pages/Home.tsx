import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Droplet,
  Zap
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Quick Blood Requests',
      description: 'Submit urgent blood requests and get connected with verified donors instantly.',
      color: 'text-red-600'
    },
    {
      icon: Shield,
      title: 'Verified Donors',
      description: 'All our donors are thoroughly verified and health-screened for safety.',
      color: 'text-blue-600'
    },
    {
      icon: Heart,
      title: 'Safe Donation Process',
      description: 'Follow medical guidelines with proper safety protocols and medical supervision.',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Emergency blood requests can be submitted anytime, anywhere.',
      color: 'text-purple-600'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Lives Saved', icon: Heart },
    { number: '5,000+', label: 'Registered Donors', icon: Users },
    { number: '50+', label: 'Partner Hospitals', icon: Shield },
    { number: '24/7', label: 'Emergency Support', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Donate Blood,
                <span className="block text-red-200">Save Lives</span>
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Join our community of life-savers. Every donation can save up to three lives. 
                Be the hero someone needs today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register/donor">
                  <Button 
                    size="lg" 
                    className="bg-white text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Become a Donor
                  </Button>
                </Link>
                <Link to="/login">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold"
                  >
                    <Droplet className="mr-2 h-5 w-5" />
                    Find Blood
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="fade-in relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
                  <p className="text-red-100 mb-6">
                    Over 10,000 lives saved through our platform. Be part of this life-saving community.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold">10K+</div>
                      <div className="text-red-200 text-sm">Lives Saved</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">5K+</div>
                      <div className="text-red-200 text-sm">Donors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center slide-up">
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <stat.icon className="h-8 w-8 text-red-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BloodLife?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built a comprehensive platform that prioritizes safety, efficiency, and accessibility 
              for both donors and recipients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`bg-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Save Lives?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Join thousands of donors who have already made a difference. Your donation could be the gift of life someone desperately needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register/donor">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                <Heart className="mr-2 h-5 w-5" />
                Register as Donor
              </Button>
            </Link>
            <Link to="/register/user">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold"
              >
                Register as Recipient
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;