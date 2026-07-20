import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import { SiMeta } from 'react-icons/si';

// Slide 1: Dashboard Mockup
function HeroSlideOne() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 relative">
      <div className="w-full max-w-[400px] bg-brand-dark rounded-2xl shadow-2xl p-5 border border-slate-800 relative">
        {/* Titlebar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-[9px] font-mono text-slate-500 tracking-wider">adwisetech.com/dashboard</span>
          <div className="w-6" />
        </div>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          <div className="bg-slate-900/60 border border-slate-800/50 p-2 rounded-lg text-left">
            <span className="text-[8px] text-slate-500 block leading-none">Total Revenue</span>
            <span className="text-xs font-bold text-white block mt-1">$24,850</span>
            <span className="text-[7px] text-emerald-400 font-semibold mt-0.5 block">▲ +34.6%</span>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/50 p-2 rounded-lg text-left">
            <span className="text-[8px] text-slate-500 block leading-none">Total Leads</span>
            <span className="text-xs font-bold text-white block mt-1">1,245</span>
            <span className="text-[7px] text-emerald-400 font-semibold mt-0.5 block">▲ +48.2%</span>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/50 p-2 rounded-lg text-left">
            <span className="text-[8px] text-slate-500 block leading-none">Conv. Rate</span>
            <span className="text-xs font-bold text-white block mt-1">4.8%</span>
            <span className="text-[7px] text-emerald-400 font-semibold mt-0.5 block">▲ +12.4%</span>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-slate-900/60 border border-slate-800/50 p-3 rounded-lg text-left">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[9px] font-bold text-white">Monthly Lead Performance</span>
            <span className="text-[7px] text-slate-500">Jan - Jun 2025</span>
          </div>
          <svg className="w-full h-20" viewBox="0 0 300 100">
            <defs>
              <linearGradient id="chart-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF4B2B" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#FF4B2B" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="20" x2="300" y2="20" stroke="#1e293b" strokeDasharray="3,3" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="300" y2="50" stroke="#1e293b" strokeDasharray="3,3" strokeWidth="0.5" />
            <line x1="0" y1="80" x2="300" y2="80" stroke="#1e293b" strokeDasharray="3,3" strokeWidth="0.5" />
            <path d="M 10 90 Q 50 70 80 80 T 150 40 T 220 50 T 290 10 L 290 90 Z" fill="url(#chart-grad-1)" />
            <path d="M 10 90 Q 50 70 80 80 T 150 40 T 220 50 T 290 10" fill="none" stroke="#FF4B2B" strokeWidth="2" strokeLinecap="round" />
            <circle cx="150" cy="40" r="3.5" fill="#FF416C" stroke="#fff" strokeWidth="1" />
            <circle cx="290" cy="10" r="3.5" fill="#FF4B2B" stroke="#fff" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Floating Meta Ads Card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        className="absolute top-[30px] right-[20px] bg-white rounded-xl shadow-lg border border-gray-100 p-2.5 flex items-center gap-2.5 z-20 max-w-[150px]"
      >
        <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-base font-bold flex-shrink-0">
          <SiMeta />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide leading-none">Meta Ads</span>
          <span className="text-[10px] font-black text-brand-dark mt-1">+36% Conv.</span>
        </div>
      </motion.div>

      {/* Floating Google Ads Card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-[20px] top-[140px] bg-white rounded-xl shadow-lg border border-gray-100 p-2.5 flex items-center gap-2.5 z-20 max-w-[150px]"
      >
        <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-sm font-bold flex-shrink-0">
          <FaGoogle />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide leading-none">Google Ads</span>
          <span className="text-[10px] font-black text-brand-dark mt-1">+48% Conv.</span>
        </div>
      </motion.div>

      {/* Floating Leads Card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[30px] bottom-[50px] bg-white rounded-xl shadow-lg border border-gray-100 p-2.5 flex items-center gap-2.5 z-20 max-w-[170px]"
      >
        <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center text-brand-orange flex-shrink-0">
          <Target className="w-3.5 h-3.5" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide leading-none">Campaign Leads</span>
          <span className="text-[10px] font-black text-brand-dark mt-1">1,245 Leads</span>
        </div>
      </motion.div>
    </div>
  );
}

// Slide 2: Social Media Visual
function HeroSlideTwo() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 relative bg-pink-55/15 rounded-2xl" style={{ backgroundColor: 'rgba(253, 242, 248, 0.3)' }}>
      {/* Tall Phone Mockup */}
      <div className="w-[190px] h-[340px] bg-brand-dark rounded-[32px] shadow-2xl p-2 border-4 border-slate-800 relative flex flex-col">
        {/* Screen Notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-800 rounded-full z-20" />

        <div className="bg-white h-full w-full rounded-[24px] overflow-hidden flex flex-col text-left">
          {/* Feed Header */}
          <div className="flex items-center gap-2 px-3 py-1.5 border-b border-gray-105 mt-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-[7px] font-bold text-slate-800 leading-none">adwisetech</span>
              <span className="text-[5px] text-gray-400 leading-none mt-0.5">Sponsored</span>
            </div>
          </div>

          {/* Post Image */}
          <div className="h-36 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 relative flex items-center justify-center">
            <span className="text-white text-[8px] font-bold tracking-widest uppercase bg-black/25 px-2.5 py-1 rounded-full backdrop-blur-sm">
              GROW YOUR BRAND
            </span>
          </div>

          {/* Engagement Icons */}
          <div className="px-3 py-1.5 border-b border-gray-105 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="text-[7px]">❤️</span>
              <span className="text-[7px]">💬</span>
              <span className="text-[7px]">✉️</span>
            </div>
            <span className="bg-brand-orange text-white text-[5px] px-1.5 py-0.5 rounded font-bold uppercase">Learn More</span>
          </div>

          {/* Caption */}
          <div className="px-3 py-1.5">
            <p className="text-[7px] text-slate-600 leading-tight">
              <span className="font-bold text-slate-800">adwisetech</span> भोपाल's leading SMM agency. Grow followers organically and scale conversion metrics.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Card 1: Followers */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        className="absolute top-[40px] right-[20px] bg-white rounded-xl shadow-lg border border-gray-100 p-3 flex items-center gap-2 z-20 max-w-[170px]"
      >
        <div className="w-7 h-7 rounded-full bg-pink-55 flex items-center justify-center text-pink-500 text-sm flex-shrink-0">
          👥
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[8px] font-semibold text-gray-400 uppercase tracking-wide leading-none">Followers</span>
          <span className="text-[10px] font-black text-brand-dark mt-1">+50% in 6m</span>
        </div>
      </motion.div>

      {/* Floating Card 2: Engagement */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-[15px] bottom-[60px] bg-white rounded-xl shadow-lg border border-gray-100 p-3 flex items-center gap-2 z-20 max-w-[170px]"
      >
        <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-sm flex-shrink-0">
          ❤️
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[8px] font-semibold text-gray-400 uppercase tracking-wide leading-none">Engagement</span>
          <span className="text-[10px] font-black text-brand-dark mt-1">+70% Growth</span>
        </div>
      </motion.div>
    </div>
  );
}

// Slide 3: SEO/Analytics Visual
function HeroSlideThree() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 relative bg-purple-55/15 rounded-2xl" style={{ backgroundColor: 'rgba(243, 232, 255, 0.3)' }}>
      {/* Browser mockup */}
      <div className="w-full max-w-[400px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col relative">
        {/* Header bar */}
        <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex items-center gap-2.5">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="bg-white border border-gray-200 rounded px-2.5 py-0.5 flex-grow text-left text-[8px] text-gray-400 flex items-center gap-1">
            <span className="text-emerald-500 text-[6px]">🔒</span> google.com/search?q=best+seo+bhopal
          </div>
        </div>

        {/* Search Results */}
        <div className="p-4 text-left flex flex-col gap-3 bg-white">
          <div className="flex items-center border-b border-gray-100 pb-2">
            <span className="text-[9px] font-black tracking-wider text-slate-805 uppercase">Google</span>
            <div className="bg-gray-100 border border-gray-200 rounded-full px-2 py-0.5 text-[7px] text-slate-500 ml-2">
              best digital marketing agency bhopal
            </div>
          </div>

          {/* #1 Organic Rank */}
          <div className="flex flex-col">
            <span className="text-[6px] text-slate-400 leading-none">https://www.adwisetech.com</span>
            <span className="text-[10px] font-bold text-blue-800 hover:underline leading-tight mt-0.5">
              Ad Wise Tech — #1 Digital Marketing Agency in Bhopal
            </span>
            <p className="text-[8px] text-slate-500 leading-snug mt-1">
              Bhopal's top result-oriented marketing partner. Organic SEO campaigns that drive traffic, page ranking authority, and high conversions.
            </p>
          </div>

          {/* Competitor Result */}
          <div className="flex flex-col opacity-45 mt-1">
            <span className="text-[6px] text-slate-400 leading-none">https://www.competitoragency.com</span>
            <span className="text-[10px] font-bold text-blue-800 leading-tight mt-0.5">
              Digital Marketing Services - Bhopal agency
            </span>
            <p className="text-[8px] text-slate-500 leading-snug mt-1">
              We offer local marketing agency offering online promotion services, website setup, and graphic banner designs.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Card 1: Traffic */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        className="absolute top-[30px] right-[15px] bg-white rounded-xl shadow-lg border border-gray-100 p-2.5 flex items-center gap-2 z-20 max-w-[160px]"
      >
        <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 text-sm flex-shrink-0">
          📈
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[8px] font-semibold text-gray-400 uppercase tracking-wide leading-none">SEO Traffic</span>
          <span className="text-[10px] font-black text-brand-dark mt-1">+120% Traffic</span>
        </div>
      </motion.div>

      {/* Floating Card 2: Rankings */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-[15px] bottom-[50px] bg-white rounded-xl shadow-lg border border-gray-100 p-2.5 flex items-center gap-2 z-20 max-w-[160px]"
      >
        <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 text-sm flex-shrink-0">
          🔍
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[8px] font-semibold text-gray-400 uppercase tracking-wide leading-none">Rankings</span>
          <span className="text-[10px] font-black text-brand-dark mt-1">Page 1 Rank</span>
        </div>
      </motion.div>
    </div>
  );
}

// Slide 4: Results/ROI Visual
function HeroSlideFour() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 relative bg-blue-55/15 rounded-2xl" style={{ backgroundColor: 'rgba(239, 246, 255, 0.3)' }}>
      {/* SVG Bar Chart Card */}
      <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 flex flex-col relative text-left">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider block">Return on Investment</span>
            <h4 className="font-bold text-[11px] text-brand-dark mt-0.5">Campaign Cost efficiency (ROI)</h4>
          </div>
          <span className="text-[8px] text-emerald-500 font-bold bg-emerald-50 px-2 py-0.5 rounded">▲ Live ROI</span>
        </div>

        {/* Upward Bars */}
        <div className="flex items-end justify-between gap-3 h-28 pt-2 border-b border-gray-100 relative">
          <div className="absolute inset-x-0 top-1/4 border-b border-gray-100 border-dashed" />
          <div className="absolute inset-x-0 top-2/4 border-b border-gray-100 border-dashed" />
          <div className="absolute inset-x-0 top-3/4 border-b border-gray-100 border-dashed" />

          {/* Bar 1 */}
          <div className="flex flex-col items-center flex-grow z-10">
            <div className="w-full max-w-[32px] bg-gradient-to-t from-gray-200 to-gray-300 h-8 rounded-t" />
            <span className="text-[7px] text-gray-400 mt-1.5 font-semibold">Month 1</span>
          </div>

          {/* Bar 2 */}
          <div className="flex flex-col items-center flex-grow z-10">
            <div className="w-full max-w-[32px] bg-gradient-to-t from-orange-200 to-orange-300 h-14 rounded-t" />
            <span className="text-[7px] text-gray-400 mt-1.5 font-semibold">Month 2</span>
          </div>

          {/* Bar 3 */}
          <div className="flex flex-col items-center flex-grow z-10">
            <div className="w-full max-w-[32px] bg-gradient-to-t from-pink-400 to-orange-500 h-20 rounded-t" />
            <span className="text-[7px] text-gray-400 mt-1.5 font-semibold">Month 3</span>
          </div>

          {/* Bar 4 */}
          <div className="flex flex-col items-center flex-grow z-10">
            <div className="w-full max-w-[32px] bg-gradient-to-t from-brand-orange to-brand-pink h-26 rounded-t animate-pulse" />
            <span className="text-[7px] text-gray-400 mt-1.5 font-semibold">Month 4</span>
          </div>
        </div>
      </div>

      {/* Floating Card 1: Leads */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        className="absolute top-[30px] right-[15px] bg-white rounded-xl shadow-lg border border-gray-100 p-2.5 flex items-center gap-2 z-20 max-w-[160px]"
      >
        <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center text-brand-orange text-sm flex-shrink-0">
          💰
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[8px] font-semibold text-gray-400 uppercase tracking-wide leading-none">Total leads</span>
          <span className="text-[10px] font-black text-brand-dark mt-1">150% Leads</span>
        </div>
      </motion.div>

      {/* Floating Card 2: Cost Per Lead */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-[15px] bottom-[50px] bg-white rounded-xl shadow-lg border border-gray-100 p-2.5 flex items-center gap-2 z-20 max-w-[160px]"
      >
        <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 text-sm flex-shrink-0">
          🎯
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[8px] font-semibold text-gray-400 uppercase tracking-wide leading-none">Acquisition</span>
          <span className="text-[10px] font-black text-brand-dark mt-1">35% Lower CPL</span>
        </div>
      </motion.div>
    </div>
  );
}

export const HeroCarousel: React.FC = () => {
  const [heroSlide, setHeroSlide] = useState(0);
  const [isHoveredHero, setIsHoveredHero] = useState(false);

  useEffect(() => {
    if (isHoveredHero) return;
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHoveredHero]);

  return (
    <div
      className="hidden lg:block lg:col-span-6 relative overflow-hidden min-h-[500px] w-full"
      onMouseEnter={() => setIsHoveredHero(true)}
      onMouseLeave={() => setIsHoveredHero(false)}
    >
      <AnimatePresence mode="wait">
        {heroSlide === 0 && (
          <motion.div
            key="slide1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <HeroSlideOne />
          </motion.div>
        )}
        {heroSlide === 1 && (
          <motion.div
            key="slide2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <HeroSlideTwo />
          </motion.div>
        )}
        {heroSlide === 2 && (
          <motion.div
            key="slide3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <HeroSlideThree />
          </motion.div>
        )}
        {heroSlide === 3 && (
          <motion.div
            key="slide4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <HeroSlideFour />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
