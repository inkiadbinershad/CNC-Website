import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';


import { machines } from '@/data/machines';

export function HomeMachines() {
  return (
    <section id="machines" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Our <span className="text-cyan-400">Machines</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            State-of-the-art CNC equipment capable of handling the most demanding tolerances.
          </p>
          <Badge variant="warning" className="text-sm py-1 px-4">
            Current Lead Time: 3-4 Weeks
          </Badge>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <table className="w-full min-w-[950px]">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4 px-6 text-slate-400 font-medium font-heading w-24">
                  Image
                </th>
                <th className="text-left py-4 px-6 text-slate-400 font-medium font-heading">
                  Machine Name
                </th>
                <th className="text-left py-4 px-6 text-slate-400 font-medium font-heading">
                  Axis
                </th>
                <th className="text-left py-4 px-6 text-slate-400 font-medium font-heading">
                  Travel Dimensions
                </th>
                <th className="text-left py-4 px-6 text-slate-400 font-medium font-heading">
                  Tolerance
                </th>
              </tr>
            </thead>
            <tbody>
              {machines.slice(0,4).map((machine, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <td className="py-4 px-6 w-24">
                    {machine.image ? (
                      <img 
                        src={machine.image}
                        alt={machine.name}
                        className="w-16 h-12 object-cover rounded border border-slate-600 hover:scale-105 transition-transform"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : null}
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-white font-medium">{machine.name}</span>
                  </td>
                  <td className="py-4 px-6">
                    <Badge variant="secondary">{machine.axis}</Badge>
                  </td>
                  <td className="py-4 px-6 text-slate-300">{machine.travel}</td>
                  <td className="py-4 px-6">
                    <span className="text-cyan-400 font-mono text-sm">
                      {machine.tolerance}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

