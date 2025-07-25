import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaShopify, FaReact, FaJs, FaHtml5, FaEye } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';
import { Link } from 'react-router';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin panel.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      category: "fullstack",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Shopify Custom Theme",
      description: "Custom Shopify theme built with Liquid, JavaScript, and CSS. Includes responsive design, advanced product filtering, and optimized performance.",
      image: "/api/placeholder/400/250",
      technologies: ["Shopify Liquid", "JavaScript", "CSS", "HTML"],
      category: "ecommerce",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app built with React and Firebase. Features real-time updates, drag-and-drop functionality, and collaborative workspaces.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
      category: "frontend",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: false
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "Modern restaurant website with online ordering system. Built with React and integrated with payment processing and order management.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML"],
      category: "frontend",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: false
    },
    {
      id: 5,
      title: "Shopify App Development",
      description: "Custom Shopify app for inventory management with advanced analytics and reporting features. Built using Shopify API and modern web technologies.",
      image: "/api/placeholder/400/250",
      technologies: ["Shopify API", "Node.js", "React", "MongoDB"],
      category: "ecommerce",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: true
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing web development projects. Built with React and Tailwind CSS with smooth animations and modern design.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      category: "frontend",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'ecommerce', label: 'E-commerce' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const getTechIcon = (tech) => {
    const icons = {
      'React': FaReact,
      'JavaScript': FaJs,
      'HTML': FaHtml5,
      'Tailwind CSS': SiTailwindcss,
      'MongoDB': SiMongodb,
      'Firebase': SiFirebase,
      'Shopify Liquid': FaShopify,
      'Shopify API': FaShopify
    };
    return icons[tech] || FaJs;
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
        
        {/* Floating project symbols */}
        <div className="absolute top-1/4 left-1/5 text-blue-400/20 text-4xl animate-float delay-800 font-mono">📱</div>
        <div className="absolute bottom-1/4 right-1/5 text-purple-400/20 text-5xl animate-float delay-1800 font-mono">💻</div>
        <div className="absolute top-2/3 right-1/4 text-green-400/20 text-3xl animate-float delay-2800 font-mono">🚀</div>
        <div className="absolute top-1/3 left-1/3 text-orange-400/20 text-3xl animate-float delay-600 font-mono">&lt;App/&gt;</div>
        <div className="absolute bottom-1/3 right-1/3 text-cyan-400/20 text-4xl animate-float delay-1200 font-mono">{'{ code }'}</div>
        <div className="absolute top-1/5 right-2/5 text-indigo-400/20 text-2xl animate-float delay-2200 font-mono">useState()</div>
        <div className="absolute bottom-1/5 left-2/5 text-red-400/20 text-3xl animate-float delay-1600 font-mono">build()</div>
        <div className="absolute top-3/4 left-1/4 text-teal-400/20 text-2xl animate-float delay-2600 font-mono">deploy</div>
        <div className="absolute top-1/6 left-1/6 text-violet-400/20 text-4xl animate-float delay-400 font-mono">⚡</div>
        <div className="absolute bottom-2/3 right-1/6 text-pink-400/20 text-3xl animate-float delay-2000 font-mono">🎨</div>
        <div className="absolute top-1/2 right-1/6 text-yellow-400/20 text-2xl animate-float delay-1400 font-mono">export</div>
        <div className="absolute bottom-1/6 left-1/3 text-emerald-400/20 text-3xl animate-float delay-2400 font-mono">import</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto rounded-full mb-6 animate-gradient-x"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-200">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-slate-600 to-slate-500 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border border-gray-700"
                style={{animationDelay: `${index * 150}ms`}}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-gray-500">🖥️</div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => {
                      const IconComponent = getTechIcon(tech);
                      return (
                        <span
                          key={index}
                          className="flex items-center gap-1 bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                        >
                          <IconComponent className="text-sm" />
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link
                      to={`/project/${project.id}`}
                      className="flex items-center gap-2 bg-slate-700 text-white px-3 py-2 rounded-lg hover:bg-slate-600 transition-colors duration-300 text-sm font-medium flex-1 justify-center"
                    >
                      <FaEye />
                      Details
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 text-white px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm font-medium flex-1 justify-center border border-gray-600"
                    >
                      <FaGithub />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-slate-600 to-slate-500 text-white px-3 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium flex-1 justify-center"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">
              Want to see more projects or discuss a collaboration?
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-slate-700 to-slate-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
