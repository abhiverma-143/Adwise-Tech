import { motion } from 'framer-motion';
import { trustCompanies } from '../../constants/mockData';

export const TrustedLogosSection: React.FC = () => {
  return (
    <section className="bg-brand-light py-12 border-t border-brand-border relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs text-brand-secondary font-bold uppercase tracking-wider mb-6">
          POWERING THE GROWTH IN BHOPAL AND ACROSS THE WORLD
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
          {trustCompanies.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 group cursor-pointer text-brand-secondary hover:text-brand-orange"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{c.icon}</span>
              <span className="font-sans font-black text-xs sm:text-sm tracking-tight uppercase">
                {c.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
