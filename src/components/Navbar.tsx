import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, Briefcase, User, Mail, Layers, Share2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const links = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/work', label: 'Work', icon: Briefcase },
    { path: '/services', label: 'Services', icon: Layers },
    { path: '/about', label: 'About', icon: User },
    { path: '/connect', label: 'Connect', icon: Share2 },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-8 mix-blend-difference">
        <NavLink to="/" className="font-heading text-2xl font-bold tracking-tighter group z-50 relative">
          MKA<span className="text-cyan-400 group-hover:animate-pulse">.</span>DEV
        </NavLink>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-4 text-[10px] font-bold tracking-[0.4em] uppercase">
          {links.filter(link => link.path !== '/connect').map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 transition-all duration-300 hover:text-cyan-400 ${
                  isActive ? 'text-cyan-400' : 'text-theme-text-muted'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navGlow"
                      className="absolute bottom-0 left-4 right-4 h-px bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/connect"
          className="px-6 py-2 border border-theme-border text-[10px] font-bold tracking-widest uppercase hover:bg-theme-text hover:text-black transition-all hidden md:block relative overflow-hidden group"
        >
          <span className="relative z-10">Connect</span>
          <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0 mix-blend-difference"></div>
        </NavLink>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-bg-body/80 backdrop-blur-xl border-t border-theme-border md:hidden pb-safe">
        <div className="flex justify-around items-center h-16">
          {links.filter(link => link.path !== '/contact').map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full transition-colors ${
                  isActive ? 'text-cyan-400' : 'text-theme-text-dim hover:text-theme-text-muted'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="relative p-1">
                    <link.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                    {isActive && (
                      <motion.div
                        layoutId="mobileNavGlow"
                        className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider mt-1">{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
