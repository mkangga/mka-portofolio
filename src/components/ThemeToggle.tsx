import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', size = 'md' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const iconSize = size === 'sm' ? 14 : 16;
  const buttonPadding = size === 'sm' ? 'p-1.5' : 'p-2';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isDark ? 'Ganti ke Mode Terang (Light Mode)' : 'Ganti ke Mode Gelap (Dark Mode)'}
      title={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
      className={`relative inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer ${buttonPadding} bg-[#f0f0f0] dark:bg-[#1f2330] text-[#3e3e3e] dark:text-[#d1d5db] hover:text-[#007aff] dark:hover:text-[#3892ff] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] border border-black/[0.08] dark:border-white/[0.1] shadow-xs active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex items-center justify-center pointer-events-none"
      >
        {isDark ? (
          <Sun size={iconSize} className="text-amber-400 stroke-[2.2]" />
        ) : (
          <Moon size={iconSize} className="text-[#007aff] stroke-[2.2]" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
