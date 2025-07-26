import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCalendar, FaTags } from 'react-icons/fa';
import { Link } from 'react-router';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load project data from JSON file
  useEffect(() => {
    const loadProject = async () => {
      try {
        setLoading(true);
        
        // Import projects data from JSON file
        const projectsModule = await import('../data/projects.json');
        const projectsData = projectsModule.default;
        
        // Find project by ID
        const foundProject = projectsData.find(p => p.id === parseInt(id));
        setProject(foundProject);
        
        console.log('✅ Project loaded from JSON:', foundProject?.title || 'Not found');
      } catch (error) {
        console.error('Error loading project:', error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProject();
    }

    // Scroll to a natural position (slightly below the header) instead of top
    const timer = setTimeout(() => {
      window.scrollTo({ 
        top: 100, // Scroll to just below the header
        behavior: 'smooth' 
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-slate-400 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading project details...</p>
        </div>
      </div>
    );
  }

  // Project not found
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        <Header />
        <main className="pt-20 relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
            <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
            <Link 
              to="/#projects"
              className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors duration-300"
            >
              <FaArrowLeft />
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-slate-500/10 to-slate-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-slate-400/10 to-slate-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-slate-600/10 to-slate-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating code symbols */}
        <div className="absolute top-1/4 right-1/6 text-slate-400/20 text-4xl animate-float delay-600 font-mono">&lt;/&gt;</div>
        <div className="absolute bottom-1/4 left-1/6 text-slate-400/20 text-5xl animate-float delay-1600 font-mono">{ }</div>
        <div className="absolute top-2/3 left-1/3 text-slate-400/20 text-3xl animate-float delay-2600 font-mono">( )</div>
        <div className="absolute top-1/3 right-1/3 text-slate-400/20 text-3xl animate-float delay-800 font-mono">export</div>
        <div className="absolute bottom-1/3 left-1/4 text-slate-400/20 text-2xl animate-float delay-1800 font-mono">import</div>
        <div className="absolute top-1/5 left-1/5 text-slate-400/20 text-4xl animate-float delay-1200 font-mono">⚡</div>
        <div className="absolute bottom-1/5 right-1/4 text-slate-400/20 text-3xl animate-float delay-2200 font-mono">📱</div>
        <div className="absolute top-3/4 right-1/5 text-slate-400/20 text-2xl animate-float delay-1400 font-mono">deploy</div>
        <div className="absolute top-1/6 right-2/5 text-slate-400/20 text-3xl animate-float delay-2400 font-mono">🚀</div>
        <div className="absolute bottom-2/3 left-2/5 text-slate-400/20 text-2xl animate-float delay-1000 font-mono">build()</div>
        <div className="absolute top-1/2 right-1/6 text-slate-400/20 text-4xl animate-float delay-2000 font-mono">💻</div>
        <div className="absolute bottom-1/6 left-1/3 text-slate-400/20 text-3xl animate-float delay-600 font-mono">git</div>
      </div>
      <Header />
      
      <main className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link 
                to="/#projects"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-300 mb-8 transition-colors duration-300 animate-fade-in-up"
              >
                <FaArrowLeft />
                Back to Projects
              </Link>

              {/* Project Header */}
              <div className="mb-8 animate-fade-in-up delay-200">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  {project.description}
                </p>
                
                {/* Project Meta */}
                <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>Completed: {project.completedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTags />
                    <span>Category: {project.category}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-medium border border-gray-600 hover:scale-105 transform"
                  >
                    <FaGithub />
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium hover:scale-105 transform"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto animate-fade-in-up delay-300">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-700 h-96 border border-gray-600 hover:scale-105 transition-transform duration-500">
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
                    <div className="text-8xl mb-4">🖥️</div>
                    <div className="text-xl font-semibold">{project.title}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Description */}
                <div className="animate-fade-in-up delay-400">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Project Overview
                  </h2>
                  <div className="prose text-gray-300 leading-relaxed">
                    {project.longDescription.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="animate-fade-in-up delay-500">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-gray-700 to-gray-600 text-gray-300 px-4 py-2 rounded-full font-medium border border-gray-600 hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">
                    Key Challenges
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center animate-fade-in-up delay-600">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg border border-gray-600 hover:bg-gray-600 transition-colors duration-300 animate-fade-in-up"
                    style={{animationDelay: `${700 + (index * 100)}ms`}}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-slate-500 to-slate-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-up delay-1000">
              Interested in Similar Work?
            </h2>
            <p className="text-xl text-slate-200 mb-8 animate-fade-in-up delay-1100">
              Let's discuss how I can help bring your project to life
            </p>
            <Link
              to="/#contact"
              className="inline-block bg-white text-slate-700 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-1200 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
