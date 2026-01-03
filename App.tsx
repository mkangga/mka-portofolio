/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Github, Twitter, Mail, Code, Cpu, Globe, Zap, Calendar, X, ChevronLeft, ChevronRight, Binary, Fingerprint, Activity } from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import ProjectCard from './components/ProjectCard';
import AIChat from './components/AIChat';
import { Project, PageType } from './types';

const PROJECTS: Project[] = [
  { id: '1', title: 'Nebula Stream', category: 'AI Architecture', year: '2025', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop', description: 'A decentralized real-time data processing engine powered by generative AI. Processes over 1M events/sec with adaptive scaling.' },
  { id: '2', title: 'Void Interface', category: 'Creative Coding', year: '2024', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop', description: 'Experimental WebGL interface exploring fluid dynamics and user interaction. Won Site of the Day at Awwwards.' },
  { id: '3', title: 'Synth Protocol', category: 'Web3 & AI', year: '2024', image: 'https://images.unsplash.com/photo-1639322537228-ad7117a7a640?q=80&w=1000&auto=format&fit=crop', description: 'Smart contract auditing tool leveraging LLMs to detect vulnerabilities in Solidity codebases.' },
  { id: '4', title: 'Chroma OS', category: 'System Design', year: '2023', image: 'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=1000&auto=format&fit=crop', description: 'A web-based operating system concept focusing on accessibility and AI-first workflows.' },
  { id: '5', title: 'Echo Gardens', category: 'Generative Art', year: '2023', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop', description: 'Algorithmic plant growth simulation using L-systems and Three.js.' },
  { id: '6', title: 'Neural Beat', category: 'Audio Engineering', year: '2022', image: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=1000&auto=format&fit=crop', description: 'Real-time audio visualization tool using TensorFlow.js.' },
];

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, filter: 'blur(10px)' }}
    animate={{ opacity: 1, filter: 'blur(0px)' }}
    exit={{ opacity: 0, filter: 'blur(10px)' }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="pt-24 md:pt-32 pb-20"
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
    <div className="relative min-h-screen text-white selection:bg-cyan-400 selection:text-black cursor-none overflow-x-hidden">
      <CustomCursor />
      <FluidBackground />
      <AIChat />

      {/* NAV BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 mix-blend-difference">
        <button 
          onClick={() => setCurrentPage('home')}
          className="font-heading text-xl md:text-2xl font-bold tracking-tighter text-white group"
          data-hover="true"
        >
          MKA<span className="text-cyan-400 group-hover:text-fuchsia-500 transition-colors">.</span>DEV
        </button>

        <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.4em] uppercase">
          {(['work', 'about', 'contact'] as PageType[]).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`relative transition-all duration-300 ${
                currentPage === page ? 'text-cyan-400' : 'text-white/40 hover:text-white'
              }`}
              data-hover="true"
            >
              {page}
              {currentPage === page && (
                <motion.div layoutId="navGlow" className="absolute -bottom-2 left-0 right-0 h-px bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setCurrentPage('contact')}
            className="px-6 py-2 border border-white/20 text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all backdrop-blur-md hidden sm:block"
            data-hover="true"
          >
            Connect_Protocol
          </button>
          <button className="md:hidden"><Activity className="w-6 h-6 text-cyan-400" /></button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="relative z-10 px-6 md:px-12">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <PageWrapper key="home">
              <section className="min-h-[75vh] flex flex-col justify-center items-center text-center">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-cyan-400/50" />
                  <span className="font-mono text-[10px] text-cyan-400 tracking-[0.5em] uppercase">Status: Online</span>
                  <span className="h-px w-12 bg-cyan-400/50" />
                </motion.div>
                
                <GradientText 
                  text="KARIM" 
                  as="h1" 
                  className="text-[20vw] md:text-[18vw] leading-[0.8] mb-4" 
                />
                
                <div className="overflow-hidden mb-12">
                  <motion.h2 
                    initial={{ y: 50 }} animate={{ y: 0 }}
                    className="text-xl md:text-5xl font-heading font-light uppercase tracking-[0.3em] opacity-80"
                  >
                    AI Vibe Coder
                  </motion.h2>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <button onClick={() => setCurrentPage('work')} className="group relative px-12 py-5 bg-white text-black font-bold uppercase tracking-widest overflow-hidden transition-transform hover:scale-105" data-hover="true">
                    <span className="relative z-10">Access Projects</span>
                    <motion.div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                  <button onClick={() => setCurrentPage('about')} className="text-xs font-mono tracking-widest uppercase text-white/40 hover:text-white transition-colors" data-hover="true">
                    // view_manifesto.exe
                  </button>
                </motion.div>
              </section>

              {/* Bento Intro */}
              <section className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-2 p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl flex flex-col justify-between">
                   <Binary className="w-10 h-10 text-cyan-400 mb-6" />
                   <p className="text-xl font-light text-gray-300 leading-relaxed">
                     Synthesizing modern AI capabilities with raw creative expression to build the next generation of web interfaces.
                   </p>
                </div>
                <div className="p-8 bg-fuchsia-500/10 border border-fuchsia-500/20 backdrop-blur-xl rounded-2xl">
                   <div className="text-5xl font-black mb-2">5+</div>
                   <div className="text-xs font-mono text-fuchsia-400 uppercase tracking-widest">Years of Code</div>
                </div>
                <div className="p-8 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-xl rounded-2xl">
                   <div className="text-5xl font-black mb-2">30+</div>
                   <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">AI Deployments</div>
                </div>
              </section>
            </PageWrapper>
          )}

          {currentPage === 'work' && (
            <PageWrapper key="work">
              <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                  <h1 className="text-7xl md:text-9xl font-heading font-black uppercase leading-none">
                    Project<br/><span className="text-cyan-400">Archives</span>
                  </h1>
                  <p className="max-w-xs text-sm text-white/40 font-mono text-right uppercase tracking-widest">
                    [ Filter: All_Entries ]<br/>
                    [ Mode: Immersive ]
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
                  {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
                  ))}
                </div>
              </div>
            </PageWrapper>
          )}

          {currentPage === 'about' && (
            <PageWrapper key="about">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                  <div className="lg:col-span-7">
                    <motion.div initial={{ x: -50 }} animate={{ x: 0 }} className="mb-12">
                      <h1 className="text-6xl md:text-8xl font-heading font-black uppercase leading-none mb-6">
                        The <br/> <GradientText text="ALCHEMIST" scramble={true} />
                      </h1>
                      <span className="text-xs font-mono text-cyan-400 tracking-[0.4em] uppercase">// Muhammad Karim Anggara</span>
                    </motion.div>
                    
                    <div className="space-y-8 text-xl text-gray-400 font-light leading-relaxed">
                      <p>
                        I transform logic into emotion. My workflow sits at the boundary where high-performance engineering meets generative serendipity.
                      </p>
                      <p>
                        As an <span className="text-white font-bold">AI Vibe Coder</span>, I specialize in architecting systems that don't just solve problems, but create atmospheres. Using Gemini 3 and 2.5 series, I build reactive, intelligent interfaces.
                      </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
                      {[
                        { label: 'Frontend', value: 'React / Next' },
                        { label: 'AI Core', value: 'Gemini / LLMs' },
                        { label: 'Creative', value: 'WebGL / Three' },
                      ].map((item, idx) => (
                        <div key={idx} className="p-6 bg-white/5 border-l-2 border-cyan-400">
                          <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-2">{item.label}</div>
                          <div className="text-sm font-bold text-white uppercase">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative group">
                    <motion.div 
                      className="absolute -inset-4 bg-cyan-400 opacity-20 blur-3xl rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                       <img 
                        src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&w=1000" 
                        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                        alt="Profile"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                      <div className="absolute bottom-8 left-8">
                         <Fingerprint className="w-12 h-12 text-cyan-400 mb-2" />
                         <div className="text-xs font-mono uppercase tracking-widest text-white/60">ID://MKA_001</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PageWrapper>
          )}

          {currentPage === 'contact' && (
            <PageWrapper key="contact">
              <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-8xl md:text-[15vw] font-heading font-black uppercase opacity-10 mb-[-5vw] select-none">CONNECT</h1>
                
                <div className="relative z-10 p-12 md:p-20 bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]" />
                  
                  <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Initiate_Handshake</h2>
                  <p className="text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed">
                    System ready for collaboration protocols. Select your mission objective below.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {[
                      { icon: Code, title: 'Development', desc: 'Custom high-end web applications.' },
                      { icon: Cpu, title: 'AI Solutions', desc: 'LLM integration and agent architecture.' },
                      { icon: Zap, title: 'Creative', desc: 'Interactive visual experiences.' },
                      { icon: Terminal, title: 'Consulting', desc: 'Technical leadership and strategy.' },
                    ].map((item, idx) => (
                      <button 
                        key={idx}
                        className="p-6 bg-white/5 border border-white/5 hover:border-cyan-400 transition-all flex items-center gap-6 group"
                        data-hover="true"
                      >
                        <item.icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="font-bold text-sm uppercase">{item.title}</div>
                          <div className="text-[10px] text-white/40 uppercase tracking-widest">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16">
                    <a href="#" className="flex items-center gap-3 text-sm font-mono text-white/50 hover:text-white transition-colors" data-hover="true"><Mail className="w-4 h-4 text-cyan-400" /> hi@karim.dev</a>
                    <a href="#" className="flex items-center gap-3 text-sm font-mono text-white/50 hover:text-white transition-colors" data-hover="true"><Twitter className="w-4 h-4 text-cyan-400" /> @mka_dev</a>
                    <a href="#" className="flex items-center gap-3 text-sm font-mono text-white/50 hover:text-white transition-colors" data-hover="true"><Github className="w-4 h-4 text-cyan-400" /> mkarim</a>
                  </div>
                </div>
              </div>
            </PageWrapper>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 py-12 px-6 md:px-12 bg-black/80 backdrop-blur-md border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase">MKA PORTFOLIO v2.5.0 // © 2025</span>
           </div>
           
           <div className="flex gap-10">
              {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="text-[10px] font-bold tracking-widest uppercase text-white/30 hover:text-cyan-400 transition-colors" data-hover="true">{social}</a>
              ))}
           </div>
        </div>
      </footer>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl cursor-default"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, rotateX: 20 }} animate={{ scale: 1, y: 0, rotateX: 0 }} exit={{ scale: 0.9, y: 50, rotateX: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl bg-neutral-900 border border-white/10 flex flex-col md:flex-row overflow-hidden shadow-[0_0_100px_rgba(34,211,238,0.15)]"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 z-20 p-2 bg-black/50 rounded-full hover:bg-white hover:text-black transition-all" data-hover="true">
                <X className="w-8 h-8" />
              </button>

              <div className="w-full md:w-3/5 relative bg-black h-80 md:h-auto">
                 <img src={selectedProject.image} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-transparent hidden md:block" />
              </div>

              <div className="w-full md:w-2/5 p-12 md:p-16 flex flex-col justify-center">
                <div className="text-cyan-400 font-mono text-sm tracking-widest mb-4 uppercase">{selectedProject.year} // SYSTEM_ENTRY</div>
                <h3 className="text-5xl font-heading font-black mb-6 uppercase text-white">{selectedProject.title}</h3>
                <div className="h-px w-20 bg-cyan-400/50 mb-8" />
                <p className="text-gray-400 leading-relaxed text-lg font-light mb-12">
                  {selectedProject.description}
                </p>
                <div className="flex gap-6">
                  <button className="flex-1 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors" data-hover="true">Open Link</button>
                  <button className="px-10 py-4 border border-white/20 font-bold uppercase tracking-widest hover:bg-white/10 transition-colors" data-hover="true">GitHub</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;