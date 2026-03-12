import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Button } from '@/components/ui/button';


import { certifications } from '@/data/certifications';

export function Certifications() {
  return (
    <section className="py-20 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.slice(4).map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative p-6 rounded-lg bg-slate-900/80 border border-slate-700/50 backdrop-blur-sm text-center">
                <img 
                  src={cert.image} 
                  alt={`${cert.name} logo`}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg object-contain bg-slate-800/50 p-2 group-hover:ring-2 group-hover:ring-cyan-400/50 transition-all" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {cert.image ? null : (
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/30 to-orange-500/30 flex items-center justify-center group-hover:from-cyan-500/50 group-hover:to-orange-500/50 transition-all">
                    <Award className="w-8 h-8 text-cyan-400" />
                  </div>
                )}
                <h3 className="text-lg font-semibold font-heading text-white mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-slate-400">{cert.description}</p>
                <Button variant="outline" size="sm" asChild className="mt-3 w-full">
                  <a href={cert.pdf} target="_blank" rel="noopener noreferrer">Download PDF</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

