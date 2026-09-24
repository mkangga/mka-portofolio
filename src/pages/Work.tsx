import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, Project } from '../data/projects';
import SEO from '../components/SEO';

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const modal = (
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
            className="bg-bg-body border border-theme-border w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-bg-body/50 hover:bg-theme-text hover:text-black rounded-full transition-colors border border-theme-border"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Left Side - Media */}
            <div className="w-full md:w-2/3 bg-bg-main/50 relative min-h-[300px] md:min-h-full flex items-center justify-center p-12">
              <selectedProject.icon 
                strokeWidth={0.5}
                className="w-48 h-48 md:w-64 md:h-64 text-theme-text-dim/10" 
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <Link
                  to={`/work/${selectedProject.id}`}
                  onClick={() => setSelectedProject(null)}
                  className="px-8 py-3.5 bg-cyan-400 text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center gap-2 group text-xs sm:text-sm"
                >
                  Inspect Full Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-theme-text-dim/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest rounded-full transition-all text-xs flex items-center gap-2 border border-theme-border"
                >
                  Live Website <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col bg-bg-body">
              <div className="mb-auto">
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  {selectedProject.category} — {selectedProject.role}
                </p>
                <h2 className="text-3xl md:text-4xl font-black mb-2 leading-tight text-theme-text font-heading">
                  {selectedProject.title}
                </h2>
                <p className="text-theme-text-dim font-mono text-sm mb-8">{selectedProject.year}</p>
                
                <p className="text-theme-text-muted leading-relaxed mb-8 text-sm">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-theme-text-dim/5 border border-theme-border rounded-full text-xs text-theme-text-muted font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-theme-border/50">
                <Link
                  to={`/work/${selectedProject.id}`}
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-3 bg-cyan-400/10 hover:bg-cyan-400 text-cyan-300 hover:text-black font-bold uppercase tracking-widest text-xs rounded-xl border border-cyan-400/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Dedicated Project Page</span>
                  <ArrowRight size={14} />
                </Link>

                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-cyan-400 text-theme-text-muted transition-colors py-2"
                >
                  <span>Visit {selectedProject.title} Live</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="pt-8 pb-24 md:pb-12 max-w-7xl mx-auto px-4 md:px-6">
      <SEO 
        title="Selected Work & Web Applications Showcase"
        description="Jelajahi portofolio lengkap proyek web modern Muhammad Karim Anggara (MKA.DEV), mencakup MacroPOS, ILMORA LMS, SecondText, Nontara, e-commerce, dan simulasi 3D."
        keywords="proyek web developer, portofolio react, web application showcase, MacroPOS, ILMORA LMS, SecondText, muhammad karim anggara"
        canonicalPath="/work"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' }
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
              Portfolio Index ({PROJECTS.length} Works)
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter font-heading">
              Selected Work
            </h1>
          </div>
          <p className="text-theme-text-muted max-w-xl font-light text-sm md:text-base leading-relaxed">
            Eksplorasi karya digital mulai dari personal brand, web e-commerce, sistem kasir offline POS, LMS pendidikan, hingga platform chat real-time.
          </p>
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex overflow-x-auto pb-4 md:pb-0 gap-3 mb-12 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border whitespace-nowrap ${
              activeCategory === category
                ? 'bg-cyan-400 text-black border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                : 'border-theme-border text-theme-text-muted hover:border-cyan-400 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid with Crawlable Links */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group bg-theme-text-dim/5 border border-theme-border rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all flex flex-col justify-between"
            >
              {/* Image & Icon Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-bg-main/60 flex items-center justify-center">
                <project.icon 
                  strokeWidth={1}
                  className="w-32 h-32 text-theme-text-dim/20 group-hover:text-cyan-400/50 group-hover:scale-110 transition-all duration-500" 
                />
                
                {/* Hover Overlay with Action Buttons */}
                <div className="absolute inset-0 bg-bg-main/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                  <Link
                    to={`/work/${project.id}`}
                    className="px-6 py-2.5 bg-cyan-400 text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] flex items-center gap-1.5"
                  >
                    <span>View Project</span>
                    <ArrowRight size={14} />
                  </Link>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-5 py-2 bg-theme-text-dim/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-[10px] rounded-full transition-all border border-theme-border flex items-center gap-1.5"
                  >
                    <Eye size={12} />
                    <span>Quick Preview</span>
                  </button>
                </div>
              </div>
              
              {/* Project Card Text Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                    <span>{project.category}</span>
                    <span className="text-theme-text-dim">{project.year}</span>
                  </div>

                  <Link to={`/work/${project.id}`} className="block">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors text-theme-text font-heading">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-theme-text-muted line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-theme-border/40 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-theme-text-dim/5 rounded text-[10px] font-mono text-theme-text-dim">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] font-mono text-theme-text-dim self-center">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <Link 
                    to={`/work/${project.id}`} 
                    className="text-cyan-400 hover:text-white text-xs font-mono font-bold flex items-center gap-1"
                    title="Open Project Details"
                  >
                    Details <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Collaboration Call to Action */}
      <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/30 via-theme-text-dim/5 to-transparent border border-theme-border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold uppercase font-heading text-white mb-2">
            Have an ambitious project in mind?
          </h3>
          <p className="text-sm text-theme-text-muted max-w-xl font-light leading-relaxed">
            From modern responsive web applications to AI-assisted platforms and specialized workflows, let's turn your vision into production reality.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-8 py-4 bg-cyan-400 text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all shrink-0 shadow-[0_0_25px_rgba(34,211,238,0.4)]"
        >
          Start a Conversation
        </Link>
      </div>

      {createPortal(modal, document.body)}
    </div>
  );
};

export default Work;
