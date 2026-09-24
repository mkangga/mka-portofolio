import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Fingerprint, MapPin, Sparkles } from 'lucide-react';
import GradientText from '../components/GlitchText';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="relative z-10 min-h-[80vh] flex flex-col justify-center items-center text-center">
      <SEO 
        title="Muhammad Karim Anggara | MKA.DEV – AI Vibe Coder & Full Stack Developer"
        description="Portfolio resmi Muhammad Karim Anggara (MKA.DEV) – AI Vibe Coder & Web Developer. Membangun aplikasi web modern berkinerja tinggi, sistem POS, e-commerce, dan antarmuka AI."
        keywords="Muhammad Karim Anggara, MKA.DEV, AI Vibe Coder, Web Developer Indonesia, Prompt Engineer, React, Full Stack Developer, MacroPOS, ILMORA LMS"
        canonicalPath="/"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6">
          <Sparkles size={12} /> Available for Web & AI Engineering
        </div>

        <h2 className="text-xl md:text-3xl font-heading font-light uppercase tracking-[0.3em] text-theme-text-muted mb-4">
          Muhammad Karim Anggara
        </h2>
        <GradientText text="AI VIBE CODER" as="h1" className="text-3xl sm:text-6xl md:text-[8vw] leading-none mb-8 font-heading" />
        
        <p className="max-w-2xl mx-auto text-theme-text-muted text-base md:text-xl leading-relaxed mb-12 font-light">
          Leveraging AI to build the web of tomorrow. Exploring the intersection of human creativity, modern full-stack architectures, and artificial intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/work" className="group relative px-8 py-4 bg-cyan-400 text-black font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-white shadow-[0_0_25px_rgba(34,211,238,0.4)] text-xs sm:text-sm rounded-full">
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link to="/services" className="px-8 py-4 border border-theme-border text-theme-text font-bold uppercase tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition-all text-xs sm:text-sm rounded-full">
            My Services
          </Link>
          <Link to="/contact" className="px-8 py-4 border border-theme-border text-theme-text-muted hover:text-white font-bold uppercase tracking-widest hover:border-white transition-all text-xs sm:text-sm rounded-full">
            Contact
          </Link>
        </div>
      </motion.div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {[
          { icon: Cpu, title: 'Prompt Engineer', desc: 'Crafting precise instructions and multi-agent context for optimal AI generation.' },
          { icon: Code, title: 'Web Developer', desc: 'Building scalable, high-performance responsive web applications.' },
          { icon: Fingerprint, title: 'UI/UX Designer', desc: 'Designing intuitive, engaging, and cyber-aesthetic digital experiences.' }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="p-8 bg-theme-text-dim/5 border border-theme-border rounded-2xl hover:border-cyan-400/40 hover:bg-theme-text-dim/10 transition-all group text-left"
          >
            <item.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:text-white group-hover:scale-110 transition-all" />
            <h3 className="font-bold mb-2 uppercase tracking-wider text-theme-text font-heading">{item.title}</h3>
            <p className="text-xs text-theme-text-muted leading-relaxed uppercase tracking-tight">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
