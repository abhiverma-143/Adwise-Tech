import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { whyChooseFeatures } from '../constants/mockData';

interface WhyChooseUsProps {
  onNavClick: (id: string) => void;
}

const stats = [
  { value: 100, suffix: '+', label: 'Happy Clients' },
  { value: 7, suffix: '', label: 'Services Offered' },
  { value: 100, suffix: '%', label: 'Dedicated Team' },
];

// Counts up from 0 to the target value once the stats row scrolls into view
const CountUp: React.FC<{ target: number; active: boolean; duration?: number }> = ({ target, active, duration = 1500 }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out for a natural deceleration near the end
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [active, target, duration]);

  return <>{value}</>;
};

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavClick }) => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-40px' });

  return (
    <section id="why-choose-us" className="bg-white py-20 lg:py-28 relative z-10 overflow-hidden transition-colors duration-300">
      {/* Ambient background accent — echoes the hero's gradient blobs for cohesion */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF7A45 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column (40%, vertically centered) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-left flex flex-col justify-center"
          >
            <span className="text-brand-orange uppercase tracking-widest text-xs font-bold block mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display font-black text-brand-navy text-3xl sm:text-4xl leading-tight mb-5">
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Your Growth Partner,</span><br />Not Just Another Agency
            </h2>
            <div className="w-12 h-1 bg-brand-orange rounded mb-5" />

            <p className="text-brand-secondary text-base leading-relaxed mb-7">
              Partnering with AD Wise Tech means choosing a results-driven digital marketing agency that delivers measurable growth. From SEO, Social Media Marketing, and PPC to Website & Graphic Design and Performance & Offline Marketing, we craft strategies that boost your online visibility, attract the right audience, and drive real business results.
            </p>

            {/* Achievement Stats — numbers count up when scrolled into view */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-8 border-y border-brand-border py-5">
              {stats.map((s, i) => (
                <div key={s.label} className={`flex flex-col ${i > 0 ? 'border-l border-brand-border pl-4' : ''}`}>
                  <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent font-bold text-2xl sm:text-3xl leading-snug mb-1">
                    <CountUp target={s.value} active={statsInView} duration={1200 + i * 200} />
                    {s.suffix}
                  </span>
                  <span className="text-[15px] text-brand-secondary font-medium leading-snug">{s.label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavClick('about-page')}
              className="w-max bg-brand-cta hover:bg-brand-ctaHover text-white rounded-full px-7 py-3.5 font-bold text-sm shadow-md transition-colors"
            >
              Learn More About Us →
            </button>
          </motion.div>

          {/* Right Column — trimmed to the 4 strongest, non-overlapping points */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseFeatures
                .filter(f => ['Data Driven', 'High Quality Leads', 'Business Growth', 'Transparent Reporting'].includes(f.title))
                .map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -5 }}
                    className="group relative bg-white border border-brand-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all duration-300 text-left overflow-hidden"
                  >
                    {/* Accent bar that expands on hover */}
                    <div className="absolute top-0 left-0 h-1 w-8 bg-brand-orange rounded-r-full group-hover:w-full transition-all duration-500" />

                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-orange/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      {f.icon}
                    </div>

                    <span className="font-bold text-base text-brand-navy mb-1.5 block">
                      {f.title}
                    </span>
                    <span className="text-sm text-brand-secondary leading-relaxed">
                      {f.desc}
                    </span>
                  </motion.div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};