import { Plane, Heart, Shield, Car, Bot, Zap, Settings } from 'lucide-react';

export interface Industry {
  icon: any;
  title: string;
  description: string;
  image?: string;
}

export const industries: Industry[] = [
  {
    icon: Plane,
    title: 'Aerospace',
    description: 'Precision components for aircraft and spacecraft with AS9100 certification.',
    image: '/assets/images/industries/aerospace.jpg',
  },
  {
    icon: Heart,
    title: 'Medical Devices',
    description: 'Surgical instruments and implants manufactured under ISO 13485.',
    image: '/assets/images/industries/medical.jpg',
  },
  {
    icon: Shield,
    title: 'Defense',
    description: 'ITAR registered facility producing critical defense components.',
    image: '/assets/images/industries/defense.jpg',
  },
  {
    icon: Car,
    title: 'Automotive',
    description: 'High-volume production runs for automotive applications.',
    image: '/assets/images/industries/automotive.jpg',
  },
  {
    icon: Bot,
    title: 'Robotics',
    description: 'Custom parts for industrial automation and robotics systems.',
    image: '/assets/images/industries/robotics.jpg',
  },
  {
    icon: Settings,
    title: 'Electronics Manufacturing',
    description: 'Complex PCB enclosures and heat sinks with tight tolerances.',
    image: '/assets/images/industries/electronics.jpg',
  },
  {
    icon: Zap,
    title: 'Energy & Oil',
    description: 'Corrosion-resistant parts for harsh environments.',
    image: '/assets/images/industries/energy.jpg',
  },
  {
    icon: Settings,
    title: 'Industrial Automation',
    description: 'High-precision components for factory automation equipment.',
    image: '/assets/images/industries/automation.jpg',
  },
];
