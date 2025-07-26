import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import myImage from '../assets/my_image.jpg';
import { FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-blue-400/40 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-purple-400/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-pink-400/40 rounded-full animate-bounce delay-1200"></div>
        <div className="absolute top-2/3 left-1/4 w-4 h-4 bg-cyan-400/40 rounded-full animate-bounce delay-300"></div>
        
        {/* Code-themed floating elements */}
        <div className="absolute top-1/4 left-1/4 text-blue-400/30 text-6xl animate-pulse delay-800 font-mono">&lt;/&gt;</div>
        <div className="absolute bottom-1/4 right-1/4 text-purple-400/30 text-4xl animate-pulse delay-1500 font-mono">{ }</div>
        <div className="absolute top-1/2 right-1/5 text-pink-400/30 text-5xl animate-pulse delay-2500 font-mono">( )</div>
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/5 to-transparent animate-pulse duration-3000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 hover:scale-110 transition-transform duration-500 animate-pulse">
              <img 
                src={myImage} 
                alt="Ahm Imran - Web Developer"
                className="w-full h-full rounded-full object-cover hover:rotate-6 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-300" style={{display: 'none'}}>
                AI
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up delay-200">
            Hi, I'm Ahm Imran Uddin a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block animate-gradient-x">
              Web Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up delay-300">
            Creating beautiful, responsive, and user-friendly web experiences
            with modern technologies and best practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-500">
            <a
              href="#projects"
              className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 hover:from-slate-600 hover:to-slate-500"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-slate-500 text-slate-300 px-8 py-3 rounded-full font-semibold hover:bg-slate-500 hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up delay-700">
            <a
              href="https://github.com/yooimran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-slate-300 transform hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://bd.linkedin.com/in/a-h-m-imran-uddin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-slate-300 transform hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/a.h.md.imran.uddin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-slate-300 transform hover:scale-110 transition-all duration-300"
            >
              <FaFacebook size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
