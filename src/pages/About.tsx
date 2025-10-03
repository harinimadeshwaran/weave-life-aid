import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Users, 
  Shield, 
  Target,
  CheckCircle,
  Award,
  TrendingUp,
  Activity,
  Smile,
  Zap
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import aboutBanner from '@/assets/about-banner.jpg';
import medicalTeam from '@/assets/medical-team.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We believe in the power of human kindness and the importance of helping others in their time of need.',
      color: 'from-red-500 to-pink-500',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All donations follow strict medical guidelines to ensure the safety of both donors and recipients.',
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong network of donors and recipients who support each other through life-saving connections.',
      color: 'from-green-500 to-teal-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'Quick response times and streamlined processes to ensure blood reaches those who need it most, fast.',
      color: 'from-purple-500 to-indigo-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Lives Saved' },
    { number: '5,000+', label: 'Active Donors' },
    { number: '50+', label: 'Partner Hospitals' },
    { number: '99%', label: 'Success Rate' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={aboutBanner} alt="Blood donation community" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Heart className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">About BloodLife</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              We're on a mission to bridge the gap between blood donors and those in critical need, 
              creating a community where saving lives is just one click away.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                <Activity className="mr-2 h-5 w-5" />
                Our Impact
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Users className="mr-2 h-5 w-5" />
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={medicalTeam} 
                alt="Medical team supporting blood donation" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-teal-500 text-white p-6 rounded-xl shadow-xl">
                <TrendingUp className="h-8 w-8 mb-2" />
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm">Patient Satisfaction</p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                BloodLife was created with a simple yet powerful vision: to ensure that no one suffers 
                or dies due to lack of blood. We connect voluntary blood donors with recipients in need, 
                creating a seamless network that saves lives every day.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every year, millions of people need blood transfusions. Our platform makes it easier 
                for donors to contribute and for those in need to find help quickly and safely.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-700 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-4 mt-6 p-4 bg-green-50 rounded-xl">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-base font-semibold text-gray-900">
                  Verified and trusted by medical professionals
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our commitment to saving lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color}`}></div>
                  <div className={`${value.iconBg} rounded-2xl p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`h-10 w-10 ${value.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How BloodLife Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to save lives or get the help you need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Register</h3>
              <p className="text-gray-600">
                Sign up as a donor or recipient. Complete your profile with necessary medical information.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect</h3>
              <p className="text-gray-600">
                Search for compatible donors or respond to urgent blood requests in your area.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Save Lives</h3>
              <p className="text-gray-600">
                Complete the donation process at verified medical facilities and make a life-saving difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 via-blue-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Smile className="h-16 w-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Making a Real Difference
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Every donation through our platform has a direct, measurable impact on saving lives. 
            Join our community of heroes who have already made a difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl font-bold mb-2">3</div>
              <div className="text-blue-100 text-lg">Lives saved per donation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 text-lg">Emergency response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-100 text-lg">Volunteer based</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;