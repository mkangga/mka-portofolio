import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { name, email, message } = formState;
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/62895349021354?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto pt-12 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-8xl font-black mb-4 text-theme-text">CONTACT</h1>
        <p className="text-theme-text-dim uppercase tracking-widest">Let's build something together</p>
        <p className="mt-4 text-theme-text-muted max-w-xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="p-8 bg-theme-text-dim/5 border border-theme-border rounded-2xl hover:border-cyan-400/50 transition-colors group">
            <Mail className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-theme-text">Email</h3>
            <a href="mailto:me@mka.my.id" className="text-theme-text-muted hover:text-theme-text transition-colors">me@mka.my.id</a>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <a href="https://github.com/mkangga" target="_blank" rel="noopener noreferrer" className="p-8 bg-theme-text-dim/5 border border-theme-border rounded-2xl hover:border-cyan-400/50 transition-colors group flex flex-col items-center justify-center text-center">
              <Github className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-wider text-theme-text">GitHub</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest mb-2 text-theme-text-dim">Name</label>
            <input
              type="text"
              id="name"
              required
              value={formState.name}
              onChange={e => setFormState({ ...formState, name: e.target.value })}
              className="w-full bg-theme-text-dim/5 border border-theme-border rounded-lg p-4 text-theme-text focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest mb-2 text-theme-text-dim">Email</label>
            <input
              type="email"
              id="email"
              required
              value={formState.email}
              onChange={e => setFormState({ ...formState, email: e.target.value })}
              className="w-full bg-theme-text-dim/5 border border-theme-border rounded-lg p-4 text-theme-text focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest mb-2 text-theme-text-dim">Message</label>
            <textarea
              id="message"
              required
              rows={4}
              value={formState.message}
              onChange={e => setFormState({ ...formState, message: e.target.value })}
              className="w-full bg-theme-text-dim/5 border border-theme-border rounded-lg p-4 text-theme-text focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all bg-white text-black hover:bg-cyan-400 z-20"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
