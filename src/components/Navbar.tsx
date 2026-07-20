import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '../constants/mockData';

interface NavbarProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  servicesDropdownOpen: boolean;
  setServicesDropdownOpen: (open: boolean) => void;
  handleNavClick: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  servicesDropdownOpen,
  setServicesDropdownOpen,
  handleNavClick
}) => {
  const location = useLocation();
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileServicesOpen(false);
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white border-b border-brand-border shadow-nav z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-24 h-12 flex-shrink-0">
              <img src="/logo.png" alt="Ad Wise Tech Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            <div className="relative h-full flex items-center">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-sm font-semibold tracking-wide hover:text-brand-orange transition-colors ${location.pathname === '/' && activeSection === 'home' ? 'text-brand-orange' : 'text-brand-navy'}`}
              >
                Home
              </button>
              {location.pathname === '/' && activeSection === 'home' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary" />
              )}
            </div>

            <div className="relative h-full flex items-center">
              <button
                onClick={() => handleNavClick('why-choose-us')}
                className={`text-sm font-semibold tracking-wide hover:text-brand-orange transition-colors ${location.pathname === '/about' ? 'text-brand-orange' : 'text-brand-navy'}`}
              >
                About Us
              </button>
              {location.pathname === '/about' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary" />
              )}
            </div>

            {/* Services Dropdown Trigger */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('services-section')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  } else {
                    handleNavClick('services');
                  }
                }}
                className={`flex items-center gap-1 text-sm font-semibold tracking-wide hover:text-brand-orange transition-colors ${location.pathname === '/services' ? 'text-brand-orange' : 'text-brand-navy'}`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {location.pathname === '/services' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary" />
              )}

              {/* Dropdown Menu */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-[70%] mt-2 w-64 bg-white rounded-xl shadow-xl border border-brand-border py-3 z-50"
                  >
                    {services.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleNavClick(s.id)}
                        className="w-full text-left px-5 py-2.5 text-xs font-medium text-brand-secondary hover:bg-brand-light hover:text-brand-orange transition-all duration-200 block"
                      >
                        {s.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative h-full flex items-center">
              <button
                onClick={() => handleNavClick('portfolio')}
                className={`text-sm font-semibold tracking-wide hover:text-brand-orange transition-colors ${location.pathname === '/' && activeSection === 'portfolio' ? 'text-brand-orange' : 'text-brand-navy'}`}
              >
                Portfolio
              </button>
              {location.pathname === '/' && activeSection === 'portfolio' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary" />
              )}
            </div>

            <div className="relative h-full flex items-center">
              <button
                onClick={() => handleNavClick('blog')}
                className={`text-sm font-semibold tracking-wide hover:text-brand-orange transition-colors ${location.pathname === '/blog' ? 'text-brand-orange' : 'text-brand-navy'}`}
              >
                Blog
              </button>
              {location.pathname === '/blog' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary" />
              )}
            </div>

            <div className="relative h-full flex items-center">
              <button
                onClick={() => handleNavClick('careers-page')}
                className={`text-sm font-semibold tracking-wide hover:text-brand-orange transition-colors ${location.pathname === '/careers' ? 'text-brand-orange' : 'text-brand-navy'}`}
              >
                Careers
              </button>
              {location.pathname === '/careers' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary" />
              )}
            </div>

            <div className="relative h-full flex items-center">
              <button
                onClick={() => handleNavClick('contact-page')}
                className={`text-sm font-semibold tracking-wide hover:text-brand-orange transition-colors ${location.pathname === '/contact' ? 'text-brand-orange' : 'text-brand-navy'}`}
              >
                Contact Us
              </button>
              {location.pathname === '/contact' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary" />
              )}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavClick('contact-page')}
              className="bg-brand-cta hover:bg-brand-ctaHover text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-md flex items-center gap-1.5 transition-colors"
            >
              Get Free Consultation <span className="font-light">↗</span>
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-navy hover:text-brand-orange focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-brand-border overflow-hidden shadow-inner"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left py-2 font-semibold transition-colors block text-sm ${location.pathname === '/' && activeSection === 'home' ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('why-choose-us')}
                className={`w-full text-left py-2 font-semibold transition-colors block text-sm ${location.pathname === '/about' ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
              >
                About Us
              </button>

              {/* Mobile Services Accordion */}
              <div className="border-b border-brand-border pb-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-1.5 text-left font-semibold text-brand-navy text-sm"
                >
                  <span className="uppercase tracking-wider text-[11px] text-brand-orange">
                    Our Services
                  </span>
                  <ChevronDown className={`w-4 h-4 text-brand-orange transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-1 pl-3 mt-1 pb-2">
                        <button
                          onClick={(e) => {
                            setMobileMenuOpen(false);
                            if (location.pathname === '/') {
                              e.preventDefault();
                              document.getElementById('services-section')?.scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'start'
                              });
                            } else {
                              handleNavClick('services');
                            }
                          }}
                          className="text-left py-1 text-xs font-bold text-brand-orange hover:underline transition-all block w-full"
                        >
                          View All Services →
                        </button>
                        {services.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleNavClick(s.id)}
                            className="text-left py-1 text-xs text-brand-secondary hover:text-brand-orange transition-colors block w-full"
                          >
                            {s.title}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => handleNavClick('portfolio')}
                className={`w-full text-left py-2 font-semibold transition-colors block text-sm ${location.pathname === '/' && activeSection === 'portfolio' ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
              >
                Portfolio
              </button>
              <button
                onClick={() => handleNavClick('blog')}
                className={`w-full text-left py-2 font-semibold transition-colors block text-sm ${location.pathname === '/blog' ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
              >
                Blog
              </button>
              <button
                onClick={() => handleNavClick('careers-page')}
                className={`w-full text-left py-2 font-semibold transition-colors block text-sm ${location.pathname === '/careers' ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
              >
                Careers
              </button>
              <button
                onClick={() => handleNavClick('contact-page')}
                className={`w-full text-left py-2 font-semibold transition-colors block text-sm ${location.pathname === '/contact' ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
              >
                Contact Us
              </button>

              <div className="pt-4 border-t border-brand-border">
                <button
                  onClick={() => handleNavClick('contact-page')}
                  className="w-full text-center bg-brand-orange hover:bg-brand-ctaHover text-white py-3 rounded-full font-bold text-sm shadow-md transition-colors"
                >
                  Get Free Consultation ↗
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};