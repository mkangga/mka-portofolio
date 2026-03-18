import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, MessageCircle, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Connect: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/mkangga',
      username: '@mkangga',
      color: 'hover:text-white',
      bgColor: 'bg-white/5'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/62895349021354',
      username: '+62 895-3490-21354',
      color: 'hover:text-green-400',
      bgColor: 'bg-green-400/5'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:me@mka.my.id',
      username: 'me@mka.my.id',
      color: 'hover:text-cyan-400',
      bgColor: 'bg-cyan-400/5'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/muhammadkarimanggara/',
      username: 'Karim Anggara',
      color: 'hover:text-blue-400',
      bgColor: 'bg-blue-400/5'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      username: '@mka.dev',
      color: 'text-white/20',
      bgColor: 'bg-white/5',
      disabled: true
    },
    {
      name: 'Twitter / X',
      icon: Twitter,
      url: 'https://x.com/mka_dev',
      username: '@mka_dev',
      color: 'hover:text-sky-400',
      bgColor: 'bg-sky-400/5'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto pt-12 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-xl sm:text-6xl md:text-8xl font-black mb-4 uppercase tracking-tighter">
          CONNECT<span className="text-cyan-400">_</span>HUB
        </h1>
        <p className="text-white/40 uppercase tracking-[0.3em] text-sm">
          Protocol: Social_Sync // Network_Access
        </p>
        <p className="mt-6 text-white/60 max-w-xl mx-auto leading-relaxed">
          Access my digital nodes across the network. Feel free to reach out for collaborations, 
          project inquiries, or just to say hello.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialLinks.map((link, index) => {
          const CardWrapper = link.disabled ? motion.div : motion.a;
          
          return (
            <CardWrapper
              key={link.name}
              {...(!link.disabled ? {
                href: link.url,
                target: "_blank",
                rel: "noopener noreferrer"
              } : {})}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 ${link.bgColor} border border-white/10 rounded-2xl overflow-hidden transition-all ${
                link.disabled 
                  ? 'opacity-50 grayscale cursor-not-allowed' 
                  : 'hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]'
              }`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className={`p-4 rounded-xl bg-black/40 border border-white/5 ${link.color} transition-colors`}>
                    <link.icon size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold mb-1">{link.name}</h3>
                      {link.disabled && (
                        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/40 uppercase tracking-tighter">
                          Offline
                        </span>
                      )}
                    </div>
                    <p className="text-white/40 font-mono text-sm uppercase tracking-wider">{link.username}</p>
                  </div>
                </div>
                {!link.disabled && (
                  <ExternalLink size={20} className="text-white/20 group-hover:text-cyan-400 transition-colors" />
                )}
              </div>
              
              {/* Animated background element */}
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                <link.icon size={160} />
              </div>
            </CardWrapper>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 p-12 bg-cyan-400/5 border border-cyan-400/20 rounded-[2.5rem] text-center relative overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight">Need a more formal handshake?</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            For detailed project proposals or business inquiries, please use the official contact form.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all rounded-full"
          >
            Go to Contact Page
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-400/10 blur-[80px] rounded-full" />
      </motion.div>
    </div>
  );
};

export default Connect;
