import React from 'react';
import { Code, Database, Layout as LayoutIcon, Server, Globe, Terminal, Cpu, Zap } from 'lucide-react';

const TechStack: React.FC = () => {
  const techs = [
    { name: 'React 19', icon: Code },
    { name: 'TypeScript', icon: Terminal },
    { name: 'Tailwind CSS', icon: LayoutIcon },
    { name: 'Next.js', icon: Globe },
    { name: 'Node.js', icon: Server },
    { name: 'PostgreSQL', icon: Database },
    { name: 'AI Models & LLMs', icon: Cpu },
    { name: 'Prompt Engineering', icon: Zap },
  ];

  return (
    <div className="pt-12 pb-6 border-t border-black/[0.05] dark:border-white/[0.08] transition-colors duration-300">
      <div className="text-center mb-6">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#636363] dark:text-[#9ca3af]">
          Tools & Framework Ecosystem
        </span>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
        {techs.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#151822] rounded-full border border-black/[0.05] dark:border-white/[0.08] shadow-[0_0_0_3px_#f7f7f7] dark:shadow-[0_0_0_3px_#0b0d13] hover:shadow-[0_0_0_3px_#ebebeb] dark:hover:shadow-[0_0_0_3px_#11141d] text-[#3e3e3e] dark:text-[#d1d5db] hover:text-[#007aff] dark:hover:text-[#3892ff] transition-all duration-200"
          >
            <tech.icon size={16} className="text-[#007aff] dark:text-[#3892ff]" />
            <span className="text-xs font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
