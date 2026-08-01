import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Star,
  CheckCircle,
  Smartphone,
  Search,
  DollarSign,
  Globe,
  Palette,
  TrendingUp,
  Megaphone,
  GraduationCap
} from 'lucide-react';

interface HeroSectionProps {
  handleNavClick: (id: string) => void;
}

const heroSlides = [
  { img: '/hero_slide_1.png', label: 'SEO & Analytics Dashboard', tag: 'Search Engine Optimization' },
  { img: '/hero_slide_2.png', label: 'Social Media Growth Strategy', tag: 'Social Media Marketing' },
  { img: '/smm.jpg', label: 'Certified Digital Marketing Courses', tag: 'Learn & Grow' },
  { img: '/svc_web.png', label: 'Fast, Conversion-Ready Websites', tag: 'Website Development' },
];

const gradientText = "bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent";

const heroHeadings = [
  <>We Rank You <br /><span className={gradientText}>Higher on Google</span></>,
  <>We Grow Your <br /><span className={gradientText}>Social Media</span></>,
  <>We Train You <br /><span className={gradientText}>For Digital Marketing</span></>,
  <>We Build You <br /><span className={gradientText}>High-Converting Websites</span></>,
];

const heroSubtext = [ 
  "Data-driven SEO strategies that put your business on Page 1 of Google — driving consistent, high-quality organic traffic that converts into real customers.",
  "Engaging content and targeted campaigns across Instagram, Facebook & more — growing your audience and turning followers into loyal, paying customers.",
  "Industry-relevant, hands-on digital marketing courses with certification and placement support — helping you build real, job-ready skills.",
  "Fast, responsive, and SEO-friendly websites built to convert visitors into customers — designed and developed to reflect your brand.",
];

const chips = [
  { icon: <Smartphone className="w-3 h-3 text-brand-primary" />, label: "Social Media", id: "smm" },
  { icon: <Search className="w-3 h-3 text-brand-primary" />, label: "SEO", id: "seo" },
  { icon: <DollarSign className="w-3 h-3 text-brand-primary" />, label: "PPC Ads", id: "ppc" },
  { icon: <Globe className="w-3 h-3 text-brand-primary" />, label: "Website Dev", id: "web-dev" },
  { icon: <Palette className="w-3 h-3 text-brand-primary" />, label: "Graphic Design", id: "graphic-design" },
  { icon: <TrendingUp className="w-3 h-3 text-brand-primary" />, label: "Performance", id: "performance-marketing" },
  { icon: <Megaphone className="w-3 h-3 text-brand-primary" />, label: "Offline Marketing", id: "offline-marketing" },
  { icon: <GraduationCap className="w-3 h-3 text-brand-primary" />, label: "Courses", id: "courses" },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ handleNavClick }) => {
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIdx(i => (i + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative bg-white pt-16 pb-24 lg:pb-36 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 dot-grid opacity-75 z-0" />

      {/* Decorative gradient wave — bottom left — fixed so it stays visible across the whole home page scroll */}
      <svg
        className="fixed -bottom-1 left-0 w-full h-[130px] lg:h-[190px] z-0 pointer-events-none opacity-40"
        viewBox="0 0 1512 320"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0,140 C 260,40 520,260 820,180 C 1080,110 1300,240 1512,150 L1512,320 L0,320 Z"
          fill="url(#heroWaveGradient)"
        />
        <defs>
          <linearGradient id="heroWaveGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF7A9C" />
            <stop offset="50%" stopColor="#FFAA7A" />
            <stop offset="100%" stopColor="#C08AF0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Decorative gradient corner — bottom right — fixed for the same reason */}
      <div
        className="fixed -bottom-24 -right-24 w-72 h-72 rounded-full z-0 pointer-events-none opacity-40"
        style={{ background: 'linear-gradient(135deg, #C08AF0 0%, #FF7A9C 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column — order-2 on mobile so image shows first */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-7 text-left flex flex-col justify-center relative z-10"
          >
            {/* Location Badge — static */}
            <div className="bg-transparent border-[1.5px] border-brand-primary rounded-full px-4 py-1.5 inline-flex items-center gap-2 w-max mb-3">
              <MapPin className="w-3 h-3 text-brand-primary" />
              <span className="text-[11px] font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent uppercase tracking-wider">
                Digital Marketing Agency, Bhopal
              </span>
            </div>

            {/* Dynamic Heading — changes with slide */}
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlideIdx}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <h1 className="font-display font-black text-4xl lg:text-5xl text-brand-navy tracking-tight leading-[1.15] mb-4">
                  {heroHeadings[heroSlideIdx]}
                </h1>
                <p className="text-base text-brand-secondary leading-relaxed max-w-lg mb-6 line-clamp-2">
                  {heroSubtext[heroSlideIdx]}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Services Chips Row — now clickable, navigates to the matching service */}
            <div className="flex flex-wrap gap-2 mb-8">
              {chips.map((chip, idx) => (
                <motion.button
                  key={idx}
                  type="button"
                  onClick={() => handleNavClick(chip.id)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.3, delay: idx * 0.05, ease: "easeOut" }}
                  className="bg-brand-light border border-brand-border rounded-full px-2.5 py-1 lg:px-3 lg:py-1.5 text-[11px] lg:text-xs font-medium text-brand-secondary flex items-center gap-1.5 cursor-pointer hover:border-brand-primary hover:text-brand-primary transition-colors"
                >
                  {chip.icon}
                  <span>{chip.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick('contact-page')}
                className="w-full sm:w-auto text-center justify-center flex items-center bg-brand-cta hover:bg-brand-ctaHover text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md transition-colors"
              >
                Get Consultation →
              </motion.button>
              <button
                onClick={() => handleNavClick('services')}
                className="w-full sm:w-auto text-center justify-center bg-white border-2 border-brand-navy text-brand-navy font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-brand-navy hover:text-white transition-all"
              >
                View Our Services
              </button>
            </div>

            {/* Social proof bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start items-center gap-y-3 gap-x-4 lg:gap-4 border-t border-brand-border pt-4 mt-4 lg:pt-6 lg:mt-6"
            >
              {/* Avatar Stack */}
              <div className="flex -space-x-1.5 lg:-space-x-2 overflow-hidden">
                <div className="inline-block h-7 w-7 lg:h-8 lg:w-8 rounded-full ring-2 ring-white bg-brand-primary flex items-center justify-center text-[9px] lg:text-[10px] font-bold text-white uppercase shadow-sm">RV</div>
                <div className="inline-block h-7 w-7 lg:h-8 lg:w-8 rounded-full ring-2 ring-white bg-brand-navy flex items-center justify-center text-[9px] lg:text-[10px] font-bold text-white uppercase shadow-sm">SK</div>
                <div className="inline-block h-7 w-7 lg:h-8 lg:w-8 rounded-full ring-2 ring-white bg-brand-primary flex items-center justify-center text-[9px] lg:text-[10px] font-bold text-white uppercase shadow-sm">AS</div>
                <div className="inline-block h-7 w-7 lg:h-8 lg:w-8 rounded-full ring-2 ring-white bg-brand-navy flex items-center justify-center text-[9px] lg:text-[10px] font-bold text-white uppercase shadow-sm">DK</div>
              </div>

              {/* Stars and Rating */}
              <div className="flex flex-col text-left items-center lg:items-start">
                <div className="flex gap-0.5 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 lg:w-3.5 lg:h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-xs lg:text-sm text-brand-navy mt-0.5">4.9/5 Rating</span>
              </div>

              <div className="hidden sm:block h-6 w-px bg-brand-border" />
              <span className="text-xs lg:text-sm text-brand-secondary font-medium">50+ Happy Clients</span>
              <div className="hidden sm:block h-6 w-px bg-brand-border" />
              <div className="flex items-center gap-1.5 text-xs lg:text-sm text-brand-secondary font-medium">
                <span>Bhopal's Trusted Agency</span>
                <CheckCircle className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-brand-primary flex-shrink-0" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Image Carousel — now visible on mobile too, order-1 so it shows first */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
            className="order-1 lg:order-2 flex lg:col-span-5 flex-col gap-4"
          >
            {/* Image slide area */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-brand-border bg-[#F8F9FC]" style={{ aspectRatio: '4/3' }}>
              <AnimatePresence mode="wait">
                {heroSlides.map((slide, i) =>
                  i === heroSlideIdx ? (
                    <motion.div
                      key={slide.img}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -60 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <img
                        src={slide.img}
                        alt={slide.label}
                        className="w-full h-full object-cover"
                      />
                      {/* Label overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/80 to-transparent px-5 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent block mb-0.5">{slide.tag}</span>
                        <p className="text-white font-bold text-sm leading-tight">{slide.label}</p>
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 justify-center">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroSlideIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === heroSlideIdx ? 'w-7 bg-brand-primary' : 'w-1.5 bg-brand-border'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};