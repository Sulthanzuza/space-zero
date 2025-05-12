import { Zap, Shield, Plane, Cpu, Eye, Lock } from 'lucide-react';
import Button from '../components/Button';
import { useState } from 'react';
import aieera from '../assets/Logo with name large.png'
const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const services = [
    {
      icon: <Zap size={40} className="text-[#00C896]" />,
      title: "EV Charging Infrastructure",
      description: "AI-optimized electric vehicle charging networks with smart grid integration, demand forecasting, and energy management.",
      category: "ev",
      image: aieera
    },
    {
      icon: <Cpu size={40} className="text-[#00C896]" />,
      title: "Autonomous Vehicle Systems",
      description: "Advanced AI navigation, perception, and decision-making systems for autonomous and semi-autonomous vehicles.",
      category: "ev",
      image: aieera
    },
    {
      icon: <Shield size={40} className="text-[#00C896]" />,
      title: "Anti-UAV Defense Systems",
      description: "Cutting-edge counter-drone technology using AI for detection, tracking, and neutralization of unauthorized drones.",
      category: "drone",
      image: aieera
    },
    {
      icon: <Plane size={40} className="text-[#00C896]" />,
      title: "Air Taxi Solutions",
      description: "Next-generation urban air mobility platforms with AI flight control, route optimization, and safety systems.",
      category: "drone",
      image: aieera
    },
    {
      icon: <Eye size={40} className="text-[#00C896]" />,
      title: "Drone Surveillance",
      description: "Intelligent drone surveillance systems for infrastructure monitoring, security operations, and emergency response.",
      category: "drone",
      image: aieera
    },
    {
      icon: <Lock size={40} className="text-[#00C896]" />,
      title: "Cybersecurity Monitoring",
      description: "AI-powered threat detection, prevention, and response systems to protect critical infrastructure and digital assets.",
      category: "cyber",
      image: aieera
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
              Our <span className="text-[#00C896]">Services</span>
            </h1>
            <p className="text-xl text-gray-300" data-aos="fade-up" data-aos-delay="100">
              Cutting-edge AI solutions designed to revolutionize transportation, security, 
              and monitoring systems across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Filter and Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-center mb-12" data-aos="fade-up">
            <div className="inline-flex bg-gray-500 rounded-full p-1">
              {[
                { id: 'all', label: 'All Services' },
                { id: 'ev', label: 'EV Technology' },
                { id: 'drone', label: 'Drone Systems' },
                { id: 'cyber', label: 'Cybersecurity' }
              ].map((category) => (
                <button
                  key={category.id}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-[#00C896] text-white shadow-md'
                      : 'text-gray-100 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index}
                className="bg-black rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-gray-900"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-38 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  
                  <h3 className="text-xl text-stone-200 font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <Button to="/contact" color="outline" size="small">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss how our cutting-edge AI solutions can help your organization 
              stay ahead of the curve.
            </p>
            <Button to="/contact" color="primary" size="large">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;