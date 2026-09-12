import { User, ShoppingBag, Globe, Gift, CircleDot, Wallet, ListTodo, Vote, QrCode, MessageSquare, Film, UploadCloud, BookOpen, Bot } from 'lucide-react';
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
    title: 'GIFT BOX WEBSITE (DEV)', 
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
    id: '7', 
    title: 'DIGITAL GIFT BOX (PUBLIC)', 
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
    id: '10', 
    title: 'CatatUang', 
    category: 'Finance',
    role: 'Full Stack Developer',
    year: '2026', 
    icon: Wallet, 
    description: 'Your Personal Financial Tracker.',
    tags: ['Finance', 'Tracker', 'Web App'],
    link: 'https://catatuang.mka.my.id/',
    image: 'https://picsum.photos/seed/catatuang/800/600'
  },
  { 
    id: '11', 
    title: 'Antree', 
    category: 'Management',
    role: 'Full Stack Developer',
    year: '2026', 
    icon: ListTodo, 
    description: 'Online queue system based on codes and QR for digital queue management efficiency.',
    tags: ['Queue System', 'QR Code', 'Utility', 'Web App'],
    link: 'https://antre.mka.my.id/',
    image: 'https://picsum.photos/seed/antre/800/600'
  },
  { 
    id: '12', 
    title: 'LiveVote', 
    category: 'Interactive Experience',
    role: 'Full Stack Developer',
    year: '2026', 
    icon: Vote, 
    description: 'Versatile platform for creating live and interactive voting, forms, polls, and quizzes.',
    tags: ['Voting', 'Polling', 'Interactive', 'Form'],
    link: 'https://livevote.mka.my.id/',
    image: 'https://picsum.photos/seed/livevote/800/600'
  },
  { 
    id: '13', 
    title: 'PRESENCE SYSTEM', 
    category: 'Management',
    role: 'Full Stack Developer',
    year: '2026', 
    icon: QrCode, 
    description: 'A digital attendance website based on QR Codes that allows admins to manage participant data and record attendance in real-time. Participants can access their personal attendance QR without logging in through data verification.',
    tags: ['Attendance', 'QR Code', 'Real-time', 'Management'],
    link: 'https://presence.mka.my.id/',
    image: 'https://picsum.photos/seed/presence/800/600'
  },
  { 
    id: '14', 
    title: 'SECONDTEXT', 
    category: 'Communication',
    role: 'Full Stack Developer',
    year: '2026', 
    icon: MessageSquare, 
    description: 'SecondText is a modern real-time chat platform designed with a mobile-first experience, seamless messaging, and a polished multi-device interface.',
    tags: ['Real-time', 'Chat', 'Mobile-First', 'Web App'],
    link: 'https://chat.mka.my.id/',
    image: 'https://picsum.photos/seed/chat/800/600'
  },
  { 
    id: '15', 
    title: 'Nontara', 
    category: 'Entertainment',
    role: 'Full Stack Developer',
    year: '2026', 
    icon: Film, 
    description: 'Cinematic movie watchlist platform built with React and Firebase, designed for modern and premium watchlist management with TMDB API integration.',
    tags: ['React', 'Firebase', 'TMDB API', 'Watchlist'],
    link: 'https://nontara.mka.my.id/',
    image: 'https://picsum.photos/seed/nontara/800/600'
  },
  { 
    id: '16', 
    title: 'Instant Site Deployer', 
    category: 'Utility',
    role: 'Full Stack Developer',
    year: '2026', 
    icon: UploadCloud, 
    description: 'Paste HTML/CSS/JS or SPA code to instantly generate a live shareable URL and preview website.',
    tags: ['Deployment', 'HTML/CSS/JS', 'SPA', 'Utility'],
    link: 'https://instadeploy.mka.my.id/',
    image: 'https://picsum.photos/seed/instadeploy/800/600'
  },
  { 
    id: '17', 
    title: 'ILMORA LMS', 
    category: 'Education',
    role: 'Full Stack Developer',
    year: '2026', 
    icon: BookOpen, 
    description: 'A comprehensive, feature-rich Learning Management System (LMS) designed to deliver a seamless online educational experience. Built with a focus on modern user experience, it enables instructors to manage interactive courses, track student progress, and deliver rich multimedia lessons while offering learners a clean, intuitive, and highly engaging interface to master new skills.',
    tags: ['LMS', 'Education', 'Online Learning', 'Web Application', 'Management'],
    link: 'https://lms.mka.my.id',
    image: 'https://picsum.photos/seed/lms/800/600'
  },
  { 
    id: '18', 
    title: 'OpenChat AI', 
    category: 'Artificial Intelligence',
    role: 'Full Stack Developer',
    year: '2026', 
    icon: Bot, 
    description: 'A versatile, client-centric AI chat playground that allows users to connect their own API keys from multiple top-tier intelligence providers. Designed with a clean, responsive chat interface, it enables seamless switching between model families, custom parameter fine-tuning, and robust conversation management, offering full control without server-side storage of sensitive credentials.',
    tags: ['AI', 'Chatbot', 'API Integration', 'LLM', 'Utility'],
    link: 'https://openchat.mka.my.id',
    image: 'https://picsum.photos/seed/openchat/800/600'
  }
];


