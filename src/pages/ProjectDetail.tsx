import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, Calendar, UserCheck, Tag, Share2, Check, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import SEO from '../components/SEO';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const currentIndex = PROJECTS.findIndex(p => p.id === id);
  const project = currentIndex !== -1 ? PROJECTS[currentIndex] : null;

  const [copied, setCopied] = React.useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-theme-text px-4 text-center">
        <SEO 
          title="Project Not Found"
          description="Halaman proyek yang Anda cari tidak ditemukan di portfolio Muhammad Karim Anggara."
        />
        <h1 className="text-4xl font-bold mb-4 font-heading">Project Not Found</h1>
        <p className="text-theme-text-muted mb-8 max-w-md">Proyek dengan ID tersebut tidak tersedia atau telah dipindahkan.</p>
        <Link 
          to="/work" 
          className="px-8 py-3 bg-cyan-400 text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          Back to All Work
        </Link>
      </div>
    );
  }

  // Previous & Next navigation for crawler traversal and user experience
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  // Related projects in same category or adjacent
  const relatedProjects = PROJECTS.filter(p => p.id !== project.id && (p.category === project.category || p.tags.some(t => project.tags.includes(t)))).slice(0, 3);

  // Schema.org SoftwareApplication / CreativeWork JSON-LD
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': project.title,
    'description': project.description,
    'applicationCategory': project.category,
    'operatingSystem': 'Web Browser, All Platforms',
    'image': project.image,
    'url': project.link,
    'datePublished': `${project.year}-01-01`,
    'author': {
      '@type': 'Person',
      'name': 'Muhammad Karim Anggara',
      'url': 'https://www.mka.my.id/'
    },
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    }
  };

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: project.title, path: `/work/${project.id}` }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${project.title} – MKA.DEV`,
        text: project.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-bg-body text-theme-text pt-6 pb-24 md:pb-12">
      <SEO 
        title={`${project.title} – ${project.category}`}
        description={`${project.description} Dikembangkan oleh Muhammad Karim Anggara (MKA.DEV). Kategori: ${project.category}.`}
        keywords={`${project.title}, ${project.tags.join(', ')}, ${project.category}, Web Developer, Muhammad Karim Anggara, MKA.DEV`}
        canonicalPath={`/work/${project.id}`}
        image={project.image}
        type="article"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb Navigation - Essential for SEO & Google Rich Snippets */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs uppercase tracking-widest text-theme-text-dim">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/work" className="hover:text-cyan-400 transition-colors">Work</Link>
          <span>/</span>
          <span className="text-cyan-400 font-bold truncate max-w-[200px] sm:max-w-none">{project.title}</span>
        </nav>

        {/* Top Back & Share Actions */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-theme-text-muted hover:text-cyan-400 transition-colors group text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 bg-theme-text-dim/10 hover:bg-cyan-400/20 border border-theme-border rounded-full text-xs font-mono uppercase tracking-wider text-theme-text hover:text-cyan-400 transition-colors"
            title="Share Project URL"
          >
            {copied ? <Check size={14} className="text-green-400" /> : <Share2 size={14} />}
            <span>{copied ? 'Link Copied' : 'Share'}</span>
          </button>
        </div>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-theme-text-dim/5 border border-theme-border rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Header / Hero Section */}
          <header className="h-[42vh] md:h-[52vh] relative bg-gradient-to-br from-gray-900 via-black to-[#061017] flex items-center justify-center overflow-hidden">
            <project.icon 
              strokeWidth={0.5}
              className="w-64 h-64 md:w-96 md:h-96 text-white/5 absolute transform rotate-12" 
            />
            <project.icon 
              strokeWidth={1}
              className="w-32 h-32 md:w-48 md:h-48 text-cyan-400 relative z-10 drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 right-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-xs uppercase tracking-widest font-bold mb-3">
                <Sparkles size={12} /> {project.category}
              </span>
              <h1 className="text-3xl md:text-6xl font-black mb-2 leading-tight text-white font-heading">
                {project.title}
              </h1>
              <p className="text-theme-text-muted text-sm md:text-base max-w-2xl font-light">
                {project.role || 'Full Stack Developer'} • Launched {project.year}
              </p>
            </div>
          </header>

          {/* Content Section */}
          <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            <div className="md:col-span-2 space-y-10">
              <section>
                <h2 className="text-sm md:text-base font-bold mb-6 uppercase tracking-wider text-theme-text-dim border-b border-theme-border pb-2 flex items-center gap-2">
                  <span>Project Overview</span>
                </h2>
                <p className="text-lg md:text-2xl leading-relaxed text-theme-text-muted font-light">
                  {project.description}
                </p>
              </section>
              
              <section>
                <h2 className="text-sm md:text-base font-bold mb-6 uppercase tracking-wider text-theme-text-dim border-b border-theme-border pb-2 flex items-center gap-2">
                  <Tag size={16} />
                  <span>Tech Stack & Highlights</span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-4 py-2 bg-theme-text-dim/5 border border-theme-border rounded-full text-sm font-mono text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Meta Column */}
            <div className="space-y-8">
              <div className="p-6 bg-theme-text-dim/5 border border-theme-border rounded-2xl space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-theme-text-dim font-bold mb-1">
                    <Calendar size={14} /> Year of Release
                  </div>
                  <p className="text-2xl font-mono text-theme-text">{project.year}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-theme-text-dim font-bold mb-1">
                    <UserCheck size={14} /> Role & Responsibility
                  </div>
                  <p className="text-xl text-theme-text">{project.role || 'Lead Developer'}</p>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-theme-text-dim font-bold mb-1">
                    Domain / Production Link
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-cyan-400 hover:underline break-all block"
                  >
                    {project.link}
                  </a>
                </div>
              </div>
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-cyan-400 text-black font-bold uppercase tracking-[0.2em] hover:bg-white transition-all block text-center rounded-xl shadow-[0_0_25px_rgba(34,211,238,0.4)] relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Live Project <ExternalLink size={18} />
                </span>
              </a>
            </div>
          </div>

          {/* Internal Project Carousel / Next-Prev Bar */}
          <footer className="border-t border-theme-border p-6 md:p-8 bg-black/40 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              to={`/work/${prevProject.id}`}
              className="flex items-center gap-3 text-left group hover:text-cyan-400 transition-colors w-full sm:w-auto"
            >
              <div className="p-3 rounded-full bg-theme-text-dim/10 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                <ChevronLeft size={20} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-theme-text-dim uppercase tracking-widest block">Previous</span>
                <span className="text-sm font-bold">{prevProject.title}</span>
              </div>
            </Link>

            <Link
              to="/work"
              className="px-6 py-2 border border-theme-border rounded-full text-xs uppercase tracking-widest text-theme-text-dim hover:text-white hover:border-cyan-400 transition-colors"
            >
              All Projects ({PROJECTS.length})
            </Link>

            <Link 
              to={`/work/${nextProject.id}`}
              className="flex items-center gap-3 text-right group hover:text-cyan-400 transition-colors w-full sm:w-auto justify-end"
            >
              <div>
                <span className="text-[10px] font-mono text-theme-text-dim uppercase tracking-widest block">Next</span>
                <span className="text-sm font-bold">{nextProject.title}</span>
              </div>
              <div className="p-3 rounded-full bg-theme-text-dim/10 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                <ChevronRight size={20} />
              </div>
            </Link>
          </footer>
        </motion.article>

        {/* Related Projects Section to boost internal crawler linking */}
        {relatedProjects.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-6 font-heading text-theme-text">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map(rel => (
                <Link
                  key={rel.id}
                  to={`/work/${rel.id}`}
                  className="p-6 bg-theme-text-dim/5 border border-theme-border rounded-2xl hover:border-cyan-400/50 hover:bg-theme-text-dim/10 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <rel.icon className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-mono text-theme-text-dim">{rel.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-theme-text-muted line-clamp-2 leading-relaxed">
                    {rel.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Call to action */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-6 font-heading">
            Interested in building something similar?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              to="/contact"
              className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-all text-xs sm:text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Start a Conversation
            </Link>
            <Link 
              to="/work"
              className="px-8 py-4 border border-theme-border text-theme-text font-bold uppercase tracking-widest rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all text-xs sm:text-sm"
            >
              Explore All Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
