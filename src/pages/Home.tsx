import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Fingerprint } from 'lucide-react';
import GradientText from '../components/GlitchText';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative z-10 min-h-[80vh] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-xl md:text-3xl font-heading font-light uppercase tracking-[0.3em] opacity-60 mb-4">
          Muhammad Karim Anggara
        </h2>
        <GradientText text="AI VIBE CODER" as="h1" className="text-[12vw] md:text-[8vw] leading-none mb-8" />
        
        <p className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl leading-relaxed mb-12">
          Leveraging AI to build the web of tomorrow. Exploring the intersection of human creativity and artificial intelligence.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link to="/work" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-cyan-400">
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link to="/about" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
            About Me
          </Link>
        </div>
      </motion.div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {[
          { icon: Cpu, title: "Prompt Engineer", desc: "Crafting precise instructions for optimal AI generation." },
          { icon: Code, title: "Rapid Prototyper", desc: "Turning ideas into reality at the speed of thought." },
          { icon: Fingerprint, title: "AI Explorer", desc: "Constantly learning and adapting to new AI tools." }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
          >
            <item.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:text-fuchsia-400 transition-colors" />
            <h3 className="font-bold mb-2 uppercase tracking-wider">{item.title}</h3>
            <p className="text-xs text-white/40 leading-relaxed uppercase tracking-tighter">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
