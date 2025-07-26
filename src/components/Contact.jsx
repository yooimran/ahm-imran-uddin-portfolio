import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "ahmimranuddin@gmail.com",
      link: "mailto:ahmimranuddin@gmail.com"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+880130398229",
      link: "tel:+880130398229"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/yooimran",
      color: "hover:text-gray-300"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/a-h-m-imran-uddin",
      color: "hover:text-blue-400"
    },
    {
      icon: FaFacebook,
      name: "Facebook",
      url: "https://facebook.com/a.h.md.imran.uddin",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating contact symbols */}
        <div className="absolute top-1/4 right-1/6 text-blue-400/20 text-4xl animate-float delay-600 font-mono">📧</div>
        <div className="absolute bottom-1/4 left-1/6 text-purple-400/20 text-5xl animate-float delay-1600 font-mono">📱</div>
        <div className="absolute top-2/3 left-1/3 text-green-400/20 text-3xl animate-float delay-2600 font-mono">💬</div>
        <div className="absolute top-1/3 right-1/3 text-orange-400/20 text-3xl animate-float delay-800 font-mono">send()</div>
        <div className="absolute bottom-1/3 left-1/4 text-cyan-400/20 text-2xl animate-float delay-1800 font-mono">connect()</div>
        <div className="absolute top-1/5 left-1/5 text-indigo-400/20 text-4xl animate-float delay-1200 font-mono">@</div>
        <div className="absolute bottom-1/5 right-1/4 text-red-400/20 text-3xl animate-float delay-2200 font-mono">POST</div>
        <div className="absolute top-3/4 right-1/5 text-teal-400/20 text-2xl animate-float delay-1400 font-mono">fetch()</div>
        <div className="absolute top-1/6 right-2/5 text-violet-400/20 text-3xl animate-float delay-2400 font-mono">🌐</div>
        <div className="absolute bottom-2/3 left-2/5 text-pink-400/20 text-2xl animate-float delay-1000 font-mono">response</div>
        <div className="absolute top-1/2 right-1/6 text-yellow-400/20 text-4xl animate-float delay-2000 font-mono">✉️</div>
        <div className="absolute bottom-1/6 left-1/3 text-emerald-400/20 text-3xl animate-float delay-600 font-mono">await</div>
        <div className="absolute top-5/6 right-1/3 text-blue-400/20 text-2xl animate-float delay-2800 font-mono">submit()</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto rounded-full mb-6 animate-gradient-x"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Let's work together to create something amazing!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-2xl font-bold text-white mb-8">
                Let's Connect
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group animate-fade-in-up" style={{animationDelay: `${300 + (index * 100)}ms`}}>
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 ${social.color} transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700`}
                    >
                      <social.icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl border border-gray-600">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Available for Freelance
                </h4>
                <p className="text-gray-300">
                  I'm currently available for freelance projects and would love to 
                  discuss your ideas. Whether it's a small business website or a 
                  complex web application, let's make it happen!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 animate-fade-in-up delay-300 hover:shadow-xl transition-shadow duration-500 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-slate-700 to-slate-600 hover:shadow-lg transform hover:-translate-y-1'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
