import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault(); // Prevent default link behavior
    
    // Check if we're currently on a project detail page
    const isOnProjectPage = window.location.pathname.includes('/project/');
    
    if (isOnProjectPage) {
      // If on project page, navigate to home with hash using React Router
      navigate('/');
      // Small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const sectionId = href.replace('/#', '');
        const element = document.getElementById(sectionId);
        
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        } else if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on home page, scroll to the section
      const sectionId = href.replace('/#', '');
      const element = document.getElementById(sectionId);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else if (sectionId === 'home') {
        // Special case for home - scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' }
  ];
  

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-sm shadow-lg border-b border-gray-800 z-50 animate-slide-in-down ">
      <nav className="container  px-6 max-w-7xl mx-auto py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-white hover:scale-105 transition-transform duration-300">
            <span className="text-blue-400 animate-pulse">&lt;</span>
            Ahm iMRAN
            <span className="text-blue-400 animate-pulse">/&gt;</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-300 hover:text-slate-300 transition-colors duration-300 font-medium hover:scale-110 transform animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-slate-300 transition-colors duration-300"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setIsMenuOpen(false);
                }}
                className="block py-2 text-gray-300 hover:text-slate-300 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
