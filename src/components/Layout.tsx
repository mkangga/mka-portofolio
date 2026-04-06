import React from 'react';
import Navbar from './Navbar';
import FluidBackground from './FluidBackground';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="relative min-h-screen text-theme-text selection:bg-cyan-400 selection:text-black overflow-x-hidden bg-bg-main">
      <FluidBackground />
      <Navbar />
      
      <main className="relative z-10 px-6 md:px-12 pt-32 pb-20 min-h-screen flex flex-col">
        {children}
      </main>

      <footer className="relative z-10 py-8 pb-32 md:pb-8 text-center text-theme-text-dim text-xs uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Muhammad Karim Anggara. All Systems Operational.</p>
      </footer>
    </div>
  );
};

export default Layout;
