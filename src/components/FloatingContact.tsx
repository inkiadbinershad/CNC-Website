import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-400 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(34, 197, 94, 0.3)',
            '0 0 30px rgba(34, 197, 94, 0.5)',
            '0 0 20px rgba(34, 197, 94, 0.3)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+1234567890"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-cyan-500 text-slate-950 shadow-lg hover:bg-cyan-400 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(6, 182, 212, 0.3)',
            '0 0 30px rgba(6, 182, 212, 0.5)',
            '0 0 20px rgba(6, 182, 212, 0.3)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}

