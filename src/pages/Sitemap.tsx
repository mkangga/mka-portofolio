import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, ArrowUpRight, ExternalLink, Compass, FolderGit2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getSitemapEntries, DEFAULT_BASE_URL, SitemapEntry } from '../utils/sitemapGenerator';
import { PROJECTS } from '../data/projects';

const Sitemap: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const domain = typeof window !== 'undefined' && window.location.origin && !window.location.origin.includes('localhost')
    ? window.location.origin
    : DEFAULT_BASE_URL;

  const entries: SitemapEntry[] = useMemo(() => {
    return getSitemapEntries(domain);
  }, [domain]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    entries.forEach(e => {
      if (e.category) cats.add(e.category);
    });
    return ['All', 'Core Pages', ...Array.from(cats)];
  }, [entries]);

  const filteredEntries = useMemo(() => {
    return entries.filter(entry => {
      const matchesSearch = entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.relativePath.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (entry.category && entry.category.toLowerCase().includes(searchQuery.toLowerCase()));

      if (selectedCategory === 'All') return matchesSearch;
      if (selectedCategory === 'Core Pages') return matchesSearch && !entry.isProject;
      return matchesSearch && entry.category === selectedCategory;
    });
  }, [entries, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen pt-4 pb-24 md:pb-16 text-theme-text max-w-6xl mx-auto px-4 sm:px-6">
      <SEO 
        title="Site Directory & Archive – MKA.DEV"
        description="Indeks direktori lengkap seluruh halaman, kategori karya, dan proyek web Muhammad Karim Anggara (MKA.DEV)."
        keywords="direktori situs mka dev, archive portfolio, muhammad karim anggara pages"
        canonicalPath="/sitemap"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Directory', path: '/sitemap' }
        ]}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
          <Compass size={14} /> Full Index
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading mb-4 tracking-tighter">
          SITE <span className="text-cyan-400">DIRECTORY</span>
        </h1>
        <p className="text-theme-text-muted max-w-2xl text-base md:text-lg font-light leading-relaxed">
          Arsip terstruktur untuk menjelajahi semua halaman utama dan seluruh koleksi {PROJECTS.length} proyek digital.
        </p>
      </motion.div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-stretch md:items-center">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-theme-text-dim" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search pages, projects, or categories..."
            className="w-full bg-theme-text-dim/5 border border-theme-border rounded-full pl-11 pr-4 py-3 text-xs text-white placeholder-theme-text-dim focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-white text-black font-bold'
                  : 'border border-theme-border text-theme-text-muted hover:border-cyan-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEntries.map((entry, index) => (
          <motion.div
            key={entry.url}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(index * 0.02, 0.3) }}
            className="p-5 bg-theme-text-dim/5 border border-theme-border hover:border-cyan-400/40 rounded-2xl transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 uppercase tracking-widest font-bold">
                  {entry.isProject ? (entry.category || 'Project') : 'Section'}
                </span>
                <span className="text-[10px] font-mono text-theme-text-dim">
                  {entry.isProject ? 'Project Detail' : 'Core Page'}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-1 truncate font-heading">
                {entry.title}
              </h3>

              <p className="text-xs font-mono text-cyan-300/80 break-all mb-2">
                {entry.relativePath}
              </p>

              {entry.description && (
                <p className="text-xs text-theme-text-muted line-clamp-2 leading-relaxed mb-4 font-light">
                  {entry.description}
                </p>
              )}
            </div>

            <div className="pt-3 border-t border-theme-border/40 flex items-center justify-between text-xs">
              <Link
                to={entry.relativePath}
                className="text-white hover:text-cyan-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5 transition-colors"
              >
                <span>Visit Page</span>
                <ArrowUpRight size={13} />
              </Link>

              {entry.externalLink && (
                <a
                  href={entry.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-text-dim hover:text-cyan-400 font-mono text-[11px] flex items-center gap-1 transition-colors"
                >
                  <span>Live App</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-16 bg-theme-text-dim/5 border border-theme-border rounded-2xl">
          <p className="text-theme-text-muted text-sm mb-3">No pages match "{searchQuery}".</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="text-cyan-400 text-xs font-mono underline hover:text-white"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Machine-readable XML link discreet at the bottom */}
      <div className="mt-16 text-center pt-8 border-t border-theme-border/40">
        <a 
          href="/sitemap.xml" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-theme-text-dim hover:text-cyan-400 transition-colors"
        >
          <FolderGit2 size={14} />
          <span>Access raw XML sitemap (for automated search bots)</span>
        </a>
      </div>
    </div>
  );
};

export default Sitemap;
