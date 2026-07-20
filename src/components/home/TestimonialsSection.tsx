import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, CheckCircle, TrendingUp, Quote } from 'lucide-react';
import { testimonials } from '../../constants/mockData';

interface TestimonialsSectionProps {
  handleNavClick: (id: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ handleNavClick }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, total]);

  useEffect(() => {
    const cards = document.querySelectorAll('.testimonial-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 120);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const visibleCards = [
    testimonials[current % total],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total]
  ];

  return (
    <section className="bg-white pt-16 pb-20 relative z-10 transition-colors duration-300 border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-3">
            Testimonials
          </span>
          <h2 className="font-display font-black text-brand-navy text-3xl leading-tight">
            What Our Happy <span className="text-brand-primary">Clients Say</span>
          </h2>
        </motion.div>

        {/* Carousel Layout */}
        <div
          className="relative px-12 max-w-6xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev / Next buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-sm border border-brand-border flex items-center justify-center text-brand-navy/60 hover:text-brand-cta hover:border-brand-cta transition-colors duration-300 z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-sm border border-brand-border flex items-center justify-center text-brand-navy/60 hover:text-brand-cta hover:border-brand-cta transition-colors duration-300 z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Desktop Layout (3 at a time) */}
          <div className="hidden md:block overflow-hidden w-full">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-5"
              >
                {visibleCards.map((t, idx) => (
                  <div
                    key={t.id}
                    style={{
                      transitionDelay: sectionVisible ? `${idx * 120}ms` : '0ms'
                    }}
                    className={`testimonial-card group bg-white border border-brand-border rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-left relative overflow-hidden h-[300px] flex flex-col justify-between ${sectionVisible ? 'visible' : ''}`}
                  >
                    {/* Left border accent */}
                    <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-brand-primary" />

                    {/* Quote Icon */}
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-primary/12" />

                    <div>
                      {/* Stars row */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(t.rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              delay: i * 0.05
                            }}
                          >
                            <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                          </motion.span>
                        ))}
                      </div>

                      {/* Quote text */}
                      <p className="text-sm text-brand-secondary leading-relaxed italic mb-5 line-clamp-4">
                        "{t.text}"
                      </p>
                    </div>

                    <div>
                      {/* Metric badge */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center gap-1.5 bg-[rgba(154,63,230,0.08)] text-brand-primary rounded-full px-3 py-1 text-xs font-bold mb-4 w-max cursor-default"
                      >
                        <TrendingUp className="w-3 h-3" />
                        {t.metric}
                      </motion.div>

                      {/* Divider */}
                      <div className="border-t border-brand-border pt-4 flex items-center justify-between">
                        {/* Author row */}
                        <div className="flex items-center gap-3">
                          {/* Avatar (Solid background fill) */}
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className="w-10 h-10 rounded-full bg-brand-primary text-white font-bold text-sm flex items-center justify-center cursor-default"
                          >
                            {t.avatar}
                          </motion.div>
                          <div>
                            <h4 className="font-bold text-sm text-brand-navy leading-none">{t.author}</h4>
                            <span className="text-[10px] text-[#94A3B8] font-medium block mt-1">{t.role}</span>
                          </div>
                        </div>

                        {/* Verified badge */}
                        <CheckCircle className="w-4 h-4 text-brand-primary ml-auto flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Layout (1 at a time) */}
          <div className="md:hidden overflow-hidden w-full">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`testimonial-card group bg-white border border-brand-border rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-left relative overflow-hidden h-[300px] flex flex-col justify-between ${sectionVisible ? 'visible' : ''}`}
              >
                {/* Left border accent */}
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-brand-primary" />

                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-primary/12" />

                <div>
                  {/* Stars row */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          delay: i * 0.05
                        }}
                      >
                        <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                      </motion.span>
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-sm text-brand-secondary leading-relaxed italic mb-5 line-clamp-4">
                    "{testimonials[current].text}"
                  </p>
                </div>

                <div>
                  {/* Metric badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-1.5 bg-[rgba(154,63,230,0.08)] text-brand-primary rounded-full px-3 py-1 text-xs font-bold mb-4 w-max cursor-default"
                  >
                    <TrendingUp className="w-3 h-3" />
                    {testimonials[current].metric}
                  </motion.div>

                  {/* Divider */}
                  <div className="border-t border-brand-border pt-4 flex items-center justify-between">
                    {/* Author row */}
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="w-10 h-10 rounded-full bg-brand-primary text-white font-bold text-sm flex items-center justify-center cursor-default"
                      >
                        {testimonials[current].avatar}
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-sm text-brand-navy leading-none">{testimonials[current].author}</h4>
                        <span className="text-[10px] text-[#94A3B8] font-medium block mt-1">{testimonials[current].role}</span>
                      </div>
                    </div>

                    {/* Verified badge */}
                    <CheckCircle className="w-4 h-4 text-brand-primary ml-auto flex-shrink-0" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots below */}
        <div className="flex justify-center gap-1.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === current
                  ? 'bg-brand-primary w-5 h-2'
                  : 'bg-[#D1D5DB] w-2 h-2'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA below testimonials */}
        <div className="text-center mt-10 flex flex-col items-center gap-4">
          <p className="text-sm text-brand-secondary font-medium">
            Join 50+ businesses growing with Ad Wise Tech
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick('contact-page')}
            className="bg-brand-cta hover:bg-brand-ctaHover text-white font-semibold text-sm px-8 py-3 rounded-full shadow-md transition-colors"
          >
            Get Free Consultation →
          </motion.button>
        </div>

      </div>
    </section>
  );
};