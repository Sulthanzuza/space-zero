import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Orb from '../components/Orb'
import SpotlightCard from '../components/SpotlightCard';
import Background from "../assets/ev.jpeg"
import checkIcon from "../assets/Care of Tesla.jpeg"
const Home = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      setBackgroundPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
  className="relative h-screen flex items-center overflow-hidden bg-black"
  style={{ width: '100%', height: '600px', position: 'relative' }}
>
  <div className="absolute inset-0 flex items-center justify-center">
    <Orb
      hoverIntensity={0.5}
      rotateOnHover={true}
      hue={0}
      forceHoverState={false}
    />
  </div>
  
  <div className="container mx-auto px-4 md:px-8 relative z-10">
    <div className="mx-auto text-center max-w-3xl" data-aos="fade-up" data-aos-delay="300">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
        Beyond <span className="text-[#00C896]">Future</span> 
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
        "The fusion of artificial intelligence and human ingenuity creates limitless possibilities for a sustainable tomorrow."
      </p>
      
    </div>
  </div>
  
  <div className="absolute bottom-8 left-0 right-0 text-center">
    <div className="animate-bounce inline-block">
      <svg className="w-6 h-6 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </div>
</section>

      {/* Innovation Areas */}
      <section className="py-20 bg-[#000000]">

        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl text-gray-300 font-bold mb-4">Transforming Industries Through <span className="text-gradient">AI Innovation</span></h2>
            <p className="text-gray-600 max-w-3xl text-stone mx-auto">
              Our cutting-edge AI solutions power the next generation of technology across multiple sectors, 
              creating safer, smarter, and more sustainable systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {[
              {
                
                title: "EV Innovations",
                description: "Advancing electric vehicle technology with AI-powered charging networks, smart energy management, and autonomous driving capabilities.",
                delay: 0
              },
              {
              
                title: "Drone Technologies",
                description: "Revolutionary drone systems for surveillance, transportation, and counter-UAV operations with advanced AI-driven navigation and control.",
                delay: 200
              },
              {
               
                title: "Cybersecurity Systems",
                description: "Next-generation AI monitoring and cybersecurity solutions that predict, prevent, and neutralize digital threats in real-time.",
                delay: 400
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-[#080808] p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 glow-effect"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
              
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-500 mb-4">{item.description}</p>
                <Link to="/services" className="text-[#00C896] font-medium flex items-center hover:underline">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Project Highlight */}
      <section className="py-20 relative bg-black">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-fixed bg-center opacity-10"
          style={{
            backgroundImage:`url(${Background})` ,
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">Dubai's <span className="text-gradient">Smart EV</span> Charging Network</h2>
              <p className="text-gray-400 mb-6">
                Our flagship project brings AI-optimized electric vehicle charging stations to Dubai, 
                creating one of the most advanced and efficient charging networks in the world.
              </p>
              <ul className="space-y-3 mb-8 text-gray-600">
                {[
                  "AI-driven demand forecasting and load balancing",
                  "Solar integration with smart grid technology",
                  "Real-time monitoring and predictive maintenance",
                  "Seamless mobile app integration for users"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#00C896] rounded-full p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button to="/projects" color="primary">
                View Project Details
              </Button>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={checkIcon} 
                  alt="EV Charging Station" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0E1A2D] p-6">
                  <span className="text-white text-sm font-medium">Dubai Smart City Initiative</span>
                  <h3 className="text-white text-xl font-bold">EV Charging Network</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SpotlightCard className="custom-spotlight-card bg-[#000000]" spotlightColor="rgba(0, 200, 150)">
      <section className="bg-[#000000] text-white py-20 rounded-4xl">
    <div className="container mx-auto px-4 md:px-8 text-center">
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Revolutionize EV Charging with AI
  </h2>
  <p className="text-gray-400 mb-8">
    Space Zero AI empowers charging networks with smart, AI-driven solutions. Optimize infrastructure, enhance user experience, and drive the future of electric mobility—one intelligent charge at a time.
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <Button to="/contact" color="primary">
      Get in Touch
    </Button>
    <Button to="/services" color="outline">
      Discover Our Solutions
    </Button>
  </div>
</div>

    </div>
  </section>
</SpotlightCard>

    </div>
  );
};

export default Home;