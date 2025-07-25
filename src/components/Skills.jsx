import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNode, 
  FaGithub,
  FaShopify,
  FaDatabase,
  FaFire
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiFirebase,
  SiShopify
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500", level: 95 },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", level: 90 },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500", level: 88 },
        { name: "React", icon: FaReact, color: "text-cyan-500", level: 85 },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500", level: 92 }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: FaNode, color: "text-green-500", level: 80 },
        { name: "Express.js", icon: FaNode, color: "text-green-500", level: 80 },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600", level: 85 },
        { name: "Firebase", icon: SiFirebase, color: "text-orange-600", level: 82 }
      ]
    },
    {
      title: "E-commerce & Tools",
      skills: [
        { name: "Shopify", icon: FaShopify, color: "text-green-500", level: 88 },
        { name: "Shopify Liquid", icon: SiShopify, color: "text-green-600", level: 85 },
        { name: "GitHub", icon: FaGithub, color: "text-gray-800", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating tech symbols */}
        <div className="absolute top-1/4 right-1/5 text-blue-400/20 text-5xl animate-float delay-700 font-mono">React</div>
        <div className="absolute bottom-1/4 left-1/5 text-purple-400/20 text-4xl animate-float delay-1500 font-mono">JS</div>
        <div className="absolute top-2/3 right-1/3 text-green-400/20 text-3xl animate-float delay-2200 font-mono">CSS</div>
        <div className="absolute top-1/3 left-1/4 text-orange-400/20 text-4xl animate-float delay-900 font-mono">HTML</div>
        <div className="absolute bottom-1/3 right-1/4 text-cyan-400/20 text-3xl animate-float delay-1800 font-mono">Node</div>
        <div className="absolute top-1/5 left-1/3 text-indigo-400/20 text-2xl animate-float delay-2500 font-mono">MongoDB</div>
        <div className="absolute bottom-1/5 left-2/5 text-red-400/20 text-3xl animate-float delay-1200 font-mono">Git</div>
        <div className="absolute top-3/4 right-1/5 text-teal-400/20 text-4xl animate-float delay-600 font-mono">API</div>
        <div className="absolute top-1/6 right-2/5 text-violet-400/20 text-2xl animate-float delay-2800 font-mono">Firebase</div>
        <div className="absolute bottom-2/3 left-1/6 text-pink-400/20 text-3xl animate-float delay-1000 font-mono">Tailwind</div>
        <div className="absolute top-1/2 left-1/5 text-yellow-400/20 text-4xl animate-float delay-1600 font-mono">npm</div>
        <div className="absolute bottom-1/6 right-2/5 text-emerald-400/20 text-2xl animate-float delay-2400 font-mono">Shopify</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto rounded-full mb-6 animate-gradient-x"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are the technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg p-8 animate-fade-in-up hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500" style={{animationDelay: `${categoryIndex * 200}ms`}}>
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group p-6 rounded-xl bg-gray-700/50 hover:bg-gray-600/50 hover:shadow-lg transition-all duration-300 border border-gray-600 animate-fade-in-up hover:scale-105"
                      style={{animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`}}
                    >
                      {/* Skill Icon and Name */}
                      <div className="flex items-center mb-4">
                        <skill.icon 
                          className={`text-4xl ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300`} 
                        />
                        <div>
                          <h4 className="text-lg font-semibold text-white">
                            {skill.name}
                          </h4>
                          <span className="text-sm text-gray-300">
                            {skill.level}% Proficiency
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-slate-500 to-slate-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl p-8 text-white border border-gray-600">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                I'm constantly expanding my skill set and staying up-to-date with the latest 
                technologies and best practices in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
