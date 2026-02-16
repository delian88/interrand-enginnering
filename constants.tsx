
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
import { Service, Leader, Project } from './types';

export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000',
    title: 'Precision Engineering for Global Industrial Growth',
    subtitle: 'Interrand Engineering Ltd delivers technically-driven excellence, fostering industrialization through world-class professional and financial expertise.',
    cta: 'Our Engineering Solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000',
    title: 'Sustainable Infrastructure & Regional Impact',
    subtitle: 'Bridging technical gaps across Nigeria and Ghana since 2009 with a legacy of disciplined execution and long-term asset value.',
    cta: 'Explore Projects'
  },
  {
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000',
    title: 'Disciplined Execution. Technical Mastery.',
    subtitle: 'Supporting critical sectors of the economy with structural integrity and a commitment to engineering standards across borders.',
    cta: 'Learn About Our Vision'
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
    bio: 'A strategic visionary with deep roots in engineering management, leading Interrand\'s expansion across West Africa.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Dr. Benjamin Abimbola Adigun',
    role: 'Chairman / Executive Director',
    bio: 'An academic and industry veteran, providing the technical depth and disciplined leadership that defines Interrand.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lagos Industrial Corridor',
    location: 'Lagos, Nigeria',
    category: 'Industrial',
    imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800'
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
    imageUrl: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800'
  }
];

export const CORE_VALUES = [
  { title: 'Integrity', desc: 'Upholding the highest ethical standards in every project delivery.' },
  { title: 'Excellence', desc: 'Commitment to technical precision and world-class engineering results.' },
  { title: 'Safety', desc: 'Zero-compromise approach to the well-being of our team and stakeholders.' },
  { title: 'Innovation', desc: 'Continuously adopting new technologies to solve complex challenges.' }
];
