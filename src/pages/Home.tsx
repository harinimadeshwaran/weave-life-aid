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
  Zap,
  MapPin,
  Calendar,
  Activity,
  Award
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-medical.jpg';
import donationProcess from '@/assets/donation-process.jpg';
import medicalTeam from '@/assets/medical-team.jpg';
import donationCamp from '@/assets/donation-camp.jpg';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Quick Blood Requests',
      description: 'Submit urgent blood requests and get connected with verified donors instantly through our streamlined process.',
      image: donationProcess
    },
    {
      icon: Shield,
      title: 'Verified Donors',
      description: 'All our donors are thoroughly verified and health-screened for safety by certified medical professionals.',
      image: medicalTeam
    },
    {
      icon: Heart,
      title: 'Safe Donation Process',
      description: 'Follow medical guidelines with proper safety protocols and medical supervision at certified centers.',
      image: donationProcess
    },
    {
      icon: MapPin,
      title: 'Mobile Blood Camps',
      description: 'Regular blood donation camps in communities to make donation convenient and accessible.',
      image: donationCamp
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Lives Saved', icon: Heart, color: 'text-red-500' },
    { number: '5,000+', label: 'Registered Donors', icon: Users, color: 'text-blue-500' },
    { number: '50+', label: 'Partner Hospitals', icon: Shield, color: 'text-green-500' },
    { number: '24/7', label: 'Emergency Support', icon: Clock, color: 'text-purple-500' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Medical Officer',
      content: 'BloodLife has revolutionized how we connect with blood donors. The platform ensures we get the right blood types quickly during emergencies.',
      avatar: '👩‍⚕️'
    },
    {
      name: 'Mark Thompson',
      role: 'Regular Donor',
      content: 'I\'ve been donating through BloodLife for 2 years. The process is simple, safe, and I know my donations are making a real difference.',
      avatar: '👨‍💼'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Grateful Recipient',
      content: 'When my daughter needed an emergency transfusion, BloodLife helped us find donors within hours. Forever grateful to this community.',
      avatar: '👩‍🍼'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative hero-medical min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <Activity className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Saving Lives Since 2020</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 heading-medical text-white">
                Donate Blood,
                <span className="block text-gradient bg-gradient-to-r from-red-200 to-pink-200 bg-clip-text text-transparent">Save Lives</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-xl">
                Join our community of life-savers. Every donation can save up to three lives. 
                Be the hero someone needs today with safe, verified donation process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/register/donor">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-gray-50 shadow-xl hover:shadow-2xl scale-hover font-semibold px-8 py-4 text-lg"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Become a Donor
                  </Button>
                </Link>
                <Link to="/login">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary scale-hover font-semibold px-8 py-4 text-lg bg-white/10 backdrop-blur-sm"
                  >
                    <Droplet className="mr-2 h-5 w-5" />
                    Find Blood
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-200">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  <span>100% Safe Process</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  <span>Verified Donors</span>
                </div>
              </div>
            </div>
            <div className="fade-in relative lg:pl-8">
              <div className="card-medical bg-white/10 backdrop-blur-md border-white/20 p-8">
                <div className="text-center text-white">
                  <div className="bg-white/20 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center glow-hover">
                    <Heart className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
                  <p className="text-gray-100 mb-6 leading-relaxed">
                    Over 10,000 lives saved through our platform. Be part of this life-saving community.
                  </p>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-white">10K+</div>
                      <div className="text-gray-200 text-sm">Lives Saved</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-white">5K+</div>
                      <div className="text-gray-200 text-sm">Active Donors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 heading-medical">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-medical">
              See the difference we're making together in the community
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center slide-up">
                <div className="card-feature p-8 scale-hover">
                  <div className={`icon-feature mx-auto mb-6 ${stat.color}`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 heading-medical">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
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
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">Why Choose BloodLife?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 heading-medical">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-medical">
              We've built a comprehensive platform that prioritizes safety, efficiency, and accessibility 
              for both donors and recipients with state-of-the-art medical standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="card-feature p-8 scale-hover group">
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="icon-feature group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 heading-medical">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-medical mb-4">
                      {feature.description}
                    </p>
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 heading-medical">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-medical">
              Real stories from doctors, donors, and recipients who trust BloodLife
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-feature p-6 scale-hover">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-medical relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <Heart className="h-5 w-5 mr-2 text-white" />
              <span className="text-white font-medium">Join the Life-Saving Community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white heading-medical">
              Ready to Save Lives?
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of donors who have already made a difference. Your donation could be the gift of life someone desperately needs. Start your journey today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/register/donor">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-50 shadow-xl hover:shadow-2xl scale-hover font-semibold px-8 py-4 text-lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                Register as Donor
              </Button>
            </Link>
            <Link to="/register/user">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary scale-hover font-semibold px-8 py-4 text-lg bg-white/10 backdrop-blur-sm"
              >
                <Users className="mr-2 h-5 w-5" />
                Register as Recipient
              </Button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">15 mins</div>
              <div className="text-gray-200 text-sm">Quick Process</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">3 Lives</div>
              <div className="text-gray-200 text-sm">Per Donation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-gray-200 text-sm">Safe & Secure</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;