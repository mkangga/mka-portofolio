import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-8 mix-blend-difference">
        <NavLink to="/" className="font-heading text-2xl font-bold tracking-tighter group z-50 relative">
          MKA<span className="text-cyan-400 group-hover:animate-pulse">.</span>DEV
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.4em] uppercase">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative transition-all duration-300 hover:text-cyan-400 ${
                  isActive ? 'text-cyan-400' : 'text-white/60'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navGlow"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="px-6 py-2 border border-white/20 text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all hidden md:block relative overflow-hidden group"
        >
          <span className="relative z-10">Connect</span>
          <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0 mix-blend-difference"></div>
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {links.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-2xl font-bold uppercase tracking-widest transition-colors ${
                        isActive ? 'text-cyan-400' : 'text-white/60 hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
