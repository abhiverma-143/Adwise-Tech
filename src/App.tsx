import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CareerModal } from './components/CareerModal';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPostPage } from './pages/BlogPostPage';
import { Services } from './pages/Services';
import { CareersPage } from './pages/CareersPage';
import { Courses } from './pages/Courses';

import type { JobOpening } from './types';

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.remove('dark');

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      if (location.pathname === '/') {
        const sections = ['home', 'why-choose-us', 'services', 'portfolio', 'process'];
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

    if (id === 'contact-page') {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'about-page') {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'about-page-team') {
      navigate('/about#our-team');
      return;
    }

    if (id === 'blog') {
      navigate('/blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'courses') {
      navigate('/courses');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    

    if (id === 'services' || id === 'services-page') {
      navigate('/services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const serviceAnchorMap: Record<string, string> = {
      'seo': 'service-seo',
      'smm': 'service-social-media',
      'ppc': 'service-ppc',
      'web-dev': 'service-website',
      'graphic-design': 'service-graphic',
      'performance-marketing': 'service-performance',
      'offline-marketing': 'service-offline'
    };
    if (serviceAnchorMap[id]) {
      navigate(`/services#${serviceAnchorMap[id]}`);
      return;
    }

    if (id === 'careers-page' || id === 'careers' || id === 'career') {
      navigate('/careers');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(id);
          if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }, 150);
    } else {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCareerModal = (job: JobOpening) => {
    setSelectedJob(job);
    setCareerModalOpen(true);
  };

  return (
    <div className="relative font-sans text-brand-secondary bg-white min-h-screen antialiased transition-colors duration-300">
      <motion.div
        id="scroll-progress"
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100]"
        style={{ scaleX }}
      />

      <Navbar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        servicesDropdownOpen={servicesDropdownOpen}
        setServicesDropdownOpen={setServicesDropdownOpen}
        handleNavClick={handleNavClick}
      />

      <Routes>
        <Route path="/" element={
          <Home 
            handleNavClick={handleNavClick} 
          />
        } />

        <Route path="/about" element={
          <About handleNavClick={handleNavClick} />
        } />

        <Route path="/contact" element={<Contact />} />

        <Route path="/blog" element={
          <Blog handleNavClick={handleNavClick} />
        } />

        {/* Individual blog post route */}
        <Route path="/blog/:postId" element={
          <BlogPostPage handleNavClick={handleNavClick} />
        } />

        <Route path="/services" element={
          <Services handleNavClick={handleNavClick} />
        } />

        <Route path="/careers" element={
          <CareersPage onApplyJob={openCareerModal} />
        } />

        <Route path="/courses" element={<Courses handleNavClick={handleNavClick} />} />
      </Routes>

      <Footer onNavClick={handleNavClick} />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-2xl hover:bg-brand-ctaHover transition-colors z-40 focus:outline-none"
            aria-label="Back to Top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/919171038075?text= "
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#20ba59] z-40 focus:outline-none whatsapp-pulse"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>

      <AnimatePresence>
        {careerModalOpen && selectedJob && (
          <CareerModal
            isOpen={careerModalOpen}
            job={selectedJob}
            onClose={() => {
              setCareerModalOpen(false);
              setSelectedJob(null);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}