import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-9xl font-black text-cyan-400 mb-4"
      >
        404
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl font-bold mb-8 text-white/80"
      >
        Oops! You seem lost in the digital void.
      </motion.p>
      <Link 
        to="/" 
        className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors rounded-full"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
