import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import FluidBackground from './FluidBackground';
import { Globe, FileCode, Shield, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/projects';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen text-theme-text selection:bg-cyan-400 selection:text-black overflow-x-hidden bg-bg-main">
      <FluidBackground />
      <Navbar />
      
      <main className="relative z-10 px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 pb-20 min-h-screen flex flex-col">
        {children}
      </main>

      {/* Production Footer */}
      <footer className="relative z-10 border-t border-theme-border/50 bg-black/60 backdrop-blur-md pt-12 pb-24 md:pb-12 text-theme-text-dim text-xs">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-left">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-3">
            <Link to="/" className="font-heading text-xl font-bold text-white tracking-tighter inline-block">
              MKA<span className="text-cyan-400">.</span>DEV
            </Link>
            <p className="text-theme-text-muted text-xs leading-relaxed max-w-sm font-light">
              Muhammad Karim Anggara — AI Vibe Coder & Full Stack Web Developer. Crafting fast, modern digital experiences and AI-powered interfaces.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-[10px] font-mono border border-cyan-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Available for New Projects
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-3">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/work" className="hover:text-cyan-400 transition-colors">Selected Work</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link to="/connect" className="hover:text-cyan-400 transition-colors">Connect</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Resources & Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-3">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">
                  Site Directory
                </Link>
              </li>
              <li>
                <a href="https://github.com/mkangga" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-mono text-[11px]">
                  sitemap.xml
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-theme-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <p>© {new Date().getFullYear()} Muhammad Karim Anggara (MKA.DEV). All rights reserved.</p>
          <p className="font-mono text-theme-text-dim">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
