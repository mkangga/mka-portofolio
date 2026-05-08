import { User, ShoppingBag, Globe, Gift, Flag, Rocket, CircleDot, Calculator, Wallet, ListTodo, Vote, QrCode, MessageSquare, Film } from 'lucide-react';
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
    description: 'What if Indonesia was never colonized? A visual and narrative exploration of an alternative history of the sovereign Nusantara.',
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
    description: 'From Jules Verne\'s dreams to SpaceX rockets — humanity prepares to become a multiplanetary species. A visualization of the journey to the Red Planet.',
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
    description: 'Comparing the daily MBG expenditure of 1.2T/day with various items, products, and more.',
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
    description: 'Your Personal Financial Tracker.',
    tags: ['Finance', 'Tracker', 'Web App'],
    link: 'https://catatuang.mka.my.id/',
    image: 'https://picsum.photos/seed/catatuang/800/600'
  },
  { 
    id: '11', 
    title: 'Antree', 
    category: 'Utility',
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
    category: 'Interactive',
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
  }
];


