import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

const Work: React.FC = () => {
  return (
    <div className="pt-12 pb-24 md:pb-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-9xl font-black mb-16 text-center md:text-left opacity-10"
      >
        WORK
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 md:px-0">
        {PROJECTS.map((project, index) => (
          <Link to={`/work/${project.id}`} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
              
              {/* Icon Display */}
              <project.icon 
                strokeWidth={1}
                className="w-32 h-32 text-white/20 group-hover:text-cyan-400/50 group-hover:scale-110 transition-all duration-500" 
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
