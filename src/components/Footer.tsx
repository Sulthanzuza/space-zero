import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden">
    {/* Glow effect from bottom center */}
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[1600px] h-[200px] bg-[#00C896] opacity-20 blur-3xl rounded-full pointer-events-none z-0" />
  
    {/* Actual Footer Content */}
    <div className="relative z-10 container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <div className="flex items-center mb-4">
            
            <div className="ml-2">
              <span className="font-bold text-lg">SPACE ZERO</span>
              <span className="block text-xs font-light text-gray-400">ARTIFICIAL INTELLIGENCE</span>
            </div>
          </div>
          <p className="text-gray-400 mb-6 text-sm">
            Pioneering AI-based innovations in electronic vehicles, drone technology, 
            and cybersecurity to create a safer, more efficient future.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#00C896] transition-colors duration-300">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00C896] transition-colors duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00C896] transition-colors duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00C896] transition-colors duration-300">
              <Instagram size={18} />
            </a>
          </div>
        </div>
  
        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2">
            {[
              {path: '/', label: 'Home'},
              {path: '/about', label: 'About Us'},
              {path: '/services', label: 'Services'},
              {path: '/projects', label: 'Projects'},
              {path: '/contact', label: 'Contact'}
            ].map((link, index) => (
              <li key={index}>
                <NavLink 
                  to={link.path} 
                  className="text-gray-400 hover:text-[#00C896] transition-colors duration-300 text-sm"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Column 3: Services */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Our Services</h3>
          <ul className="space-y-2">
            {[
              'EV Innovation & Technology',
              'Anti-UAV Systems',
              'Air Taxi Solutions',
              'Drone Surveillance',
              'Cybersecurity Systems',
              'AI Monitoring Solutions'
            ].map((service, index) => (
              <li key={index}>
                <NavLink 
                  to="/services" 
                  className="text-gray-400 hover:text-[#00C896] transition-colors duration-300 text-sm"
                >
                  {service}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin size={18} className="text-[#00C896] mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-400 text-sm">
               xyz,abc<br />
                Dubai, United Arab Emirates
              </span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="text-[#00C896] mr-2 flex-shrink-0" />
              <a href="tel:+971501234567" className="text-gray-400 hover:text-[#00C896] transition-colors duration-300 text-sm">
                +971 123 123 123
              </a>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="text-[#00C896] mr-2 flex-shrink-0" />
              <a href="mailto:info@spacezeroai.com" className="text-gray-400 hover:text-[#00C896] transition-colors duration-300 text-sm">
                hello@aieera.com
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} aieera digital marketing. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;