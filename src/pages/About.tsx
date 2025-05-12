import Image from '../assets/Logo with name large.png'
const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Yadhu",
      role: "Founder & CEO",
      image:Image,
      bio: "With 15+ years in AI research and robotics, Sarah leads our vision of creating technology that enhances human capabilities."
    },
    {
      name: "Sulthansha N",
      role: "CTO",
      image: Image,
      bio: "Michael's expertise in machine learning and systems architecture drives our commitment to developing scalable, efficient AI solutions."
    },
    {
      name: "Mariyam Jahangir",
      role: "CMO",
      image: Image,
      bio: "Leading our R&D initiatives, Amira brings academic rigor and innovative thinking to our most complex AI challenges."
    },
    {
      name: "Nazeeb Nazeer",
      role: "COO",
      image: Image, 
      bio: "David's background in sustainable energy and electric vehicles guides our EV innovation strategy and implementation."
    }
  ];

 

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 "
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 ">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
              About <span className="text-[#00C896]">Space Zero AI</span>
            </h1>
            <p className="text-xl text-gray-300" data-aos="fade-up" data-aos-delay="100">
              We're a team of innovators and researchers dedicated to pushing the boundaries of what's 
              possible with artificial intelligence in transportation, security, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="mb-8">
                <h2 className="text-3xl text-stone font-bold mb-6">Our <span className="text-gradient">Mission</span></h2>
                <p className="text-gray-200 leading-relaxed">
                  At Space Zero AI, our mission is to harness the transformative power of artificial intelligence 
                  to create safer, more efficient, and sustainable technological solutions. We believe in 
                  responsible innovation that addresses real-world challenges while prioritizing human 
                  well-being and environmental stewardship.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl text-stone font-bold mb-6">Our <span className="text-gradient">Vision</span></h2>
                <p className="text-gray-200 leading-relaxed">
                  We envision a future where AI-powered systems seamlessly integrate with human activities, 
                  enhancing capabilities, improving safety, and promoting sustainability across industries. 
                  Our goal is to be at the forefront of this transformation, setting new standards for 
                  what's possible when cutting-edge technology meets human ingenuity.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2" data-aos="fade-left">
              <img src={Image} alt="" />
            </div>
          </div>
        </div>
      </section>


      
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl text-stone-200 font-bold mb-4">Our <span className="text-gradient">Leadership</span></h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Meet the innovative minds behind Space Zero AI. Our leadership team brings together expertise from 
              diverse fields to drive our mission forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-black rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-75 h-75 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                   <div 
                key={index}
                className="bg-black p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 glow-effect"
                data-aos="fade-up"
              
              >
                  <h3 className="text-xl text-stone-300 font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#00C896] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;