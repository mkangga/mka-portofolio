import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'light';
type Language = 'en' | 'id';

interface ThemeLanguageContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.connect': 'Connect',
    'footer.copy': '© {year} Muhammad Karim Anggara. All Systems Operational.',
    
    'home.name': 'Muhammad Karim Anggara',
    'home.title': 'AI VIBE CODER',
    'home.desc': 'Leveraging AI to build the web of tomorrow. Exploring the intersection of human creativity and artificial intelligence.',
    'home.view_projects': 'View Projects',
    'home.my_services': 'My Services',
    'home.prompt_eng': 'Prompt Engineer',
    'home.prompt_eng_desc': 'Crafting precise instructions for optimal AI generation.',
    'home.web_dev': 'Web Developer',
    'home.web_dev_desc': 'Building high-performance websites and applications.',
    'home.ui_ux': 'UI/UX Designer',
    'home.ui_ux_desc': 'Designing intuitive and engaging user experiences.',
    
    'about.title1': 'DECODING',
    'about.title2': 'THE VIBE',
    'about.p1': 'I am <strong class="text-white">Muhammad Karim Anggara</strong>, a beginner AI Vibe Coder. My journey is just beginning, but my vision is clear: to leverage the power of Artificial Intelligence to bring digital ideas to life.',
    'about.p2': 'I may be new to the game, but I specialize in orchestrating AI tools to build functional, beautiful websites. I believe that with the right prompts and a creative mindset, anyone can become a creator in this new digital era.',
    'about.p3': 'I\'m constantly learning, experimenting, and pushing the boundaries of what an "AI Vibe Coder" can achieve.',
    'about.status': 'Current Status',
    'about.status1': '> learning_mode: active',
    'about.status2': '> exploring_ai_capabilities...',
    'about.status3': '> status: building_the_future.',
    'about.tech_stack': 'Tech Stack',
    
    'services.title1': 'CRAFTING',
    'services.title2': 'DIGITAL',
    'services.title3': 'EXPERIENCES',
    'services.desc': 'I help businesses and individuals bring their visions to life through cutting-edge web development and thoughtful design.',
    'services.start_project': 'Start Project',
    'services.ready': 'Ready to elevate your brand?',
    'services.ready_desc': 'Let\'s collaborate to build something extraordinary that stands out in the digital landscape.',
    'services.get_quote': 'Get a Quote',
    
    'work.title': 'SELECTED WORK',
    'work.view_project': 'View Project',
    'work.open_project': 'Open Project',
    'work.visit_website': 'Visit Website',
    'work.overview': 'Overview',
    'work.technologies': 'Technologies',
    'work.year': 'Year',
    'work.role': 'Role',
    'work.back_to_work': 'Back to Work',
    'work.view_live': 'View Live Project',
    'work.interested': 'Interested in working together?',
    'work.lets_talk': 'Let\'s Talk',
    
    'connect.title1': 'CONNECT',
    'connect.title2': '_HUB',
    'connect.protocol': 'Protocol: Social_Sync // Network_Access',
    'connect.desc': 'Access my digital nodes across the network. Feel free to reach out for collaborations, project inquiries, or just to say hello.',
    'connect.offline': 'Offline',
    'connect.formal': 'Need a more formal handshake?',
    'connect.formal_desc': 'For detailed project proposals or business inquiries, please use the official contact form.',
    'connect.go_contact': 'Go to Contact Page',
    
    'contact.title1': 'INITIATE',
    'contact.title2': 'CONTACT',
    'contact.protocol': 'Protocol: Handshake_Request // Project_Inquiry',
    'contact.desc': 'Establish a direct connection. Whether you have a specific project in mind or just want to explore possibilities, my inbox is open.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Transmit Message',
    'contact.sending': 'Transmitting...',
    'contact.success': 'Transmission Successful',
    'contact.error': 'Transmission Failed. Please try again.',
  },
  id: {
    'nav.home': 'Beranda',
    'nav.work': 'Karya',
    'nav.services': 'Layanan',
    'nav.about': 'Tentang',
    'nav.contact': 'Kontak',
    'nav.connect': 'Hubungi',
    'footer.copy': '© {year} Muhammad Karim Anggara. Semua Sistem Beroperasi.',
    
    'home.name': 'Muhammad Karim Anggara',
    'home.title': 'AI VIBE CODER',
    'home.desc': 'Memanfaatkan AI untuk membangun web masa depan. Menjelajahi persimpangan antara kreativitas manusia dan kecerdasan buatan.',
    'home.view_projects': 'Lihat Proyek',
    'home.my_services': 'Layanan Saya',
    'home.prompt_eng': 'Prompt Engineer',
    'home.prompt_eng_desc': 'Merancang instruksi presisi untuk generasi AI yang optimal.',
    'home.web_dev': 'Web Developer',
    'home.web_dev_desc': 'Membangun situs web dan aplikasi berkinerja tinggi.',
    'home.ui_ux': 'UI/UX Designer',
    'home.ui_ux_desc': 'Merancang pengalaman pengguna yang intuitif dan menarik.',
    
    'about.title1': 'MENGKODE',
    'about.title2': 'SUASANA',
    'about.p1': 'Saya <strong class="text-white">Muhammad Karim Anggara</strong>, seorang AI Vibe Coder pemula. Perjalanan saya baru saja dimulai, tetapi visi saya jelas: memanfaatkan kekuatan Kecerdasan Buatan untuk mewujudkan ide-ide digital.',
    'about.p2': 'Saya mungkin baru dalam hal ini, tetapi saya berspesialisasi dalam mengatur alat AI untuk membangun situs web yang fungsional dan indah. Saya percaya bahwa dengan prompt yang tepat dan pola pikir kreatif, siapa pun dapat menjadi kreator di era digital baru ini.',
    'about.p3': 'Saya terus belajar, bereksperimen, dan mendorong batas-batas apa yang dapat dicapai oleh seorang "AI Vibe Coder".',
    'about.status': 'Status Saat Ini',
    'about.status1': '> mode_belajar: aktif',
    'about.status2': '> menjelajahi_kemampuan_ai...',
    'about.status3': '> status: membangun_masa_depan.',
    'about.tech_stack': 'Teknologi',
    
    'services.title1': 'MENCIPTAKAN',
    'services.title2': 'PENGALAMAN',
    'services.title3': 'DIGITAL',
    'services.desc': 'Saya membantu bisnis dan individu mewujudkan visi mereka melalui pengembangan web mutakhir dan desain yang cermat.',
    'services.start_project': 'Mulai Proyek',
    'services.ready': 'Siap meningkatkan merek Anda?',
    'services.ready_desc': 'Mari berkolaborasi untuk membangun sesuatu yang luar biasa dan menonjol di lanskap digital.',
    'services.get_quote': 'Dapatkan Penawaran',
    
    'work.title': 'KARYA TERPILIH',
    'work.view_project': 'Lihat Proyek',
    'work.open_project': 'Buka Proyek',
    'work.visit_website': 'Kunjungi Situs',
    'work.overview': 'Ringkasan',
    'work.technologies': 'Teknologi',
    'work.year': 'Tahun',
    'work.role': 'Peran',
    'work.back_to_work': 'Kembali ke Karya',
    'work.view_live': 'Lihat Proyek Langsung',
    'work.interested': 'Tertarik untuk bekerja sama?',
    'work.lets_talk': 'Mari Berbicara',
    
    'connect.title1': 'HUBUNGI',
    'connect.title2': '_SAYA',
    'connect.protocol': 'Protokol: Sinkronisasi_Sosial // Akses_Jaringan',
    'connect.desc': 'Akses node digital saya di seluruh jaringan. Jangan ragu untuk menghubungi untuk kolaborasi, pertanyaan proyek, atau sekadar menyapa.',
    'connect.offline': 'Luring',
    'connect.formal': 'Butuh jabat tangan yang lebih formal?',
    'connect.formal_desc': 'Untuk proposal proyek terperinci atau pertanyaan bisnis, silakan gunakan formulir kontak resmi.',
    'connect.go_contact': 'Ke Halaman Kontak',
    
    'contact.title1': 'MULAI',
    'contact.title2': 'KONTAK',
    'contact.protocol': 'Protokol: Permintaan_Jabat_Tangan // Pertanyaan_Proyek',
    'contact.desc': 'Buat koneksi langsung. Apakah Anda memiliki proyek tertentu dalam pikiran atau hanya ingin menjelajahi kemungkinan, kotak masuk saya terbuka.',
    'contact.name': 'Nama',
    'contact.email': 'Email',
    'contact.message': 'Pesan',
    'contact.send': 'Kirim Pesan',
    'contact.sending': 'Mengirim...',
    'contact.success': 'Pengiriman Berhasil',
    'contact.error': 'Pengiriman Gagal. Silakan coba lagi.',
  }
};

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export const ThemeLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'id' : 'en');

  const t = (key: string, params?: Record<string, string>) => {
    let text = translations[language][key] || key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, v);
      });
    }
    return text;
  };

  return (
    <ThemeLanguageContext.Provider value={{ theme, toggleTheme, language, toggleLanguage, t }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) throw new Error('useThemeLanguage must be used within a ThemeLanguageProvider');
  return context;
};
