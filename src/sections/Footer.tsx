import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Map } from '@/components/Map';
import { Link } from 'react-router-dom';

interface FooterProps {
  showMap?: boolean;
}

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Machines', href: '/machines' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Contact', href: '/contact' },
];

const machines = [
  'Haas VF-2',
  'Mazak 5-Axis',
  'DMG Mori DMU 50',
  'Citizen Swiss L20',
];

const industries = [
  'Aerospace',
  'Medical Devices',
  'Defense',
  'Automotive',
  'Robotics',
];

export function Footer({ showMap = true }: FooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-orange-500 flex items-center justify-center">
                <span className="text-slate-950 font-bold text-lg font-heading">P</span>
              </div>
              <span className="text-xl font-bold font-heading text-white tracking-wider">
                PRECISION<span className="text-cyan-500">WORKS</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Leading precision CNC machining services for aerospace, medical, and defense industries. 
              ISO 9001 certified and ITAR registered.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-cyan-500" />
                <span>123 Industrial Way, Manufacturing City, ST 12345</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-cyan-500" />
                <a href="tel:+1234567890" className="hover:text-cyan-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-cyan-500" />
                <a href="mailto:info@precisionworks.com" className="hover:text-cyan-400 transition-colors">
                  info@precisionworks.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Clock className="w-5 h-5 text-cyan-500" />
                <span>Mon-Fri: 7:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-heading text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Machines */}
          <div>
            <h3 className="text-lg font-semibold font-heading text-white mb-4">
              Equipment
            </h3>
            <ul className="space-y-2">
              {machines.map((machine) => (
                <li key={machine} className="text-slate-400">
                  {machine}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold font-heading text-white mb-4">
              Industries
            </h3>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry} className="text-slate-400">
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map Placeholder */}
        {showMap && (
          <div className="mt-12 pt-8 border-t border-slate-800">
            <Map />
          </div>
        )}

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} PrecisionWorks CNC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

