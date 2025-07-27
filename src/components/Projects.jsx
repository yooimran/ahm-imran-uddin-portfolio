import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FaGithub, FaExternalLinkAlt, FaShopify, FaReact, FaJs, FaHtml5, FaEye, FaNodeJs, FaKey } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from 'react-icons/si';

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'ecommerce', label: 'E-commerce' }
  ];

  // Load projects data from JSON file
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Import projects data from JSON file
        const projectsModule = await import('../data/projects.json');
        const projectsData = projectsModule.default;
        
        setProjects(projectsData);
        console.log('✅ Projects loaded from JSON:', projectsData.length);
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // Filter projects based on active filter
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  // Get technology icon
  const getTechIcon = (tech) => {
    const icons = {
      'React': FaReact,
      'React 19': FaReact,
      'JavaScript': FaJs,
      'HTML': FaHtml5,
      'Tailwind CSS': SiTailwindcss,
      'MongoDB': SiMongodb,
      'Firebase': SiFirebase,
      'Firebase Auth': SiFirebase,
      'Shopify Liquid': FaShopify,
      'Shopify API': FaShopify,
      'Node.js': FaNodeJs,
      'JWT': FaKey,
      'Express.js': SiExpress,
      'Express': SiExpress
    };
    return icons[tech] || FaJs;
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-700 rounded w-64 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-96 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="bg-gray-800 rounded-2xl overflow-hidden animate-pulse">
                    <div className="h-48 bg-gray-700"></div>
                    <div className="p-6">
                      <div className="h-6 bg-gray-700 rounded mb-3"></div>
                      <div className="h-4 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded mb-4 w-3/4"></div>
                      <div className="flex gap-2 mb-6">
                        <div className="h-6 bg-gray-700 rounded-full w-16"></div>
                        <div className="h-6 bg-gray-700 rounded-full w-20"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 bg-gray-700 rounded flex-1"></div>
                        <div className="h-8 bg-gray-700 rounded flex-1"></div>
                        <div className="h-8 bg-gray-700 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                {/* Project Image - SIMPLIFIED */}
                <div className="h-48 bg-gray-700">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log(`Image failed to load: ${project.image}`);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                    onLoad={() => console.log(`✅ Image loaded: ${project.title}`)}
                  />
                  <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white" style={{display: 'none'}}>
                    <div className="text-center">
                      <div className="text-4xl mb-2">🖼️</div>
                      <div className="text-sm">{project.title}</div>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
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
                    {project.technologies.map((tech, techIndex) => {
                      const IconComponent = getTechIcon(tech);
                      return (
                        <span
                          key={techIndex}
                          className="flex items-center gap-1 bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600 hover:bg-gray-600 transition-colors duration-200"
                        >
                          <IconComponent className="text-sm" />
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="flex items-center gap-2 bg-slate-700 text-white px-3 py-2 rounded-lg hover:bg-slate-600 transition-colors duration-300 text-sm font-medium flex-1 justify-center cursor-pointer"
                    >
                      <FaEye />
                      Details
                    </button>
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

          {/* Empty State */}
          {filteredProjects.length === 0 && !loading && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
              <p className="text-gray-300">Try selecting a different filter to see more projects.</p>
            </div>
          )}

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
