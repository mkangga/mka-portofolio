import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md bg-white dark:bg-[#151822] p-10 rounded-[30px] border border-black/[0.05] dark:border-white/[0.08] shadow-[0_0_0_5px_#f7f7f7] dark:shadow-[0_0_0_5px_#0b0d13] text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#007aff] dark:text-[#3892ff] mb-2 block">
          404 Error
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#000000] dark:text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-[#636363] dark:text-[#9ca3af] leading-relaxed mb-8">
          The page or portal you are looking for has been moved or does not exist.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#007aff] text-white text-xs font-semibold rounded-full hover:bg-[#0066d6] transition-colors shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Return to Homepage</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
