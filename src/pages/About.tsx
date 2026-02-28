import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Globe, Layers, Cpu, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React (Learning)", "Tailwind CSS"], icon: Globe },
    { category: "AI Tools", items: ["ChatGPT", "Claude", "Gemini", "V0", "Bolt.new"], icon: Zap },
    { category: "Focus", items: ["Prompt Engineering", "AI-Assisted Dev", "Rapid Prototyping"], icon: Cpu },
    { category: "Design", items: ["UI/UX Basics", "Figma", "Canva"], icon: Layers },
  ];

  return (
    <div className="max-w-6xl mx-auto pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            DECODING <br/><span className="text-cyan-400">THE VIBE</span>
          </h1>
          <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
            <p>
              I am <strong className="text-white">Muhammad Karim Anggara</strong>, a beginner AI Vibe Coder.
              My journey is just beginning, but my vision is clear: to leverage the power of Artificial Intelligence to bring digital ideas to life.
            </p>
            <p>
              I may be new to the game, but I specialize in orchestrating AI tools to build functional, beautiful websites. 
              I believe that with the right prompts and a creative mindset, anyone can become a creator in this new digital era.
            </p>
            <p>
              I'm constantly learning, experimenting, and pushing the boundaries of what an "AI Vibe Coder" can achieve.
            </p>
          </div>

          <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl font-mono text-sm text-cyan-400/80">
            <div className="flex items-center gap-2 mb-4 text-white/40 uppercase tracking-widest text-xs">
              <Terminal size={14} /> Current Status
            </div>
            <p>{`> learning_mode: active`}</p>
            <p>{`> exploring_ai_capabilities...`}</p>
            <p>{`> status: building_the_future.`}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-400/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-lg text-cyan-400 group-hover:text-fuchsia-400 transition-colors">
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/60 border border-white/5 hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
