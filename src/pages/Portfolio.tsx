import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems } from '../constants/mockData';

interface PortfolioProps {
  handleNavClick: (id: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ handleNavClick }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', ...Array.from(new Set(portfolioItems.map((p) => p.filterCategory)))];

  const filteredItems =
    selectedFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((p) => p.filterCategory === selectedFilter);

  return (
    <div className="transition-all duration-300">
      {/* Hero */}
      <section className="bg-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent font-bold text-xs uppercase tracking-widest block mb-3">
            OUR WORK
          </span>
          <h1 className="font-display font-black text-3xl lg:text-4xl text-brand-navy tracking-tight leading-tight">
            Proven Campaigns, <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Real Results</span>
          </h1>
          <p className="text-brand-secondary text-sm sm:text-base leading-relaxed max-w-2xl mt-3 mb-0">
            A closer look at how we've helped businesses across industries grow through strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-[#F8F9FC] pt-6 pb-16 lg:pb-20 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Tabs */}
          <div
            className="mb-10 overflow-x-auto whitespace-nowrap scrollbar-none pb-2 flex justify-start lg:justify-center gap-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`text-xs font-bold rounded-full px-4 py-2 transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-brand-cta text-white shadow-md'
                    : 'bg-white border border-brand-border text-[#64748B] hover:text-brand-cta'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((p, idx) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -30 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.06 }}
                  whileHover={{
                    y: -6,
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
                    borderColor: 'rgba(233, 30, 140, 0.30)'
                  }}
                  className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="h-48 w-full relative overflow-hidden border-b border-brand-border">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
                  </div>

                  <div className="p-5 text-left flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-xs font-bold uppercase bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent tracking-wide block mb-1">
                        {p.category}
                      </span>
                      <h3 className="font-bold text-base text-brand-navy mb-2 leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                        {p.desc}
                      </p>
                    </div>

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

          {filteredItems.length === 0 && (
            <div className="text-center py-10 bg-white border border-brand-border rounded-[20px]">
              <p className="text-brand-secondary text-sm">No projects found in this category.</p>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-14 bg-brand-navy rounded-[24px] p-8 lg:p-10 text-white">
            <h3 className="font-display font-black text-xl lg:text-2xl mb-2">
              Want results like these for your business?
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted max-w-lg mx-auto mb-6">
              Let's talk about your goals and build a strategy that fits.
            </p>
            <button
              onClick={() => handleNavClick('contact-page')}
              className="bg-brand-cta hover:bg-brand-ctaHover text-white font-bold text-sm rounded-full px-8 py-3 transition-colors"
            >
              Get Consultation →
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};