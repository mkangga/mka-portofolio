/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight, Cpu, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      className="group relative h-[450px] md:h-[600px] w-full overflow-hidden border border-white/5 bg-neutral-950 cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={onClick}
      data-hover="true"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover filter brightness-[0.4] grayscale group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700 ease-out"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.1 }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Decorative Scanline */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <motion.div 
            variants={{ rest: { opacity: 0.5 }, hover: { opacity: 1 } }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md bg-white/5 text-[10px] font-mono tracking-widest uppercase text-cyan-400"
          >
            <Cpu className="w-3 h-3" /> {project.year}
          </motion.div>
          <motion.div
            variants={{
              rest: { x: 20, y: -20, opacity: 0 },
              hover: { x: 0, y: 0, opacity: 1 }
            }}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black"
          >
            <ArrowUpRight className="w-6 h-6" />
          </motion.div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
             <Layers className="w-4 h-4 text-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
             <span className="text-xs font-mono text-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
               SYSTEM://{project.category.replace(' ', '_').toUpperCase()}
             </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-heading font-black text-white leading-tight uppercase group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <motion.p 
            variants={{
              rest: { y: 20, opacity: 0 },
              hover: { y: 0, opacity: 1 }
            }}
            className="mt-4 text-sm text-gray-400 font-light max-w-xs leading-relaxed"
          >
            {project.description.substring(0, 100)}...
          </motion.p>
        </div>
      </div>

      {/* Hover Border Glow */}
      <motion.div 
        className="absolute inset-0 border-2 border-cyan-500/0 z-20 pointer-events-none"
        variants={{
          rest: { borderColor: 'rgba(34,211,238,0)' },
          hover: { borderColor: 'rgba(34,211,238,0.5)', boxShadow: 'inset 0 0 20px rgba(34,211,238,0.2)' }
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;