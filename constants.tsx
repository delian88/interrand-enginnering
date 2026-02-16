
import React from 'react';
import { 
  Building2, 
  Settings, 
  Zap, 
  ShieldCheck,
  Factory,
  HardHat,
  Droplets,
  Truck
} from 'lucide-react';
import { Service, Leader, Project } from './types.ts';

export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000',
    welcome: 'Interrand Engineering Ltd',
    caption: 'Industrial Growth',
    locationTag: 'Abuja HQ, Nigeria',
    title: 'Engineering Global Industrial Growth',
    subtitle: 'Technically-driven excellence fostering industrialization with world-class professional expertise.',
    cta: 'Our Solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=2000',
    caption: 'Regional Impact',
    locationTag: 'Accra, Ghana',
    title: 'Sustainable Regional Infrastructure',
    subtitle: 'Bridging technical gaps across West Africa with disciplined execution and long-term asset value.',
    cta: 'View Projects'
  },
  {
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000',
    caption: 'Technical Mastery',
    locationTag: 'Technical Hub, Tema',
    title: 'Mastery Across Borders',
    subtitle: 'Supporting critical economic sectors with structural integrity and world-class engineering standards.',
    cta: 'Our Vision'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'civil',
    title: 'Civil & Structural',
    description: 'Comprehensive infrastructure development including road networks, bridges, and complex structural designs for urban development.',
    icon: 'Building2'
  },
  {
    id: 'industrial',
    title: 'Industrial Support',
    description: 'End-to-end support for manufacturing and processing plants, ensuring operational efficiency and technical compliance.',
    icon: 'Factory'
  },
  {
    id: 'mechanical',
    title: 'Mechanical Systems',
    description: 'Design, installation, and maintenance of high-precision mechanical systems for energy and manufacturing sectors.',
    icon: 'Settings'
  },
  {
    id: 'electrical',
    title: 'Power & Energy',
    description: 'Expertise in high-voltage distribution, substation construction, and sustainable energy integration for industrial zones.',
    icon: 'Zap'
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas Services',
    description: 'Specialized technical services for the upstream and downstream sectors, focusing on safety and efficiency.',
    icon: 'Droplets'
  },
  {
    id: 'logistics',
    title: 'Project Logistics',
    description: 'Disciplined project delivery managing complex supply chains and technical movements across regional borders.',
    icon: 'Truck'
  }
];

export const LEADERSHIP: Leader[] = [
  {
    name: 'David Omonije',
    role: 'Managing Director / CEO',
    bio: 'A visionary strategist in civil and structural engineering with extensive experience in leading high-impact infrastructure projects across West Africa.',
    imageUrl: ''
  },
  {
    name: 'Dr. Benjamin Abimbola Adigun',
    role: 'Chairman / Executive Director',
    bio: 'A distinguished industrial veteran providing advanced technical depth and disciplined leadership to secure long-term value for critical infrastructure assets.',
    imageUrl: ''
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lagos Industrial Corridor',
    location: 'Lagos, Nigeria',
    category: 'Industrial',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Accra Power Substation',
    location: 'Accra, Ghana',
    category: 'Electrical',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Tema Port Infrastructure',
    location: 'Tema, Ghana',
    category: 'Civil',
    imageUrl: 'https://images.unsplash.com/photo-1487875948215-069cf478988a?auto=format&fit=crop&q=80&w=800'
  }
];

export const CORE_VALUES = [
  { title: 'Integrity', desc: 'Upholding the highest ethical standards in every project delivery.' },
  { title: 'Excellence', desc: 'Commitment to technical precision and world-class engineering results.' },
  { title: 'Safety', desc: 'Zero-compromise approach to the well-being of our team and stakeholders.' },
  { title: 'Innovation', desc: 'Continuously adopting new technologies to solve complex challenges.' }
];
