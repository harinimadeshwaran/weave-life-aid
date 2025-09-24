import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Users, 
  Shield, 
  Target,
  CheckCircle,
  Award
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We believe in the power of human kindness and the importance of helping others in their time of need.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All donations follow strict medical guidelines to ensure the safety of both donors and recipients.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong network of donors and recipients who support each other through life-saving connections.',
    },
    {
      icon: Target,
      title: 'Efficiency',
      description: 'Quick response times and streamlined processes to ensure blood reaches those who need it most, fast.',
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About BloodLife</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to bridge the gap between blood donors and those in critical need, 
              creating a community where saving lives is just one click away.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  Verified and trusted by medical professionals
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">
                  Recognized by the National Blood Service for excellence in blood donation facilitation
                </p>
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
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Making a Real Difference
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Every donation through our platform has a direct, measurable impact on saving lives. 
            Join our community of heroes who have already made a difference.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-red-200">Lives saved per donation</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-red-200">Emergency response</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-red-200">Volunteer based</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;