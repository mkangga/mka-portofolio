import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Database, Globe, Layers, Cpu, Zap } from 'lucide-react';
import TechStack from '../components/TechStack';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const skills = [

    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React (Learning)", "Tailwind CSS"], icon: Globe },
    { category: "AI Tools", items: ["ChatGPT", "Claude", "Gemini", "V0", "Bolt.new"], icon: Zap },
    { category: "Focus", items: ["Prompt Engineering", "AI-Assisted Dev", "Rapid Prototyping"], icon: Cpu },
    { category: "Design", items: ["UI/UX Basics", "Figma", "Canva"], icon: Layers },
  ];

  return (
    <div className="max-w-6xl mx-auto pt-12">
      <SEO 
        title="About Muhammad Karim Anggara – AI Vibe Coder & Developer"
        description="Pelajari latar belakang, keahlian teknologi frontend, workflow kecerdasan buatan, dan pendekatan engineering Muhammad Karim Anggara (MKA.DEV)."
        keywords="about muhammad karim anggara, profil mka dev, ai vibe coder indonesia, web developer background"
        canonicalPath="/about"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' }
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-black mb-8 leading-none tracking-tighter">
            DECODING <br/><span className="text-cyan-400">THE VIBE</span>
          </h1>
          <div className="space-y-6 text-lg text-theme-text-muted leading-relaxed font-light">
            <p dangerouslySetInnerHTML={{ __html: 'I’m <strong class="text-white">Muhammad Karim Anggara</strong>, an aspiring AI-Assisted Web Developer focused on building modern digital experiences with the help of Artificial Intelligence.' }} />
            <p>I specialize in combining creativity, problem-solving, and AI-powered workflows to turn ideas into functional and visually engaging websites. While I’m still growing as a developer, I’m deeply passionate about learning, experimenting, and continuously improving my skills.</p>
            <p>My approach centers around leveraging modern AI tools to accelerate development, enhance creativity, and bring concepts to life more efficiently.</p>
            <p>I believe the future of web development lies in the collaboration between human creativity and artificial intelligence — and I’m excited to be part of that evolution.</p>
          </div>

          <div className="mt-12 p-6 bg-theme-text-dim/5 border border-theme-border rounded-xl font-mono text-sm text-cyan-400/80">
            <div className="flex items-center gap-2 mb-4 text-theme-text-dim uppercase tracking-widest text-xs">
              <Terminal size={14} /> Current Status
            </div>
            <p>{'> learning_mode: active'}</p>
            <p>{'> exploring_ai_capabilities...'}</p>
            <p>{'> status: building_the_future.'}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-theme-text-dim/5 border border-theme-border rounded-2xl hover:border-cyan-400/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-theme-text-dim/5 rounded-lg text-cyan-400 group-hover:text-fuchsia-400 transition-colors">
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-theme-text">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-theme-text-dim/5 rounded-full text-xs font-mono text-theme-text-muted border border-theme-border hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <TechStack />
    </div>
  );
};

export default About;
