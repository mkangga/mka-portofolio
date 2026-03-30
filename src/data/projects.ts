import { User, ShoppingBag, Globe, Gift, Flag, Rocket, CircleDot, Calculator, Wallet } from 'lucide-react';
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  role?: string;
  year: string;
  icon: React.ElementType;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export const PROJECTS: Project[] = [
  { 
    id: '1', 
    title: 'Self Portfolio', 
    category: 'Personal Identity',
    role: 'Frontend Developer',
    year: '2025', 
    icon: User, 
    description: 'A personal showcase of my journey as an AI Vibe Coder. Built with modern web technologies to reflect my digital identity and creative vision.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    link: 'https://www.mka.my.id/',
    image: 'https://picsum.photos/seed/portfolio/800/600'
  },
  { 
    id: '2', 
    title: 'MKA Store', 
    category: 'E-Commerce',
    role: 'Full Stack Developer',
    year: '2025', 
    icon: ShoppingBag, 
    description: 'A streamlined e-commerce platform designed for digital goods. Focusing on speed, simplicity, and user experience.',
    tags: ['Web App', 'Payment Gateway', 'UI/UX', 'React'],
    link: 'https://www.mkastore.my.id/',
    image: 'https://picsum.photos/seed/store/800/600'
  },
  { 
    id: '3', 
    title: 'Solar System', 
    category: 'Simulation',
    role: 'Creative Developer',
    year: '2026', 
    icon: Globe, 
    description: 'An interactive 3D simulation of our solar system. A journey through the cosmos powered by web technologies.',
    tags: ['3D', 'Simulation', 'Educational', 'Interactive'],
    link: 'https://tatasurya.mka.my.id/',
    image: 'https://picsum.photos/seed/solar/800/600'
  },
  { 
    id: '4', 
    title: 'Gift Box Website', 
    category: 'Interactive Experience',
    role: 'UI Engineer',
    year: '2026', 
    icon: Gift, 
    description: 'A secure gift box experience where users unlock surprises using unique credentials. Features database-backed authentication for personalized reveals.',
    tags: ['Database', 'Authentication', 'Interactive', 'React'],
    link: 'https://hadiah.mka.my.id/',
    image: 'https://picsum.photos/seed/gift/800/600'
  },
  { 
    id: '5', 
    title: 'Nusantara Merdeka', 
    category: 'Alternate History',
    role: 'Visual Storyteller',
    year: '2026', 
    icon: Flag, 
    description: 'Bagaimana jika Indonesia tidak pernah dijajah? Sebuah eksplorasi visual dan naratif tentang sejarah alternatif Nusantara yang berdaulat penuh.',
    tags: ['Storytelling', 'History', 'Interactive', 'Web Design'],
    link: 'http://nusantaramerdeka.mka.my.id/',
    image: 'https://picsum.photos/seed/nusantara/800/600'
  },
  { 
    id: '6', 
    title: 'Kolonisasi Mars', 
    category: 'Space Exploration',
    role: 'Research & Design',
    year: '2026', 
    icon: Rocket, 
    description: 'Dari mimpi Jules Verne hingga roket SpaceX — umat manusia bersiap menjadi spesies multiplanet. Visualisasi perjalanan manusia menuju Planet Merah.',
    tags: ['Space', 'Science', 'Visualization', 'Future'],
    link: 'https://koloni-mars.mka.my.id/',
    image: 'https://picsum.photos/seed/mars/800/600'
  },
  { 
    id: '7', 
    title: 'Digital Gift Box', 
    category: 'Interactive Experience',
    role: 'Full Stack Developer',
    year: '2026', 
    icon: Gift, 
    description: 'Create magical, personalized digital gift experiences for your loved ones.',
    tags: ['Interactive', 'Personalized', 'Web App'],
    link: 'https://gift.mka.my.id/',
    image: 'https://picsum.photos/seed/gift2/800/600'
  },
  { 
    id: '8', 
    title: 'Random Wheel Picker', 
    category: 'Utility',
    role: 'Frontend Developer',
    year: '2026', 
    icon: CircleDot, 
    description: 'A fun and interactive random wheel picker for decision making.',
    tags: ['Utility', 'Interactive', 'Tool'],
    link: 'https://wheel.mka.my.id/',
    image: 'https://picsum.photos/seed/wheel/800/600'
  },
  { 
    id: '9', 
    title: 'Kalkulator MBG', 
    category: 'Utility',
    role: 'Frontend Developer',
    year: '2026', 
    icon: Calculator, 
    description: 'Membandingkan pengeluaran harian MBG sebesar 1,2T/hari dengan suatu nilai benda, produk dan lainnya.',
    tags: ['Calculator', 'Utility', 'Interactive'],
    link: 'https://kalkulatormbg.mka.my.id/',
    image: 'https://picsum.photos/seed/kalkulator/800/600'
  },
  { 
    id: '10', 
    title: 'CatatUang', 
    category: 'Finance',
    role: 'Full Stack Developer',
    year: '2026', 
    icon: Wallet, 
    description: 'Pencatat Keuangan Pribadimu.',
    tags: ['Finance', 'Tracker', 'Web App'],
    link: 'https://catatuang.mka.my.id/',
    image: 'https://picsum.photos/seed/catatuang/800/600'
  }
];
