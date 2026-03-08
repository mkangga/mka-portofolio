import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Play, ExternalLink } from 'lucide-react';
import { PROJECTS, Project } from '../data/projects';

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-12 tracking-tighter"
        >
          SELECTED WORK
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/5 border border-white/10 mb-4 flex items-center justify-center">
                <project.icon 
                  strokeWidth={1}
                  className="w-32 h-32 text-white/20 group-hover:text-cyan-400/50 group-hover:scale-110 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-sm text-white/50 uppercase tracking-wider">
                {project.category} {project.role && `— ${project.role}`} — {project.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#111] border border-white/10 w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white hover:text-black rounded-full transition-colors border border-white/10"
              >
                <X size={24} />
              </button>

              {/* Left Side - Media */}
              <div className="w-full md:w-2/3 bg-black/50 relative min-h-[300px] md:min-h-full flex items-center justify-center p-12">
                <selectedProject.icon 
                  strokeWidth={0.5}
                  className="w-48 h-48 md:w-64 md:h-64 text-white/10" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    Open Project <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col bg-[#111]">
                <div className="mb-auto">
                  <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    {selectedProject.category} — {selectedProject.role}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-black mb-2 leading-tight">
                    {selectedProject.title}
                  </h2>
                  <p className="text-white/40 font-mono text-sm mb-8">{selectedProject.year}</p>
                  
                  <p className="text-white/70 leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors group"
                >
                  Visit Website <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;
