import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
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
      url: "https://bd.linkedin.com/in/a-h-m-imran-uddin",
      color: "hover:text-blue-400"
    },
    {
      icon: FaFacebook,
      name: "Twitter",
      url: "https://www.facebook.com/a.h.md.imran.uddin",
      color: "hover:text-blue-300"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/Logo Section */}
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold mb-4">
              <span className="text-blue-400">&lt;</span>
              Developer
              <span className="text-blue-400">/&gt;</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Passionate web developer creating modern, responsive, and 
              user-friendly web experiences with cutting-edge technologies.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transform hover:scale-110 transition-all duration-300`}
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>
                <a 
                  href="mailto:your.email@example.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  ahmimranuddin@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+15551234567"
                  className="hover:text-white transition-colors duration-300"
                >
                  +8801303982229
                </a>
              </p>
              <p>Dhaka, Bangladesh</p>
            </div>
            
            {/* Call to Action */}
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-slate-700 to-slate-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Web Developer Portfolio. Made with{' '}
              <FaHeart className="inline text-red-500 mx-1" />
              using React & Tailwind CSS
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                Built with modern technologies
              </span>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-blue-500 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-teal-500 rounded text-xs">Tailwind</span>
                <span className="px-2 py-1 bg-purple-500 rounded text-xs">Vite</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-gradient-to-r from-slate-700 to-slate-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
