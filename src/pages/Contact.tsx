import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';
import img1 from '../assets/ev.jpeg'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Your message has been sent successfully. Our team will contact you shortly.'
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
              Contact <span className="text-[#00C896]">Us</span>
            </h1>
            <p className="text-xl text-gray-300" data-aos="fade-up" data-aos-delay="100">
              Let's discuss how our AI solutions can help transform your business. Our team is ready to answer your questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="lg:w-5/12" data-aos="fade-right">
              <div className="bg-stone-950 p-8 rounded-lg h-full">
                <h2 className="text-2xl text-slate-300 font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-300 mb-8">
                  Have questions about our AI solutions? Looking to partner with us or join our team? 
                  We'd love to hear from you. Reach out using any of the methods below.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-[#00C896] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1 text-slate-300">Visit Us</h3>
                      <p className="text-gray-300">
                       xyz,abc<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-[#00C896] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1 text-slate-300">Email Us</h3>
                      <a href="mailto:info@spacezeroai.com" className="text-gray-300 hover:text-[#00C896] transition-colors">
                        hello@aieera.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-[#00C896] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1 text-slate-300">Call Us</h3>
                      <a href="tel:+971501234567" className="text-gray-300 hover:text-[#00C896] transition-colors">
                        +971 123 123 123
                      </a>
                    </div>
                  </div>
                </div>
                
            
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-7/12" data-aos="fade-left">
              <div className="bg-stone-950 p-8 rounded-lg shadow-md border border-gray-900">
                <h2 className="text-2xl font-bold text-slate-300 mb-6">Send Us a Message</h2>
                
                {formStatus.submitted ? (
                  <div className={`p-4 rounded-lg mb-6 ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {formStatus.message}
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2  bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border  bg-gray-900 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-gray-300 font-medium mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border  bg-gray-900 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border  bg-gray-900 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
                      required
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="EV Technology">EV Technology</option>
                      <option value="Drone Systems">Drone Systems</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Partnership">Partnership Opportunity</option>
                      <option value="Careers">Careers</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border  bg-gray-900 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-[#00C896] text-white font-medium rounded-lg hover:bg-[#00866A] transition-colors duration-300"
                  >
                    Send Message
                    <Send size={16} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 relative h-96 bg-gray-200">
        <div className="h-full w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.9092353422017!2d55.268025976019485!3d25.204098833904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sus!4v1683097690641!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>


    </div>
  );
};

export default Contact;