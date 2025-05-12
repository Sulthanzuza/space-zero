import { useState } from 'react';
import { MapPin, Calendar, Users, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import bg from "../assets/Premium Vector _ Green neon glowing in the dark electric car on high speed running concept Fast ev silhouette Vector illustration.jpeg"
import img1 from '../assets/Taking a Closer Look at Electric Car Efficiency.jpeg'
import img2 from'../assets/Electrification and the road to sustainability.jpeg'
import img3 from '../assets/Study_ How Megacars, More Driving Could Cancel Out EV Gains — Streetsblog USA.jpeg'
import img4 from'../assets/Electrification and the road to sustainability.jpeg'



const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const projectImages = [img1,img2,img3,img4];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };


  const otherProjects = [
    {
      title: "Autonomous Drone Surveillance System",
      description: "AI-powered drone network for critical infrastructure monitoring with automatic threat detection",
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1600",
      location: "Abu Dhabi, UAE",
      year: "2023"
    },
    {
      title: "Smart Traffic Management",
      description: "Integrated AI traffic optimization system reducing congestion by 37% in urban areas",
      image: "https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg?auto=compress&cs=tinysrgb&w=1600",
      location: "Riyadh, Saudi Arabia",
      year: "2022"
    },
    {
      title: "Cybersecurity Operations Center",
      description: "Next-generation security monitoring facility with predictive threat intelligence",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1600",
      location: "Doha, Qatar",
      year: "2023"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          backgroundImage:`url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
              Our <span className="text-[#00C896]">Projects</span>
            </h1>
            <p className="text-xl text-gray-300" data-aos="fade-up" data-aos-delay="100">
              Explore our portfolio of innovative AI solutions transforming industries across the Middle East and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-[#00C896] font-semibold mb-2 block">FEATURED PROJECT</span>
            <h2 className="text-3xl text-gray-300 md:text-4xl font-bold mb-4">Dubai's Smart EV Charging Network</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              A groundbreaking initiative implementing AI-optimized electric vehicle charging 
              stations throughout Dubai, supporting the emirate's vision for sustainable transportation.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Project Gallery */}
            <div className="lg:w-7/12" data-aos="fade-right">
              <div className="relative rounded-lg overflow-hidden shadow-xl h-96 md:h-[500px]">
                {projectImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === activeSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Dubai EV Charging Network ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Navigation buttons */}
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors duration-300"
                  onClick={prevSlide}
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors duration-300"
                  onClick={nextSlide}
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {projectImages.map((_, index) => (
                    <button 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === activeSlide ? 'bg-[#00C896]' : 'bg-white/50'
                      }`}
                      onClick={() => setActiveSlide(index)}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Project Details */}
            <div className="lg:w-5/12" data-aos="fade-left">
              <div className="bg-stone-950 p-8 rounded-lg h-full">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <MapPin size={18} className="text-[#00C896] mr-2" />
                    <span className='text-slate-300'>Dubai, UAE</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar size={18} className="text-[#00C896] mr-2" />
                    <span className='text-slate-300'>2022 - Present</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users size={18} className="text-[#00C896] mr-2" />
                    <span className='text-slate-300'>27 Team Members</span>
                  </div>
                </div>
                
                <h3 className="text-2xl text-slate-300 font-bold mb-4">Project Overview</h3>
                <p className="text-gray-300 mb-6">
                  In partnership with Dubai's Road and Transport Authority, we've designed and implemented a 
                  network of over 200 AI-optimized electric vehicle charging stations across the emirate. 
                  This innovative system features intelligent load balancing, predictive maintenance, 
                  and seamless integration with Dubai's smart city infrastructure.
                </p>
                
                <h3 className="text-xl font-bold text-slate-300 mb-3">Key Features</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "Real-time capacity management and load distribution",
                    "Smart grid integration with renewable energy sources",
                    "AI-driven demand forecasting for optimal energy usage",
                    "Mobile app for users with real-time availability and booking",
                    "Predictive maintenance to ensure 99.7% uptime",
                    "Data analytics dashboard for system performance optimization"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-[#00C896] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className='text-slate-300'>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl text-slate-300 font-bold mb-3">Results</h3>
                <p className="text-gray-300 mb-6">
                  The network has supported a 43% increase in EV adoption in Dubai, reduced carbon emissions by an 
                  estimated 27,000 tons annually, and achieved an average user satisfaction rating of 4.8/5.
                </p>
                
                <Button to="#" color="primary">
                  Full Case Study <ExternalLink size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl text-stone-400 font-bold mb-4">More <span className="text-gradient">Projects</span></h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Explore our other successful implementations across various industries and technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-black rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-gray-900"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin size={14} className="text-[#00C896] mr-1" />
                      <span>{project.location}</span>
                    </div>
                    <div className="text-gray-600 text-sm">
                      {project.year}
                    </div>
                  </div>
                  <h3 className="text-xl text-slate-300 font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <Button to="#" color="outline" size="small">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl text-stone-300 font-bold mb-4">Our <span className="text-gradient">Impact</span></h2>
            <p className="text-gray-400 text-bold max-w-3xl mx-auto">
              Our solutions create measurable impact across industries and communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "43%", label: "Increase in EV adoption" },
              { value: "27K", label: "Tons of CO₂ saved annually" },
              { value: "200+", label: "Charging stations deployed" },
              { value: "4.8/5", label: "Customer satisfaction rating" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-stone-950 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl font-bold text-[#00C896] mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss how we can help bring your vision to life with our cutting-edge AI solutions.
            </p>
            <Button to="/contact" color="primary" size="large">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;