import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
           
            <div className="ml-2">
              <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-white'
              }`}>
                SPACE ZERO
              </span>
              <span className={`block text-xs md:text-sm font-light transition-colors duration-300 ${
                scrolled ? 'text-gray-200' : 'text-gray-300'
              }`}>
                ARTIFICIAL INTELLIGENCE
              </span>
            </div>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['/', '/about', '/services', '/projects', '/contact'].map((path, index) => (
              <NavLink 
                key={index}
                to={path} 
                className={({ isActive }) => `
                  relative py-2 font-medium text-sm transition-colors duration-300
                  ${scrolled 
                    ? (isActive ? 'text-[#00C896]' : 'text-white hover:text-[#00C896]') 
                    : (isActive ? 'text-[#00C896]' : 'text-white hover:text-[#00C896]')}
                  
                  ${isActive ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00C896]' : ''}
                `}
              >
                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </NavLink>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#00C896]" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`
          fixed inset-0 bg-[#0E1A2D] z-40 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden pt-20
        `}
      >
        <nav className="flex flex-col items-center space-y-6 py-8">
          {['/', '/about', '/services', '/projects', '/contact'].map((path, index) => (
            <NavLink 
              key={index}
              to={path} 
              className={({ isActive }) => `
                text-xl font-medium ${isActive ? 'text-[#00C896]' : 'text-white hover:text-[#00C896]'}
              `}
            >
              {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;