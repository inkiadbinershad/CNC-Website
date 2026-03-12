import { motion } from 'framer-motion';

import { TiltCard } from '@/components/TiltCard';


/* import type { Industry } from '@/data/industries'; */
import { industries } from '@/data/industries';

export function HomeIndustries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="industries" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Industries We <span className="text-cyan-400">Serve</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Delivering precision machined components across critical industries
            where quality and reliability are paramount.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
{industries.slice(0, 4).map((industry, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TiltCard className="h-full">
                <div className="relative h-full p-6 rounded-lg bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/10 to-orange-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-orange-500/20 flex items-center justify-center mb-4">
                      <industry.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold font-heading text-white mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-slate-400">{industry.description}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

