import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import FluidBackground from './FluidBackground';
import CustomCursor from './CustomCursor';
import { motion, AnimatePresence } from 'motion/react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { t } = useThemeLanguage();

  return (
    <div className="relative min-h-screen text-theme-text selection:bg-cyan-400 selection:text-black cursor-none overflow-x-hidden bg-bg-main">
      <CustomCursor />
      <FluidBackground />
      <Navbar />
      
      <main className="relative z-10 px-6 md:px-12 pt-32 pb-20 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-grow"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="relative z-10 py-8 text-center text-theme-text-dim text-xs uppercase tracking-widest">
        <p>{t('footer.copy', { year: new Date().getFullYear().toString() })}</p>
      </footer>
    </div>
  );
};

export default Layout;
