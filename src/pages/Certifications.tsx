import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Certifications as CertificationsSection } from '@/sections/Certifications';

export function CertificationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button variant="ghost" asChild className="text-slate-400 hover:text-cyan-400">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Certifications & <span className="text-cyan-400">Compliance</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We maintain the highest industry certifications to ensure quality and compliance.
          </p>
        </motion.div>

        <CertificationsSection />

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="p-8 rounded-lg bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold font-heading text-white mb-4">
              Quality is Our Priority
            </h3>
            <p className="text-slate-400 mb-6">
              Our certifications ensure that your parts meet the highest quality standards.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link to="/rfq">Request a Quote</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

