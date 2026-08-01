import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Megaphone, Monitor, Palette, TrendingUp, MapPin, MousePointer,
  CheckCircle, ChevronDown, ArrowRight, Shield, Target, Award, Sparkles, Heart
} from 'lucide-react';

interface ServicesCardsProps {
  onNavClick?: (id: string) => void;
  limit?: number;
  isHomePage?: boolean;
}

export const servicesList = [
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    desc: "Technical SEO, On & Off Page SEO, content optimization and link-building to improve organic visibility.",
    bullets: [
      "Technical SEO & website audits",
      "On-page optimization",
      "Link building and authority development",
      "Optimized content that ranks"
    ],
    url: "/services/seo",
    heroStats: ["+120% Traffic", "Page 1 Rankings"],
    whatWeOffer: [
      "Comprehensive website SEO audit",
      "Keyword research and strategy",
      "On-page optimization (meta tags, headings, content)",
      "Technical SEO fixes (speed, mobile, schema)",
      "Link building and authority development",
      "Local SEO for Bhopal businesses",
      "Monthly ranking reports"
    ],
    whyChooseUs: [
      { icon: Award, title: "White-Hat Techniques", desc: "100% compliant strategies that build long-term value." },
      { icon: Target, title: "Lead-Focused", desc: "We focus on driving active conversions, not just ranking metrics." },
      { icon: Shield, title: "Dedicated Experts", desc: "A personal strategist handles and monitors your account." }
    ],
    faqs: [
      { q: "What is your SEO strategy for local Bhopal businesses?", a: "We optimize your Google Business Profile, target localized search intent keywords, clean up citation directory matches, and gather positive local reviews to boost regional map pack results." },
      { q: "How long does it take to see results from SEO?", a: "Generally, SEO requires 3 to 6 months of steady optimization to show significant improvements. However, local search rankings can sometimes improve faster depending on your competition levels." },
      { q: "Do you provide transparent reports?", a: "Yes, you will receive structured monthly reports tracking your organic search traffic, keyword ranking changes, and direct conversions." }
    ],
    svg: (
      <svg className="w-24 h-24 text-brand-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="15" y="15" width="70" height="50" rx="4" />
        <circle cx="35" cy="40" r="12" />
        <line x1="43" y1="48" x2="60" y2="65" />
        <path d="M 65,30 L 75,30 M 65,40 L 75,40 M 65,50 L 75,50" />
      </svg>
    )
  },
  {
    id: "smm",
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "Social strategies, manage communities and run performance driven ad campaigns on major platforms.",
    bullets: [
      "Build brand awareness",
      "Drive engagement and followers",
      "Generate leads or conversions",
      "Organic content + paid reach"
    ],
    url: "/services/social-media",
    heroStats: ["+70% Engagement", "50% More Followers"],
    whatWeOffer: [
      "Social media strategy and planning",
      "Content creation (posts, reels, stories)",
      "Community management",
      "Facebook & Instagram paid campaigns",
      "Influencer collaboration",
      "Analytics and monthly reports",
      "Brand voice development"
    ],
    whyChooseUs: [
      { icon: Sparkles, title: "Creative Focus", desc: "Stunning graphics and engaging reel copy." },
      { icon: Target, title: "Targeted Funnels", desc: "Reach the exact demographic buying your products." },
      { icon: Award, title: "Quick Responses", desc: "Never leave potential leads waiting in the DMs." }
    ],
    faqs: [
      { q: "Which social media platforms do you recommend?", a: "We primarily optimize Meta (Facebook & Instagram) and LinkedIn depending on whether your business is B2C or B2B. We also coordinate YouTube and Google Business postings." },
      { q: "How often will you post content?", a: "Depending on your specific custom plan, we typically publish 3 to 5 tailored posts per week, along with active story updates and video reels." },
      { q: "Do you design the graphics and write copies?", a: "Yes, our creative graphic designer and copywriter manage all design assets, post text copies, and custom video templates from scratch." }
    ],
    svg: (
      <svg className="w-24 h-24 text-brand-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="25" y="15" width="50" height="70" rx="8" />
        <circle cx="50" cy="73" r="4" />
        <path d="M 40,40 C 40,30 60,30 60,40 C 60,50 40,45 40,55" />
        <circle cx="50" cy="60" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "ppc",
    icon: MousePointer,
    title: "Pay-Per-Click (PPC) Advertising",
    desc: "Google Ads across Search, Display, Video and Retargeting campaigns to maximize ROI.",
    bullets: [
      "Google Ads (Search, Display, Video)",
      "Facebook & Instagram Ads",
      "Retargeting & conversion funnels",
      "Budget optimization for max ROI"
    ],
    url: "/services/ppc",
    heroStats: ["150% More Leads", "35% Lower CPA"],
    whatWeOffer: [
      "Google Search Ads setup & management",
      "Display and YouTube Ads",
      "Facebook & Instagram Ads",
      "Retargeting campaigns",
      "Landing page recommendations",
      "A/B testing of ads",
      "Weekly performance reports"
    ],
    whyChooseUs: [
      { icon: Target, title: "Certified Experts", desc: "Google Partner standards and optimized bid managers." },
      { icon: Award, title: "ROI Centric", desc: "We direct budgets strictly to conversion-generating keywords." },
      { icon: Shield, title: "Scale Ready", desc: "Expand your local market reach smoothly without waste." }
    ],
    faqs: [
      { q: "How much ad budget do I need to start?", a: "We tailor campaign scopes to your budget. You can start with smaller test spends (e.g. ₹5,000–₹10,000/month) and scale budgets upward as we demonstrate clear ROI." },
      { q: "How quickly do PPC ads drive leads?", a: "PPC is immediate. Once campaigns are configured, approved, and launched, ads show up on search results and display networks, driving instant traffic and leads." },
      { q: "Do you build custom landing pages?", a: "Yes, we analyze and draft conversion-optimized landing page designs, guiding your web developer or building them for you to maximize PPC campaign conversion rates." }
    ],
    svg: (
      <svg className="w-24 h-24 text-brand-accent" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="50" cy="50" r="30" />
        <line x1="50" y1="20" x2="50" y2="80" />
        <line x1="20" y1="50" x2="80" y2="50" />
        <polygon points="50,50 65,65 57,68 53,75" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "web-dev",
    icon: Monitor,
    title: "Website Design & Development",
    desc: "Web design focused on usability and conversion. Responsive, user-centric websites built for results.",
    bullets: [
      "Visually compelling and on brand",
      "Responsive, fast loading",
      "E-commerce ready",
      "SEO-optimized from launch"
    ],
    url: "/services/website-development",
    heroStats: ["95% Lead Conversion", "Fast Loading"],
    whatWeOffer: [
      "Custom website design and development",
      "WordPress and React websites",
      "E-commerce stores (WooCommerce)",
      "Landing pages for campaigns",
      "Website speed optimization",
      "Mobile-first responsive design",
      "SEO-friendly architecture",
      "Post-launch support"
    ],
    whyChooseUs: [
      { icon: Shield, title: "Clean & Secure", desc: "Secure frameworks, optimized assets, and clean code." },
      { icon: Sparkles, title: "Modern Layouts", desc: "Stunning responsive interfaces built with UI/UX standards." },
      { icon: Award, title: "Reliable Support", desc: "A year of dedicated technical support included free." }
    ],
    faqs: [
      { q: "What frameworks do you build websites in?", a: "We primarily build custom responsive sites in React/Vite for speed and WooCommerce/WordPress for easy content updates, tailoring technology to your operational needs." },
      { q: "Will my website load fast and be mobile friendly?", a: "Yes. Every website we build undergoes extensive mobile responsiveness tests and speed optimizations to ensure it loads under 3 seconds." },
      { q: "Do you offer domain registration and hosting setup?", a: "We assist you in selecting the best cloud hosting servers (e.g. Hostinger, AWS, Cloudways) and handle the DNS configurations and launching for you." }
    ],
    svg: (
      <svg className="w-24 h-24 text-brand-cta" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="15" y="20" width="70" height="50" rx="6" />
        <line x1="30" y1="70" x2="70" y2="70" strokeWidth="4" />
        <line x1="50" y1="70" x2="50" y2="80" strokeWidth="4" />
        <path d="M 25,45 L 35,40 L 25,35" />
        <path d="M 75,45 L 65,40 L 75,35" />
        <line x1="53" y1="33" x2="47" y2="47" />
      </svg>
    )
  },
  {
    id: "graphic-design",
    icon: Palette,
    title: "Graphic Design & Branding",
    desc: "Create visual identities and design assets that help your brand stand out from competition.",
    bullets: [
      "Logos & brand marks",
      "Marketing collateral (brochures, flyers)",
      "Digital graphics & social media creatives",
      "UI / UX visuals"
    ],
    url: "/services/graphic-design",
    heroStats: ["Complete Branding", "All Formats"],
    whatWeOffer: [
      "Logo design and brand identity",
      "Social media post designs",
      "Banner and poster design",
      "Brochure and flyer design",
      "Business card and stationery",
      "YouTube thumbnail design",
      "Presentation design (PPT)",
      "Ad creative design for campaigns"
    ],
    whyChooseUs: [
      { icon: Sparkles, title: "100% Unique", desc: "Custom graphic assets engineered from scratch." },
      { icon: Heart, title: "Unlimited Passion", desc: "We pour creative styling into every brochure and deck." },
      { icon: Award, title: "Source Files", desc: "Get raw vector files (AI, PSD, PDF) with full rights." }
    ],
    faqs: [
      { q: "What design formats will I receive?", a: "We hand over print-ready PDF, high-resolution PNG/JPG, and the raw vector source files (Adobe Illustrator/Photoshop) for your brand archives." },
      { q: "How many design revisions are allowed?", a: "We include 3 rounds of design refinements for free to tweak colors, typography, or structural layouts until you are fully satisfied." },
      { q: "Do you design for offline printing as well?", a: "Yes, we structure and design brochures, banners, hoardings, packaging cards, and corporate gifting collateral optimized for high-quality printing." }
    ],
    svg: (
      <svg className="w-24 h-24 text-brand-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M 20,40 C 20,15 80,15 80,40 C 80,65 50,55 50,75" />
        <circle cx="30" cy="35" r="6" fill="currentColor" />
        <circle cx="50" cy="25" r="6" fill="currentColor" />
        <circle cx="70" cy="35" r="6" fill="currentColor" />
        <circle cx="50" cy="75" r="8" strokeWidth="4" />
      </svg>
    )
  },
  {
    id: "performance-marketing",
    icon: TrendingUp,
    title: "Performance Marketing",
    desc: "Data-driven strategies that maximize your marketing budget and deliver measurable ROI.",
    bullets: [
      "ROI-focused campaign management",
      "A/B testing and optimization",
      "Conversion rate optimization",
      "Monthly performance reports"
    ],
    url: "/services/performance-marketing",
    heroStats: ["3.2x ROAS", "Data Driven"],
    whatWeOffer: [
      "Full-funnel marketing strategy",
      "Multi-platform campaign management",
      "Conversion rate optimization",
      "Marketing automation setup",
      "Lead nurturing sequences",
      "ROI tracking and attribution",
      "Competitive analysis",
      "Scale strategies for growth"
    ],
    whyChooseUs: [
      { icon: Target, title: "Analytics Pros", desc: "Advanced pixel tracking and setup verification." },
      { icon: Award, title: "LTV Optimization", desc: "Increase client retention and lower cost per conversion." },
      { icon: Shield, title: "Smart Reporting", desc: "Access real-time reports whenever you need them." }
    ],
    faqs: [
      { q: "What is the difference between PPC and Performance Marketing?", a: "PPC refers specifically to pay-per-click ad platforms (like Google Ads). Performance marketing is an integrated, full-funnel scaling method across multiple channels (Meta, Search, Email, and CRO) optimized strictly against cost-per-lead and ROAS KPIs." },
      { q: "How do you track sales attribution?", a: "We install advanced Meta Conversions API (CAPI), Google Analytics 4 (GA4) custom tracking events, UTM tags, and server-side logs to compile clean lead source records." },
      { q: "Can you optimize our landing page conversion rates?", a: "Yes. Conversion Rate Optimization (CRO) is a vital part of our performance plan. We perform landing page A/B tests, restructuring layouts to maximize visual impact and conversions." }
    ],
    svg: (
      <svg className="w-24 h-24 text-brand-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="15" y1="85" x2="85" y2="85" />
        <line x1="15" y1="15" x2="15" y2="85" />
        <path d="M 15,70 L 40,50 L 60,60 L 85,25" />
        <circle cx="85" cy="25" r="4" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "offline-marketing",
    icon: MapPin,
    title: "Offline Marketing",
    desc: "Local events, activations and offline campaigns that build real connections with your audience.",
    bullets: [
      "Local events and activations",
      "Print and outdoor advertising",
      "Community engagement",
      "Brand awareness campaigns"
    ],
    url: "/services/offline-marketing",
    heroStats: ["Local Reach", "Brand Building"],
    whatWeOffer: [
      "Local event planning and management",
      "Outdoor advertising (hoardings, banners, flex)",
      "Print media advertising",
      "BTL (Below the Line) activities",
      "Brand activation campaigns",
      "Corporate gifting solutions",
      "Pamphlet and leaflet distribution",
      "Local market promotions in Bhopal"
    ],
    whyChooseUs: [
      { icon: Award, title: "Bhopal Experts", desc: "Unmatched network in prime commercial spaces." },
      { icon: Heart, title: "Real Engagement", desc: "Form physical client bonds that online ads miss." },
      { icon: Target, title: "Omnichannel Integrations", desc: "Connect offline activations with online custom links." }
    ],
    faqs: [
      { q: "Which areas in Bhopal do you cover for offline activations?", a: "We manage outdoor campaigns and local activation set-ups across prime retail zones, commercial districts, and residential hubs throughout Bhopal (including MP Nagar, Arera Colony, Kolar, and Indrapuri)." },
      { q: "How do you track the success of offline campaigns?", a: "We use localized custom landing page URLs, dedicated QR codes, special coupon vouchers, and trackable call numbers to measure conversions generated by offline assets." },
      { q: "Do you coordinate the printing and material setups?", a: "Yes. We operate a trusted network of high-quality local printing houses and visual setup partners in Bhopal, supervising the fabrication and activation process from start to finish." }
    ],
    svg: (
      <svg className="w-24 h-24 text-brand-accent" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M 50,15 C 35,15 25,25 25,40 C 25,60 50,85 50,85 C 50,85 75,60 75,40 C 75,25 65,15 50,15 Z" />
        <circle cx="50" cy="40" r="8" fill="currentColor" />
      </svg>
    )
  }
];

export const ServicesCards: React.FC<ServicesCardsProps> = ({ onNavClick = () => {}, limit, isHomePage = false }) => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [cols, setCols] = useState(3);
  const location = useLocation();

  const toggleService = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  // Track responsive columns to chunk grid dynamically
  useEffect(() => {
    if (isHomePage) return;
    const updateCols = () => {
      if (window.innerWidth >= 1024) {
        setCols(3);
      } else if (window.innerWidth >= 768) {
        setCols(2);
      } else {
        setCols(1);
      }
    };
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, [isHomePage]);

  // Handle Hash Anchors redirecting from Home page
  useEffect(() => {
    if (isHomePage) return;
    const hash = window.location.hash;
    if (hash && hash.startsWith('#service-card-')) {
      const serviceId = hash.replace('#service-card-', '');
      setActiveService(serviceId);
      setTimeout(() => {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 400);
    }
  }, [location, isHomePage]);

  const displayList = limit ? servicesList.slice(0, limit) : servicesList;

  // HOME PAGE RENDERING (Grid Layout, Collapsed links redirect to Hash)
  if (isHomePage) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {displayList.map((service, idx) => {
          const IconComponent = service.icon;
          return (
            <Link
              key={service.id}
              to={`/services#${
                service.id === 'smm' ? 'service-social-media' :
                service.id === 'web-dev' ? 'service-website' :
                service.id === 'graphic-design' ? 'service-graphic' :
                service.id === 'seo' ? 'service-seo' :
                service.id === 'ppc' ? 'service-ppc' :
                service.id === 'performance-marketing' ? 'service-performance' :
                'service-offline'
              }`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                style={{ padding: '28px 24px' }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 ease-out hover:border-brand-primary hover:shadow-lg flex flex-col justify-between group cursor-pointer text-left h-full"
              >
                <div>
                  {/* Plain Icon */}
                  <div className="text-brand-primary mb-4 inline-block">
                    <IconComponent size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-2 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-1.5 mb-5 text-left">
                    {service.bullets.slice(0, 3).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-500 leading-snug">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Thin Divider */}
                  <div className="border-t border-gray-100 pt-4" />

                  {/* Learn More Link */}
                  <div className="inline-flex items-center gap-1 hover:gap-2 text-brand-cta font-semibold text-sm transition-[gap] duration-200 ease-out mt-3">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    );
  }

  // SERVICES PAGE RENDERING (Chunked rows to render expandable full-width panel below)
  const rows: typeof servicesList[] = [];
  for (let i = 0; i < displayList.length; i += cols) {
    rows.push(displayList.slice(i, i + cols));
  }

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto px-6">
      {rows.map((row, rIdx) => {
        const activeInRow = row.find(s => s.id === activeService);

        return (
          <div key={rIdx} className="flex flex-col gap-6">
            {/* Cards Sub-Grid */}
            <div className={`grid grid-cols-1 ${cols === 2 ? 'md:grid-cols-2' : ''} ${cols === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-6`}>
              {row.map((service) => {
                const IconComponent = service.icon;
                const isExpanded = activeService === service.id;

                const handleCardToggle = () => {
                  toggleService(service.id);
                  if (!isExpanded) {
                    setTimeout(() => {
                      const el = document.getElementById(`service-card-${service.id}`);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                      }
                    }, 350);
                  }
                };

                return (
                  <div
                    key={service.id}
                    id={`service-card-${service.id}`}
                    onClick={handleCardToggle}
                    style={{ padding: '28px 24px' }}
                    className={`bg-white border rounded-2xl text-left transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between h-full ${
                      isExpanded 
                        ? 'border-2 border-brand-primary shadow-lg' 
                        : 'border-gray-200 hover:border-brand-primary hover:shadow-md shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Icon */}
                      <div className="text-brand-primary mb-4 inline-block">
                        <IconComponent size={32} />
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg text-brand-navy mb-2">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        {service.desc}
                      </p>

                      {/* 3 Bullet Points */}
                      <ul className="space-y-1.5 mb-5 text-left">
                        {service.bullets.slice(0, 3).map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <CheckCircle size={14} className="text-brand-primary flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-500 leading-snug">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      {/* Divider */}
                      <div className="border-t border-gray-100 pt-4" />

                      {/* Toggle Link */}
                      <div className="inline-flex items-center gap-1 hover:gap-2 text-brand-cta font-semibold text-sm transition-[gap] duration-200 ease-out mt-3">
                        <span>{isExpanded ? "Show Less" : "Learn More"}</span>
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="inline-block mt-0.5"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FULL WIDTH ACCORDION EXPANSION PANEL BELOW ROW */}
            <AnimatePresence initial={false}>
              {activeInRow && (
                <motion.div
                  key={activeInRow.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 border-t-[3px] border-t-brand-primary rounded-2xl p-6 md:p-8 w-full text-left shadow-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    {/* LEFT COLUMN — What We Offer + FAQ (col-span-7) */}
                    <div className="md:col-span-7 flex flex-col gap-6">

                      {/* What We Offer */}
                      <div>
                        <h4 className="font-bold text-sm text-brand-navy uppercase tracking-wider mb-3">
                          What We Offer
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                          {activeInRow.whatWeOffer.map((offer, oIdx) => (
                            <li key={oIdx} className="flex items-start gap-2.5">
                              <CheckCircle size={16} className="text-brand-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600 leading-snug">
                                {offer}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Service FAQ Accordion */}
                      <div className="border-t border-gray-200/60 pt-6">
                        <h4 className="font-bold text-sm text-brand-navy uppercase tracking-wider mb-3">
                          FAQ
                        </h4>
                        <div className="space-y-2">
                          {activeInRow.faqs.map((faq, fIdx) => (
                            <div key={fIdx} className="border border-gray-200 rounded-lg p-3 bg-white text-left">
                              <span className="font-bold text-xs text-brand-navy block">{faq.q}</span>
                              <span className="text-xs text-gray-500 mt-1 block leading-relaxed">{faq.a}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN — Why Choose Us + CTA (col-span-5) */}
                    <div className="md:col-span-5 flex flex-col justify-between gap-4">

                      {/* Why Choose Us */}
                      <div className="bg-[#F8F9FC] border border-gray-200 rounded-xl p-5">
                        <h4 className="font-bold text-sm text-brand-navy uppercase tracking-wider mb-4">
                          Why Choose Us
                        </h4>
                        <div className="flex flex-col gap-4">
                          {activeInRow.whyChooseUs.map((item, wIdx) => {
                            const ItemIcon = item.icon;
                            return (
                              <div key={wIdx} className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-brand-cta/10 text-brand-cta flex items-center justify-center flex-shrink-0">
                                  <ItemIcon size={15} />
                                </div>
                                <div>
                                  <h5 className="font-bold text-xs text-brand-navy leading-tight">
                                    {item.title}
                                  </h5>
                                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        onClick={() => onNavClick('contact-page')}
                        className="w-full bg-brand-cta hover:bg-brand-ctaHover text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-md flex items-center justify-center gap-1.5"
                      >
                        Get Consultation
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};