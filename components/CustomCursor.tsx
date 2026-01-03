/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 }; 
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const clickable = target.closest('button') || 
                        target.closest('a') || 
                        target.closest('[data-hover="true"]');
      setIsHovering(!!clickable);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:flex items-center justify-center"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      {/* External Ring */}
      <motion.div
        className="absolute w-12 h-12 rounded-full border border-white/50"
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 1 : 0.5,
          borderColor: isHovering ? 'rgba(34,211,238,1)' : 'rgba(255,255,255,0.5)',
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Internal Dot */}
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-cyan-400"
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
      />

      {/* "View" Text */}
      <motion.span 
        className="absolute text-[8px] font-mono text-white font-black uppercase tracking-[0.2em] pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.5,
        }}
      >
        ACCESS
      </motion.span>
    </motion.div>
  );
};

export default CustomCursor;