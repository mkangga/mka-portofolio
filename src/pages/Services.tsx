import React from 'react';
import { motion } from 'motion/react';
import { Code, Layout, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const Services: React.FC = () => {
  const { t } = useThemeLanguage();

  const services = [
    {
      id: 'web-dev',
      title: t('services.web_dev'),
      icon: Code,
      description: t('services.web_dev_desc'),
      features: [t('services.web_dev_f1'), t('services.web_dev_f2'), t('services.web_dev_f3'), t('services.web_dev_f4')],
      color: 'text-cyan-400',
      borderColor: 'group-hover:border-cyan-400/50'
    },
    {
      id: 'ui-ux',
      title: t('services.ui_ux'),
      icon: Layout,
      description: t('services.ui_ux_desc'),
      features: [t('services.ui_ux_f1'), t('services.ui_ux_f2'), t('services.ui_ux_f3'), t('services.ui_ux_f4')],
      color: 'text-fuchsia-400',
      borderColor: 'group-hover:border-fuchsia-400/50'
    },
    {
      id: 'ai-integration',
      title: t('services.ai_int'),
      icon: Cpu,
      description: t('services.ai_int_desc'),
      features: [t('services.ai_int_f1'), t('services.ai_int_f2'), t('services.ai_int_f3'), t('services.ai_int_f4')],
      color: 'text-emerald-400',
      borderColor: 'group-hover:border-emerald-400/50'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto pt-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          {t('services.title1')} <span className="text-cyan-400">{t('services.title2')}</span> <br className="hidden md:block" /> {t('services.title3')}
        </h1>
        <p className="text-lg text-theme-text-muted max-w-2xl mx-auto font-light leading-relaxed">
          {t('services.desc')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`bg-theme-text-dim/5 border border-theme-border rounded-2xl p-8 hover:bg-theme-text-dim/10 transition-all duration-300 group ${service.borderColor}`}
          >
            <div className={`p-4 bg-theme-text-dim/5 rounded-xl w-fit mb-6 ${service.color}`}>
              <service.icon size={32} />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-theme-text">{service.title}</h3>
            <p className="text-theme-text-muted mb-8 leading-relaxed min-h-[80px]">
              {service.description}
            </p>

            <ul className="space-y-3 mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-theme-text-muted">
                  <CheckCircle size={16} className={`mt-0.5 ${service.color}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all duration-300 group-hover:text-theme-text"
            >
              {t('services.start_project')} <ArrowRight size={16} className={service.color} />
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-32 p-12 bg-gradient-to-r from-cyan-900/20 to-fuchsia-900/20 rounded-3xl border border-theme-border text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-theme-text">{t('services.ready_title')}</h2>
          <p className="text-lg text-theme-text-muted mb-10 max-w-2xl mx-auto">
            {t('services.ready_desc')}
          </p>
          <Link 
            to="/contact"
            className="inline-block px-10 py-4 bg-theme-text text-bg-body font-bold uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-colors duration-300"
          >
            {t('services.get_quote')}
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
