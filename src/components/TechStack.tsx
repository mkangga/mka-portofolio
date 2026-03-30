import React from 'react';
import { motion } from 'motion/react';
import { Code, Database, Layout, Server, Globe, Terminal } from 'lucide-react';

const TechStack: React.FC = () => {
  const techs = [
    { name: 'React', icon: Code },
    { name: 'Tailwind CSS', icon: Layout },
    { name: 'Node.js', icon: Server },
    { name: 'TypeScript', icon: Terminal },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Next.js', icon: Globe },
  ];

  return (
    <div className="py-12 overflow-hidden">
      <h3 className="text-center text-xl font-bold mb-8 uppercase tracking-widest text-theme-text-dim">Tech Stack</h3>
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {[...techs, ...techs].map((tech, index) => (
          <div key={index} className="flex items-center gap-2 text-theme-text-muted hover:text-cyan-400 transition-colors">
            <tech.icon size={24} />
            <span className="text-lg font-mono font-bold">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
