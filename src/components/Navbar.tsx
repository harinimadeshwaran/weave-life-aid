import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Home, 
  Info, 
  Heart, 
  Droplet, 
  Phone, 
  LogIn, 
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '@/App';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardPath = () => {
    if (!user) return '/';
    return `/dashboard/${user.role}`;
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">BloodLife</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-1 text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center space-x-1 text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Info className="h-4 w-4" />
                <span>About</span>
              </Link>
              {user ? (
                <Link
                  to={getDashboardPath()}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <Droplet className="h-4 w-4" />
                  <span>Find Blood</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <Droplet className="h-4 w-4" />
                  <span>Find Blood</span>
                </Link>
              )}
              <Link
                to="/contact"
                className="flex items-center space-x-1 text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* Auth Section */}
          <div className="hidden md:block">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Welcome, {user.name}</span>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-600 hover:bg-red-50"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/register/donor">
                  <Button className="btn-medical">
                    <Heart className="h-4 w-4 mr-2" />
                    Donate
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center space-x-1">
                      <LogIn className="h-4 w-4" />
                      <span>Login</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => navigate('/login?role=admin')}>
                      Admin Login
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/login?role=user')}>
                      User Login
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/login?role=donor')}>
                      Donor Login
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center space-x-2 text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                <Info className="h-4 w-4" />
                <span>About</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center space-x-2 text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span>Contact</span>
              </Link>
              {user ? (
                <div className="space-y-2 pt-4 border-t">
                  <div className="px-3 py-2 text-sm text-gray-500">
                    Welcome, {user.name}
                  </div>
                  <Button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    variant="outline"
                    size="sm"
                    className="w-full text-red-600 border-red-600 hover:bg-red-50"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="space-y-2 pt-4 border-t">
                  <Link to="/register/donor" onClick={() => setIsOpen(false)}>
                    <Button className="w-full btn-medical">
                      <Heart className="h-4 w-4 mr-2" />
                      Donate
                    </Button>
                  </Link>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      <LogIn className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;