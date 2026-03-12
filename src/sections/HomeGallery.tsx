import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';



import type { GalleryItem } from '@/data/gallery';
import { galleryItems } from '@/data/gallery';

export function HomeGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Our <span className="text-cyan-400">Gallery</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore our portfolio of precision-machined components across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.slice(0,4).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium font-heading">{item.title}</p>
                    <p className="text-slate-300 text-sm">{item.industry}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                className="relative bg-slate-900 rounded-lg max-w-3xl w-full overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors"
                  onClick={() => setSelectedItem(null)}
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold font-heading text-white mb-4">
                      {selectedItem.title}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-400 text-sm">Material</p>
                        <p className="text-white">{selectedItem.material}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Tolerance</p>
                        <p className="text-cyan-400 font-mono">{selectedItem.tolerance}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Industry</p>
                        <p className="text-white">{selectedItem.industry}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

