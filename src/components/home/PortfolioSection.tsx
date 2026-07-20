import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { portfolioItems } from '../../constants/mockData';
import { renderPortfolioMockup } from './portfolioMockups';

interface PortfolioSectionProps {
  handleNavClick: (id: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ handleNavClick }) => {
  return (
    <section id="portfolio" className="bg-[#F8F9FC] pt-12 pb-10 lg:pt-12 lg:pb-28 border-b border-brand-border relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-3">
            OUR WORK
          </span>
          <h2 className="font-display font-black text-brand-navy text-3xl sm:text-4xl leading-tight">
            Proven Campaigns, <span className="text-brand-primary">Real Results</span>
          </h2>
          <p className="text-sm text-[#64748B] mt-4">
            Real campaigns. Real results. Here's how we helped businesses grow with digital marketing.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {portfolioItems
              .slice(0, 3)
              .map((p, idx) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.1 }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.12)",
                    borderColor: "rgba(233, 30, 140, 0.30)"
                  }}
                  className="w-full bg-white border border-brand-border rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Image Area */}
                  <div className="h-48 w-full bg-[#F1F5F9] relative overflow-hidden flex items-center justify-center border-b border-brand-border">
                    {renderPortfolioMockup(p.id)}
                  </div>

                  {/* Card Content (below image) */}
                  <div className="p-5 text-left flex flex-col justify-between flex-grow">
                    <div>
                      {/* Category label */}
                      <span className="text-xs font-bold uppercase text-brand-primary tracking-wide block mb-1">
                        {p.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-bold text-base text-brand-navy mb-2 leading-snug">
                        {p.title}
                      </h3>

                      {/* Result metric badge */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-1.5 bg-[rgba(154,63,230,0.08)] text-brand-primary rounded-full px-3 py-1 text-xs font-bold mb-3 cursor-default"
                      >
                        <TrendingUp className="w-3 h-3" />
                        {p.metric}
                      </motion.div>

                      {/* Short description */}
                      <p className="text-xs text-[#64748B] leading-relaxed mb-4 line-clamp-2">
                        {p.desc}
                      </p>
                    </div>

                    {/* Bottom Row */}
                    <div className="border-t border-brand-border pt-4 mt-auto flex justify-between items-center">
                      <button
                        onClick={() => handleNavClick('contact-page')}
                        className="text-brand-primary font-semibold text-xs flex items-center gap-1 hover:underline transition-colors"
                      >
                        View Case Study →
                      </button>

                      <span className="bg-[#F8F9FC] rounded-full px-2 py-1 text-[10px] text-[#94A3B8] font-medium">
                        {p.industry}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => handleNavClick('portfolio-page')}
            className="inline-flex items-center justify-center border-2 border-brand-cta text-brand-cta hover:bg-brand-cta hover:text-white font-semibold text-sm px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Projects →
          </button>
        </div>

      </div>
    </section>
  );
};
