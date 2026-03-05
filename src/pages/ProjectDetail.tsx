import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/work" className="text-cyan-400 hover:underline">Back to Work</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] text-white pt-20 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/work" className="inline-flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-widest text-sm font-bold">Back to Work</span>
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
        >
          {/* Header / Hero Section */}
          <div className="h-[40vh] md:h-[50vh] relative bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
            <project.icon 
              strokeWidth={0.5}
              className="w-64 h-64 md:w-96 md:h-96 text-white/5 absolute transform rotate-12" 
            />
            <project.icon 
              strokeWidth={1}
              className="w-32 h-32 md:w-48 md:h-48 text-cyan-400 relative z-10 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20">
              <h1 className="text-4xl md:text-7xl font-black mb-2 leading-tight">{project.title}</h1>
              <p className="text-cyan-400 text-lg md:text-xl uppercase tracking-widest font-bold">{project.category}</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            <div className="md:col-span-2">
              <h3 className="text-sm md:text-base font-bold mb-6 uppercase tracking-wider text-white/40 border-b border-white/10 pb-2">Overview</h3>
              <p className="text-lg md:text-2xl leading-relaxed text-white/90 mb-12 font-light">
                {project.description}
              </p>
              
              <h3 className="text-sm md:text-base font-bold mb-6 uppercase tracking-wider text-white/40 border-b border-white/10 pb-2">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-cyan-400 hover:bg-cyan-400/10 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
                <div>
                  <h3 className="text-xs md:text-sm font-bold mb-2 uppercase tracking-wider text-white/40">Year</h3>
                  <p className="text-2xl md:text-3xl font-mono">{project.year}</p>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-bold mb-2 uppercase tracking-wider text-white/40">Role</h3>
                  <p className="text-xl md:text-2xl">Lead Developer</p>
                </div>
              </div>
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-cyan-400 transition-colors block text-center rounded-xl relative overflow-hidden group"
              >
                <span className="relative z-10">View Live Project</span>
                <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out -z-0" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
