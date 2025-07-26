import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Floating code elements */}
        <div className="absolute top-1/4 left-1/5 text-blue-400/20 text-4xl animate-float delay-500 font-mono">console.log()</div>
        <div className="absolute bottom-1/4 right-1/5 text-purple-400/20 text-3xl animate-float delay-1500 font-mono">function()</div>
        <div className="absolute top-2/3 left-1/6 text-pink-400/20 text-2xl animate-float delay-2500 font-mono">const</div>
        <div className="absolute top-1/3 right-1/3 text-cyan-400/20 text-3xl animate-float delay-800 font-mono">&lt;div&gt;</div>
        <div className="absolute bottom-1/2 left-1/3 text-green-400/20 text-2xl animate-float delay-1800 font-mono">if()</div>
        <div className="absolute top-1/5 right-2/5 text-orange-400/20 text-2xl animate-float delay-3000 font-mono">var</div>
        <div className="absolute bottom-1/3 right-1/6 text-indigo-400/20 text-3xl animate-float delay-1200 font-mono">.map()</div>
        <div className="absolute top-3/4 left-1/4 text-red-400/20 text-2xl animate-float delay-2200 font-mono">return</div>
        <div className="absolute top-1/6 left-2/5 text-teal-400/20 text-4xl animate-float delay-600 font-mono">=&gt;</div>
        <div className="absolute bottom-1/6 right-1/3 text-violet-400/20 text-3xl animate-float delay-2800 font-mono">async</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto rounded-full animate-gradient-x"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Passionate Web Developer & Problem Solver
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a dedicated web developer with a passion for creating modern, 
                  responsive, and user-centric web applications. With expertise in 
                  both frontend and backend technologies, I bring ideas to life 
                  through clean, efficient code.
                </p>
                
                <p>
                  My journey in web development has equipped me with a diverse skill 
                  set including JavaScript, React, Node.js, and various modern 
                  frameworks. I'm constantly learning and adapting to new 
                  technologies to deliver the best solutions.
                </p>
                
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or helping fellow 
                  developers in the community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-700/50 backdrop-blur-sm rounded-lg hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-500 border border-gray-600">
                  <div className="text-3xl font-bold text-blue-400 mb-2 animate-pulse">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-700/50 backdrop-blur-sm rounded-lg hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-700 border border-gray-600">
                  <div className="text-3xl font-bold text-purple-400 mb-2 animate-pulse">3+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative animate-fade-in-up delay-300">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 h-96 flex items-center justify-center hover:scale-105 transition-transform duration-500 border border-gray-600">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-slate-600 to-slate-500 mb-6 flex items-center justify-center animate-pulse hover:rotate-12 transition-transform duration-500">
                    <span className="text-3xl font-bold text-white">&lt;/&gt;</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Clean Code Enthusiast
                  </h4>
                  <p className="text-gray-300">
                    Writing maintainable, scalable, and efficient code
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                💡
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl animate-bounce delay-500">
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
