import React from 'react';
import { BlogSection } from '../components/BlogSection';

interface BlogProps {
  handleNavClick: (id: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ handleNavClick }) => {
  return (
    <div className="transition-all duration-300">
      {/* Blog Hero */}
      <section className="relative bg-brand-navy py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <span className="text-[#E91E8C] font-bold text-xs uppercase tracking-widest block mb-3">
            BLOG & INSIGHTS
          </span>
          <h1 className="font-display font-black text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            Latest Insights & <span className="text-[#E91E8C]">Marketing Trends</span>
          </h1>
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-xl mt-3 mb-0">
            Stay updated with our latest industry news, expert articles, tips, and strategies on digital marketing, SEO, and paid campaigns.
          </p>
        </div>
      </section>
      
      {/* Blog Section */}
      <BlogSection onNavClick={handleNavClick} />
    </div>
  );
};
