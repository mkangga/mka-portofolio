import { User, ShoppingBag, Globe, Gift, Flag, Rocket } from 'lucide-react';
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  icon: React.ElementType;
  description: string;
  tags: string[];
  link: string;
}

export const PROJECTS: Project[] = [
  { 
    id: '1', 
    title: 'Self Portfolio', 
    category: 'Personal Identity', 
    year: '2025', 
    icon: User, 
    description: 'A personal showcase of my journey as an AI Vibe Coder. Built with modern web technologies to reflect my digital identity and creative vision.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    link: 'https://www.mka.my.id/'
  },
  { 
    id: '2', 
    title: 'MKA Store', 
    category: 'E-Commerce', 
    year: '2025', 
    icon: ShoppingBag, 
    description: 'A streamlined e-commerce platform designed for digital goods. Focusing on speed, simplicity, and user experience.',
    tags: ['Web App', 'Payment Gateway', 'UI/UX', 'React'],
    link: 'https://www.mkastore.my.id/'
  },
  { 
    id: '3', 
    title: 'Solar System', 
    category: 'Simulation', 
    year: '2026', 
    icon: Globe, 
    description: 'An interactive 3D simulation of our solar system. A journey through the cosmos powered by web technologies.',
    tags: ['3D', 'Simulation', 'Educational', 'Interactive'],
    link: 'https://tatasurya.mka.my.id/'
  },
  { 
    id: '4', 
    title: 'Gift Box Website', 
    category: 'Interactive Experience', 
    year: '2026', 
    icon: Gift, 
    description: 'A secure gift box experience where users unlock surprises using unique credentials. Features database-backed authentication for personalized reveals.',
    tags: ['Database', 'Authentication', 'Interactive', 'React'],
    link: 'https://hadiah.mka.my.id/'
  },
  { 
    id: '5', 
    title: 'Nusantara Merdeka', 
    category: 'Alternate History', 
    year: '2026', 
    icon: Flag, 
    description: 'Bagaimana jika Indonesia tidak pernah dijajah? Sebuah eksplorasi visual dan naratif tentang sejarah alternatif Nusantara yang berdaulat penuh.',
    tags: ['Storytelling', 'History', 'Interactive', 'Web Design'],
    link: 'http://nusantaramerdeka.mka.my.id/'
  },
  { 
    id: '6', 
    title: 'Kolonisasi Mars', 
    category: 'Space Exploration', 
    year: '2026', 
    icon: Rocket, 
    description: 'Dari mimpi Jules Verne hingga roket SpaceX — umat manusia bersiap menjadi spesies multiplanet. Visualisasi perjalanan manusia menuju Planet Merah.',
    tags: ['Space', 'Science', 'Visualization', 'Future'],
    link: 'https://koloni-mars.mka.my.id/'
  }
];
