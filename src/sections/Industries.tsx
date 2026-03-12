import { motion } from 'framer-motion';
import { TiltCard } from '@/components/TiltCard';
import { industries } from '@/data/industries';

export function Industries() {
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TiltCard className="h-full">
                <div className="relative h-full p-6 rounded-lg bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/10 to-orange-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 shadow-lg">
                      <industry.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold font-heading text-white mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    {industry.image && (
                      <div className="mt-auto">
                        <img 
                          src={industry.image} 
                          alt={industry.title}
                          className="w-full h-24 object-cover rounded-lg border border-slate-700/50"
                          onError={(e) => e.currentTarget.style.display = 'none'}
                        />
                      </div>
                    )}
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
