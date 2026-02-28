import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

const PROJECTS: Project[] = [
  { 
    id: '1', 
    title: 'Self Portfolio', 
    category: 'Personal Identity', 
    year: '2025', 
    image: 'https://picsum.photos/seed/portfolio/1000/800', 
    description: 'A personal showcase of my journey as an AI Vibe Coder. Built with modern web technologies to reflect my digital identity and creative vision.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    link: 'https://www.mka.my.id/'
  },
  { 
    id: '2', 
    title: 'MKA Store', 
    category: 'E-Commerce', 
    year: '2024', 
    image: 'https://picsum.photos/seed/store/1000/800', 
    description: 'A streamlined e-commerce platform designed for digital goods. Focusing on speed, simplicity, and user experience.',
    tags: ['Web App', 'Payment Gateway', 'UI/UX', 'React'],
    link: 'https://www.mkastore.my.id/'
  },
  { 
    id: '3', 
    title: 'Solar System', 
    category: 'Simulation', 
    year: '2024', 
    image: 'https://picsum.photos/seed/space/1000/800', 
    description: 'An interactive 3D simulation of our solar system. A journey through the cosmos powered by web technologies.',
    tags: ['3D', 'Simulation', 'Educational', 'Interactive'],
    link: 'https://tatasurya.mka.my.id/'
  }
];

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="pt-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-9xl font-black mb-16 text-center md:text-left opacity-10"
      >
        WORK
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-cyan-400 text-black text-xs font-bold uppercase tracking-widest rounded-full">
                  {project.year}
                </span>
                <div className="p-2 bg-white text-black rounded-full transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm uppercase tracking-widest">{project.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setSelectedProject(null)} 
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#111] max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 relative" 
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
              >
                <X size={24} />
              </button>

              <div className="h-[40vh] md:h-[50vh] relative">
                <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                <div className="absolute bottom-8 left-8 md:left-12">
                  <h2 className="text-5xl md:text-7xl font-black mb-2">{selectedProject.title}</h2>
                  <p className="text-cyan-400 text-lg uppercase tracking-widest font-bold">{selectedProject.category}</p>
                </div>
              </div>

              <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-white/40">Overview</h3>
                  <p className="text-xl leading-relaxed text-white/80 mb-8">
                    {selectedProject.description}
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-white/40">Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-cyan-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-bold mb-2 uppercase tracking-wider text-white/40">Year</h3>
                    <p className="text-2xl font-mono">{selectedProject.year}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-2 uppercase tracking-wider text-white/40">Role</h3>
                    <p className="text-xl">Lead Developer</p>
                  </div>
                  <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors block text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;
