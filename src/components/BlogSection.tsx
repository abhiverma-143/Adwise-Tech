import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Check, Loader2 } from 'lucide-react';
import { blogPosts } from '../constants/mockData';

interface BlogSectionProps {
  onNavClick: (id: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingNewsletter(true);
    setTimeout(() => {
      setIsSubmittingNewsletter(false);
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="blog" className="bg-white py-16 lg:py-20 relative z-10 border-b border-brand-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 px-4">
          <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent font-bold text-xs uppercase tracking-widest block mb-3">
            Knowledge Hub
          </span>
          <h2 className="font-display font-black text-brand-navy text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Latest Insights & Marketing Strategies
          </h2>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-6 px-4 w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles by title or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-brand-border focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 text-sm outline-none transition-all bg-white"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div 
          className="max-w-4xl mx-auto mb-8 overflow-x-auto whitespace-nowrap scrollbar-none pb-2 -mx-4 px-4 lg:mx-auto lg:px-0 flex justify-start lg:justify-center gap-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {['All', 'PPC Advertising', 'SEO', 'Social Media', 'Website Development', 'Performance Marketing', 'Graphic Designing'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-bold rounded-full px-4 py-2 transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-brand-cta text-white shadow-md'
                  : 'bg-[#F1F5F9] text-[#64748B] hover:text-brand-cta'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter and Stagger Posts */}
        {(() => {
          const filteredPosts = blogPosts.filter((post) => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  post.desc.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
            return matchesSearch && matchesCat;
          });

          const featuredPost = filteredPosts[0];
          const gridPosts = filteredPosts.slice(1);

          return (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-7xl mx-auto mb-10 px-4"
                >
                  <div className="bg-white border border-brand-border rounded-[24px] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
                    {/* Image area */}
                    <div className="col-span-1 lg:col-span-6 h-56 lg:h-full relative overflow-hidden">
                      <img
                        src={featuredPost.img}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-sm">
                        Featured Post
                      </span>
                    </div>

                    {/* Content area */}
                    <div className="col-span-1 lg:col-span-6 p-5 lg:p-8 text-left flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider mb-3">
                          <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">{featuredPost.category}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400">{featuredPost.date}</span>
                        </div>

                        <h3 
                          onClick={() => onNavClick('contact-page')}
                          className="font-display font-black text-brand-navy text-lg sm:text-xl lg:text-2xl leading-snug mb-3 hover:text-brand-cta cursor-pointer transition-colors"
                        >
                          {featuredPost.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed mb-6">
                          {featuredPost.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-brand-border pt-4 mt-auto">
                        <span className="text-xs text-brand-secondary font-semibold uppercase">{featuredPost.readTime}</span>
                        <button
                          onClick={() => onNavClick('contact-page')}
                          className="text-xs font-semibold text-brand-cta hover:underline transition-colors flex items-center gap-1"
                        >
                          Read Post <span className="font-light">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Blog Grid */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gridPosts.map((post, idx) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="bg-white border border-brand-border rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brand-orange transition-all duration-300 flex flex-col justify-between h-full group text-left"
                    >
                      <div>
                        {/* TOP image area */}
                        <div className="h-[220px] relative overflow-hidden">
                          <img
                            src={post.img}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>

                        {/* CONTENT area */}
                        <div className="p-4 lg:p-5">
                          <div className="flex flex-wrap gap-1.5 items-center text-[11px] mb-2.5">
                            <span className="font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent uppercase">{post.category}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-400">{post.date}</span>
                          </div>

                          <h3 
                            onClick={() => onNavClick('contact-page')}
                            className="font-bold text-sm text-brand-navy mb-2 line-clamp-2 hover:text-brand-cta cursor-pointer transition-colors"
                          >
                            {post.title}
                          </h3>
                          
                          <p className="text-xs text-brand-secondary leading-relaxed line-clamp-2 lg:line-clamp-3 mb-4">
                            {post.desc}
                          </p>
                        </div>
                      </div>

                      {/* Bottom row */}
                      <div className="p-4 lg:p-5 pt-0 flex justify-between items-center border-t border-brand-border mt-auto">
                        <span className="text-xs text-brand-secondary uppercase font-semibold">{post.readTime}</span>
                        <button
                          onClick={() => onNavClick('contact-page')}
                          className="text-xs font-bold text-brand-cta flex items-center gap-1 hover:gap-1.5 transition-all"
                        >
                          Read Post <span className="font-light">→</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-10 bg-white border border-brand-border rounded-[20px]">
                    <p className="text-brand-secondary text-sm">No articles found matching your search.</p>
                  </div>
                )}
              </div>
            </>
          );
        })()}

        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto px-4 mt-16 text-center">
          <div className="bg-brand-navy rounded-[24px] p-6 lg:p-10 text-white relative overflow-hidden border border-white/5 shadow-2xl">
            
            <h3 className="font-display font-black text-xl lg:text-2xl mb-2">
              Subscribe to Our Newsletter
            </h3>
            
            <p className="text-xs lg:text-sm text-brand-muted max-w-lg mx-auto mb-6">
              Get the latest digital marketing trends, PPC tactics, and SEO strategies delivered straight to your inbox.
            </p>

            {newsletterSuccess ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-450 rounded-full px-6 py-2.5 inline-flex items-center gap-2 text-xs lg:text-sm font-semibold mx-auto"
              >
                <Check className="w-4 h-4" /> Thank you for subscribing!
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-2 max-w-md mx-auto items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full sm:flex-1 bg-white border border-[#E2E8F0] rounded-full px-5 py-3 text-xs lg:text-sm text-brand-navy placeholder-[#94A3B8] focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubmittingNewsletter}
                  className="w-full sm:w-auto bg-brand-cta hover:bg-brand-ctaHover text-white font-bold text-xs lg:text-sm rounded-full px-6 py-3 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isSubmittingNewsletter ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" /> Subscribing...
                    </>
                  ) : (
                    <>Subscribe Now</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};