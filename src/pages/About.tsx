import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { VisionMission } from '../components/VisionMission';

interface AboutProps {
  handleNavClick: (id: string) => void;
}

interface CountUpStatProps {
  target: number;
  suffix?: string;
  decimals?: number;
  label: string;
  duration?: number;
}

const CountUpStat: React.FC<CountUpStatProps> = ({ target, suffix = '', decimals = 0, label, duration = 1.4 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration]);

  return (
    <div className="flex flex-col items-center sm:items-start">
      <span
        ref={ref}
        className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent font-bold text-xl"
      >
        {value.toFixed(decimals)}{suffix}
      </span>
      <span className="text-[11px] text-brand-secondary font-medium mt-1">{label}</span>
    </div>
  );
};

export const About: React.FC<AboutProps> = ({}) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#our-team' || location.hash === '#vision-mission') {
      const timer = setTimeout(() => {
        const targetId = location.hash === '#vision-mission' ? 'vision-mission' : 'our-team';
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="transition-all duration-300">
      {/* About Hero */}
      <section className="relative bg-white pt-14 pb-10 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Column — Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent font-bold text-xs uppercase tracking-widest block mb-3">
                ABOUT US
              </span>
              <h1 className="font-display font-black text-3xl lg:text-5xl text-brand-navy tracking-tight leading-tight">
                Bhopal's Leading <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Growth Agency</span>
              </h1>
              <p className="text-brand-secondary text-sm sm:text-base leading-relaxed max-w-xl mt-4 mb-8">
                We partner with ambitious companies to build scalable marketing engines that drive transparent, measurable ROI.
              </p>

              {/* Trust stat strip — animated count-up */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-3 border-t border-brand-border pt-6 w-full max-w-xl">
                <CountUpStat target={100} suffix="+" label="Happy Clients" />
                <div className="h-8 w-px bg-brand-border" />
                <CountUpStat target={7} label="Core Services" />
                <div className="h-8 w-px bg-brand-border" />
                <CountUpStat target={4.9} decimals={1} suffix="/5" label="Client Rating" />
              </div>
            </motion.div>

            {/* Right Column — Office Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-brand-border" style={{ aspectRatio: '16/11' }}>
                <img
                  src="/about-office.webp"
                  alt="Ad Wise Tech office"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Vision & Mission (Purpose, Cards, Commitment, Values) Section */}
      <VisionMission />
    </div>
  );
};