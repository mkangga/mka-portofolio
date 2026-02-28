/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  scramble?: boolean;
}

const chars = '!<>-_\\/[]{}—=+*^?#________';

const GradientText: React.FC<GradientTextProps> = ({ text, as: Component = 'span', className = '', scramble = true }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!scramble) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split("").map((letter, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, scramble]);

  return (
    <Component 
      className={`relative inline-block font-black tracking-tighter cursor-default ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className="block bg-gradient-to-r from-white via-cyan-400 to-fuchsia-500 bg-[length:200%_auto] bg-clip-text text-transparent"
        animate={{ 
          backgroundPosition: isHovered ? ['0% center', '200% center'] : '0% center',
          textShadow: isHovered ? [
            '0px 0px 0px rgba(255,255,255,0)',
            '0px 0px 20px rgba(34,211,238,0.5)',
            '0px 0px 0px rgba(255,255,255,0)'
          ] : '0px 0px 0px rgba(0,0,0,0)'
        }}
        transition={{ duration: 0.5, ease: "linear", repeat: isHovered ? Infinity : 0 }}
      >
        {displayText}
      </motion.span>
      
      {/* Glitch Overlay (only on hover) */}
      {isHovered && (
        <>
          <motion.span 
            className="absolute top-0 left-0 -z-10 text-cyan-500 opacity-70 mix-blend-screen select-none"
            animate={{ x: [-2, 2, -1, 0], y: [1, -1, 1, 0] }}
            transition={{ duration: 0.1, repeat: Infinity }}
          >
            {displayText}
          </motion.span>
          <motion.span 
            className="absolute top-0 left-0 -z-10 text-fuchsia-500 opacity-70 mix-blend-screen select-none"
            animate={{ x: [2, -2, 1, 0], y: [-1, 1, -1, 0] }}
            transition={{ duration: 0.1, repeat: Infinity }}
          >
            {displayText}
          </motion.span>
        </>
      )}
    </Component>
  );
};

export default GradientText;