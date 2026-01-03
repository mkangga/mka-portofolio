/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
  link?: string;
}

// Added Artist interface to fix error in ArtistCard.tsx
export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  day: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export type PageType = 'home' | 'work' | 'about' | 'contact';

export enum Section {
  HERO = 'hero',
  PROJECTS = 'projects',
  ABOUT = 'about',
  CONTACT = 'contact',
}
