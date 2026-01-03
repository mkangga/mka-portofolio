/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Github, Twitter, Mail, Code, Cpu, Globe, Zap, X, Binary, Fingerprint, Activity } from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import ProjectCard from './components/ProjectCard';
import { Project, PageType } from './types';

const PROJECTS: Project[] = [
  { id: '1', title: 'Nebula Stream', category: 'AI Architecture', year: '2025', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop', description: 'A decentralized real-time data processing engine powered by generative AI. Processes over 1M events/sec.' },
  { id: '2', title: 'Void Interface', category: 'Creative Coding', year: '2024', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop', description: 'Experimental WebGL interface exploring fluid dynamics and user interaction.' },
  { id: '3', title: 'Synth Protocol', category: 'Web3 & AI', year: '2024', image: 'https://images.unsplash.com/photo-1639322537228-ad7117a7a640?q=80&w=1000&auto=format&fit=crop', description: 'Smart contract auditing tool leveraging LLMs to detect vulnerabilities.' },
  { id: '4', title: 'Chroma OS', category: 'System Design', year: '2023', image: 'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=1000&auto=format&fit=crop', description: 'A web-based operating system concept focusing on accessibility.' },
];

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="pt-32 pb-20"
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="relative min-h-screen text-white selection:bg-cyan-400 selection:text-black cursor-none overflow-x-hidden bg-[#0a0a0a]">
      <CustomCursor />
      <FluidBackground />
      {/* AIChat component removed */}

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-8 mix-blend-difference">
        <button onClick={() => setCurrentPage('home')} className="font-heading text-2xl font-bold tracking-tighter" data-hover="true">
          MKA<span className="text-cyan-400">.</span>DEV
        </button>

        <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.4em] uppercase">
          {(['work', 'about', 'contact'] as PageType[]).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`relative transition-all ${currentPage === page ? 'text-cyan-400' : 'text-white/40 hover:text-white'}`}
              data-hover="true"
            >
              {page}
              {currentPage === page && (
                <motion.div layoutId="navGlow" className="absolute -bottom-2 left-0 right-0 h-px bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              )}
            </button>
          ))}
        </div>

        <button onClick={() => setCurrentPage('contact')} className="px-6 py-2 border border-white/20 text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all hidden sm:block" data-hover="true">
          CONNECT
        </button>
      </nav>

      <main className="relative z-10 px-6 md:px-12">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <PageWrapper key="home">
              <section className="min-h-[70vh] flex flex-col justify-center items-center text-center">
                <GradientText text="KARIM" as="h1" className="text-[18vw] leading-none mb-4" />
                <h2 className="text-xl md:text-5xl font-heading font-light uppercase tracking-[0.3em] opacity-60">AI Vibe Coder</h2>
                <div className="mt-12 flex gap-8">
                   <button onClick={() => setCurrentPage('work')} className="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all" data-hover="true">View Work</button>
                </div>
              </section>
              
              <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <Cpu className="text-cyan-400 mb-4" />
                  <h3 className="font-bold mb-2">Neural Architect</h3>
                  <p className="text-xs text-white/40 leading-relaxed uppercase tracking-tighter">Designing systems that learn and adapt.</p>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <Binary className="text-fuchsia-400 mb-4" />
                  <h3 className="font-bold mb-2">Creative Dev</h3>
                  <p className="text-xs text-white/40 leading-relaxed uppercase tracking-tighter">Where logic meets aesthetics.</p>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <Fingerprint className="text-cyan-400 mb-4" />
                  <h3 className="font-bold mb-2">Digital Alchemist</h3>
                  <p className="text-xs text-white/40 leading-relaxed uppercase tracking-tighter">Transmuting code into gold experiences.</p>
                </div>
              </section>
            </PageWrapper>
          )}

          {currentPage === 'work' && (
            <PageWrapper key="work">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map(p => <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />)}
              </div>
            </PageWrapper>
          )}

          {currentPage === 'about' && (
            <PageWrapper key="about">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl font-black mb-12">DECODING <br/><span className="text-cyan-400">KARIM ANGGARA</span></h1>
                <p className="text-2xl text-white/60 leading-relaxed">
                  I specialize in building high-performance web applications that leverage the power of Generative AI. 
                  My focus is on creating immersive interfaces that feel alive.
                </p>
              </div>
            </PageWrapper>
          )}

          {currentPage === 'contact' && (
            <PageWrapper key="contact">
              <div className="text-center p-20 bg-white/5 border border-white/10 rounded-[3rem]">
                <h1 className="text-7xl font-black mb-8">GET IN TOUCH</h1>
                <p className="text-white/40 mb-12 uppercase tracking-widest">Protocol: Handshake_Request</p>
                <div className="flex justify-center gap-12">
                   <a href="#" className="text-cyan-400 hover:text-white transition-colors" data-hover="true">TWITTER</a>
                   <a href="#" className="text-cyan-400 hover:text-white transition-colors" data-hover="true">GITHUB</a>
                   <a href="#" className="text-cyan-400 hover:text-white transition-colors" data-hover="true">EMAIL</a>
                </div>
              </div>
            </PageWrapper>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6">
            <div className="bg-neutral-900 max-w-4xl w-full rounded-3xl overflow-hidden border border-white/10" onClick={e => e.stopPropagation()}>
               <img src={selectedProject.image} className="w-full h-64 object-cover" />
               <div className="p-12">
                  <h3 className="text-4xl font-black mb-4">{selectedProject.title}</h3>
                  <p className="text-white/50 mb-8">{selectedProject.description}</p>
                  <button onClick={() => setSelectedProject(null)} className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest">Close</button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;