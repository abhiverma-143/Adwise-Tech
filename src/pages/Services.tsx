import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Share2, MousePointer, Monitor, Palette, TrendingUp, Megaphone,
  CheckCircle, ChevronDown, ChevronUp
} from 'lucide-react';


interface ServicesProps {
  handleNavClick: (id: string) => void;
}

const servicesData = [
  {
    id: "service-seo",
    number: "01",
    icon: Search,
    image: "/svc_seo.png",
    name: "Search Engine Optimization",
    tagline: "Rank higher. Get found. Grow organically.",
    whatWeOffer: [
      "Comprehensive website SEO audit",
      "Keyword research and strategy",
      "On-page optimization",
      "Technical SEO fixes",
      "Link building",
      "Local SEO for Bhopal",
      "Content optimization",
      "Monthly ranking reports"
    ],
  },
  {
    id: "service-social-media",
    number: "02",
    icon: Share2,
    image: "/svc_smm.png",
    name: "Social Media Marketing",
    tagline: "Build your brand. Grow your audience. Drive leads.",
    whatWeOffer: [
      "Social media strategy",
      "Content creation (posts, reels)",
      "Community management",
      "Facebook & Instagram campaigns",
      "Influencer collaboration",
      "Story and reel production",
      "Analytics and reporting",
      "Brand voice development"
    ],
  },
  {
    id: "service-ppc",
    number: "03",
    icon: MousePointer,
    image: "/svc_ppc.png",
    name: "Pay-Per-Click Advertising",
    tagline: "Get instant visibility. Pay only for results.",
    whatWeOffer: [
      "Google Search Ads",
      "Display & YouTube Ads",
      "Facebook & Instagram Ads",
      "Retargeting campaigns",
      "Landing page optimization",
      "A/B testing",
      "Bid management",
      "Weekly reports"
    ],
  },
  {
    id: "service-website",
    number: "04",
    icon: Monitor,
    image: "/svc_web.png",
    name: "Website Design & Development",
    tagline: "Beautiful websites that convert visitors into customers.",
    whatWeOffer: [
      "Custom website design",
      "WordPress development",
      "React/Next.js websites",
      "E-commerce stores",
      "Landing pages",
      "Speed optimization",
      "Mobile responsive design",
      "Post-launch support"
    ],
  },
  {
    id: "service-graphic",
    number: "05",
    icon: Palette,
    image: "/svc_graphic.png",
    name: "Graphic Design & Branding",
    tagline: "Make your brand impossible to ignore.",
    whatWeOffer: [
      "Logo design",
      "Brand identity",
      "Social media designs",
      "Brochures & flyers",
      "Banner designs",
      "YouTube thumbnails",
      "Presentation design",
      "Ad creatives"
    ],
  },
  {
    id: "service-performance",
    number: "06",
    icon: TrendingUp,
    image: "/svc_performance.png",
    name: "Performance Marketing",
    tagline: "Data-driven growth that scales profitably.",
    whatWeOffer: [
      "Full-funnel strategy",
      "Multi-platform campaigns",
      "Conversion optimization",
      "Marketing automation",
      "Lead nurturing",
      "ROI tracking",
      "Competitive analysis",
      "Scale strategies"
    ],
  },
  {
    id: "service-offline",
    number: "07",
    icon: Megaphone,
    image: "/svc_offline.png",
    name: "Offline Marketing",
    tagline: "Real-world presence that builds real trust.",
    whatWeOffer: [
      "Local event planning",
      "Outdoor advertising",
      "Print media",
      "BTL activities",
      "Brand activations",
      "Corporate gifting",
      "Pamphlet distribution",
      "Local promotions"
    ],
  }
];

export const Services: React.FC<ServicesProps> = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const location = useLocation();

  // Smooth scroll handler
  const scrollToService = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 80; // navbar height
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  const handleToggleFaq = useCallback((index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  }, []);

  // Intersection Observer to track active section for border and dot highlights
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    servicesData.forEach(service => {
      const el = document.getElementById(service.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle incoming hashes (e.g. from homepage redirect)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 80;
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, [location.hash]);

  const faqs = [
    {
      q: "What digital marketing channels do you specialize in?",
      a: "We specialize in Search Engine Optimization (SEO), Paid Advertising (PPC Ads), Social Media Marketing (SMM), and custom Website Design & Development."
    },
    {
      q: "How long does it take to see results from SEO?",
      a: "Typically, SEO campaigns start showing noticeable improvements in rankings and organic traffic within 3 to 6 months, depending on keyword competitiveness and site history."
    },
    {
      q: "Do you handle Meta Ads as well as Google Ads?",
      a: "Yes! We design and manage paid advertising campaigns across Google (Search, Display, Shopping, YouTube) and Meta platforms (Facebook & Instagram) to cover the full conversion funnel."
    },
    {
      q: "How do you measure campaign success and ROI?",
      a: "We set up comprehensive analytics tracking for leads, calls, sales, and conversions. You will receive detailed monthly performance reports detailing exact cost-per-lead and overall ROI."
    },
    {
      q: "Can you redesign our existing website?",
      a: "Absolutely. We build responsive, lightning-fast, and SEO-optimized websites designed specifically to turn casual visitors into paying customers."
    }
  ];

  return (
    <div className="transition-all duration-300 relative">
      
      {/* STICKY SIDEBAR NAV (hidden on mobile) */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4.5 z-40 bg-white/40 backdrop-blur-sm p-3 rounded-full border border-gray-100 shadow-sm">
        {servicesData.map((service) => {
          const isActive = activeSection === service.id;
          return (
            <div key={service.id} className="relative group flex items-center justify-center">
              {/* Tooltip */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 bg-brand-navy text-white text-xs font-semibold rounded px-2.5 py-1.5 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md whitespace-nowrap z-50">
                {service.name}
              </div>
              {/* Dot */}
              <button
                onClick={() => scrollToService(service.id)}
                aria-label={`Scroll to ${service.name}`}
                className={`rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'w-3 h-3 bg-brand-cta ring-4 ring-brand-cta/20' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-brand-cta'
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* SECTION 1 — HERO */}
      <section className="bg-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-3">
            OUR SERVICES
          </span>
          <h1 className="font-display font-black text-3xl lg:text-4xl text-brand-navy tracking-tight leading-tight">
            Complete Digital <span className="text-brand-primary">Marketing Solutions</span>
          </h1>
          <p className="text-brand-secondary text-sm sm:text-base leading-relaxed max-w-2xl mt-3 mb-0">
            From SEO to Social Media, PPC to Website Development — we offer end-to-end digital marketing services to grow your business in Bhopal and beyond.
          </p>
        </div>
      </section>

      {/* SECTION 3 — DETAILED SERVICES (stacked) */}
      <section className="bg-white">
        {servicesData.map((service, index) => {
          const isActive = activeSection === service.id;
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`py-16 bg-white border-b border-gray-100 last:border-0 transition-shadow duration-500 ${
                isActive ? 'shadow-[inset_4px_0_0_0_theme(colors.brand.primary)]' : ''
              }`}
            >
              <div className="max-w-6xl mx-auto px-6">
                
                {/* Header of Block */}
                <div className={`relative w-full text-left border-l-4 pl-5 mb-8 transition-colors duration-300 ${
                  isActive ? 'border-brand-primary' : 'border-gray-200'
                }`}>
                  <span className="absolute right-0 top-0 text-6xl font-black text-gray-100 select-none">
                    {service.number}
                  </span>
                  <h2 className="font-display font-black text-3xl text-brand-navy">
                    {service.name}
                  </h2>
                  <p className="text-base text-gray-400 mt-2">
                    {service.tagline}
                  </p>
                </div>

                {/* Two Column content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">
                  
                  {/* Left Column (50% / col-span-6) */}
                  <div className={`lg:col-span-6 flex flex-col gap-6 text-left ${isEven ? 'lg:order-last' : 'lg:order-first'}`}>
                    
                    {/* What We Offer */}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">
                        What We Offer
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.whatWeOffer.map((offer, oIdx) => (
                          <li key={oIdx} className="flex items-start gap-2.5">
                            <CheckCircle size={16} className="text-brand-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600 leading-snug">
                              {offer}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Right Column (50% / col-span-6) */}
                  <div className={`lg:col-span-6 w-full flex flex-col gap-5 lg:sticky lg:top-24 ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                    
                    {/* Service Image Illustration */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white flex justify-center items-center">
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        loading="lazy"
                        className="w-full h-auto object-cover max-h-[300px] rounded-2xl"
                      />
                    </div>

                    {/* CTA card */}
                    {/* <div className="bg-brand-navy rounded-2xl p-6 text-white flex items-center justify-between gap-4 flex-wrap">
                      <div>
                        <h4 className="font-bold text-sm mb-0.5 text-white">
                          Ready to get started?
                        </h4>
                        <p className="text-xs text-white/60">
                          Book a free consultation with our team.
                        </p>
                      </div>
                      <button
                        onClick={() => handleNavClick('contact-page')}
                        className="bg-brand-cta hover:bg-brand-ctaHover text-white rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors shadow whitespace-nowrap"
                      >
                        Get Free Consultation &rarr;
                      </button>
                    </div> */}

                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-16 border-t border-gray-100 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-3">
              FAQ
            </span>
            <h2 className="font-display font-black text-brand-navy text-2xl sm:text-3xl leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-brand-primary rounded mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'border-brand-primary bg-[rgba(244,45,106,0.04)]' 
                      : 'border-brand-border bg-white hover:border-brand-primary/40'
                  }`}
                >
                  <button
                    onClick={() => handleToggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-brand-navy font-semibold text-sm sm:text-base transition-colors focus:outline-none"
                  >
                    <span className="pr-4">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-sm text-[#64748B] leading-relaxed border-t border-[#E2E8F0] bg-transparent">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
};