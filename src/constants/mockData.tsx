import {
  Search, MousePointer, Monitor, PenTool, BarChart2, Megaphone,
  Users, TrendingUp, Rocket, Target, Shield, Briefcase, Smile
} from 'lucide-react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import type { 
  Service, 
  TrustCompany, 
  WhyChooseFeature, 
  TeamMember, 
  Stat, 
  Testimonial, 
  PortfolioItem,  
  JobOpening,
  BlogPost
} from '../types';

export const services: Service[] = [
  {
    id: 'smm',
    title: 'Social Media Marketing',
    desc: 'Grow your brand and engage your audience across platforms with targeted content strategies.',
    icon: (
      <div className="flex justify-center items-center gap-1.5 text-3xl text-brand-orange">
        <FaInstagram />
        <span className="text-xl">/</span>
        <FaFacebookF />
      </div>
    ),
    bgCircle: 'bg-brand-orange/10'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    desc: 'Rank higher on Google and drive organic traffic consistently with data-backed keyword strategies.',
    icon: <Search className="w-8 h-8 text-brand-orange" />,
    bgCircle: 'bg-brand-orange/10'
  },
  {
    id: 'ppc',
    title: 'PPC Advertising',
    desc: 'Targeted ads that generate quality leads, sales, and optimized performance conversions.',
    icon: <MousePointer className="w-8 h-8 text-brand-orange" />,
    bgCircle: 'bg-brand-orange/10'
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    desc: 'Modern, responsive, fast-loading websites built specifically for high conversions.',
    icon: <Monitor className="w-8 h-8 text-brand-orange" />,
    bgCircle: 'bg-brand-orange/10'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Designing',
    desc: 'Stunning creative designs and visuals that strengthen your brand identity and authority.',
    icon: <PenTool className="w-8 h-8 text-brand-orange" />,
    bgCircle: 'bg-brand-orange/10'
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    desc: 'ROI focused digital advertising campaign management that maximizes your marketing spend.',
    icon: <BarChart2 className="w-8 h-8 text-brand-orange" />,
    bgCircle: 'bg-brand-orange/10'
  },
  {
    id: 'offline-marketing',
    title: 'Offline Marketing',
    desc: 'Local events, local brand activations, and BTL marketing that build real regional connections.',
    icon: <Megaphone className="w-8 h-8 text-brand-orange" />,
    bgCircle: 'bg-brand-orange/10'
  }
];

export const trustCompanies: TrustCompany[] = [
  { name: 'StartupSkool', industry: 'Education', icon: '📚' },
  { name: 'HealWell', industry: 'Healthcare', icon: '🏥' },
  { name: 'UrbanField', industry: 'Real Estate', icon: '🏢' },
  { name: 'ShopNish', industry: 'E-Commerce', icon: '🛍️' },
  { name: 'FreshBite', industry: 'Food & Beverage', icon: '🍕' },
  { name: 'FitLife', industry: 'Fitness', icon: '💪' }
];

export const whyChooseFeatures: WhyChooseFeature[] = [
  {
    icon: <BarChart2 className="w-6 h-6 text-brand-orange" />,
    bg: 'bg-brand-orange/10',
    title: 'Data Driven',
    desc: 'We analyze, strategize and execute data driven campaigns tailored for conversions.'
  },
  {
    icon: <Target className="w-6 h-6 text-brand-orange" />,
    bg: 'bg-brand-orange/10',
    title: 'Result Oriented',
    desc: 'We focus on measurable results that impact your business bottom line directly.'
  },
  {
    icon: <Users className="w-6 h-6 text-brand-orange" />,
    bg: 'bg-brand-orange/10',
    title: 'Right Audience',
    desc: 'We reach the exact right audience demographic to maximize engagement and CTR.'
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-brand-orange" />,
    bg: 'bg-brand-orange/10',
    title: 'High Quality Leads',
    desc: 'We generate highly qualified leads that convert into long-term repeating sales.'
  },
  {
    icon: <Rocket className="w-6 h-6 text-brand-orange" />,
    bg: 'bg-brand-orange/10',
    title: 'Business Growth',
    desc: 'Our scalable strategies are custom designed to scale your business operations fast.'
  },
  {
    icon: <Shield className="w-6 h-6 text-brand-orange" />,
    bg: 'bg-brand-orange/10',
    title: 'Transparent Reporting',
    desc: 'You always know where your budget goes. Full monthly reports with zero hidden fees.'
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Prachi Shrivas',
    role: 'Founder & CEO',
    department: 'Leadership',
    initials: 'PS',
    skills: ["Strategy", "SEO", "Growth"],
    bio: "Visionary leader with expertise in digital strategy and business development. Passionate about helping brands achieve measurable online growth.",
    gradient: 'bg-brand-orange',
    image: '/prachi.png'
  },
  {
    name: 'Pratham Kesharwani',
    role: 'Founder & COO',
    department: 'Leadership',
    initials: 'PK',
    skills: ["Operations", "PPC", "Analytics"],
    bio: "Operations expert focused on delivering systematic growth solutions. Specializes in performance marketing and campaign optimization.",
    gradient: 'bg-brand-navy',
    image: '/pratham.png'
  },
  {
    name: 'Team Member',
    role: 'Social Media Manager',
    department: 'Marketing',
    initials: 'SM',
    skills: ["Instagram", "Facebook", "Content"],
    bio: "Creative social media specialist crafting engaging content strategies that grow brand presence and audience engagement across all platforms.",
    gradient: 'bg-brand-orange',
    image: '/social_media.png'
  },
  {
    name: 'Team Member',
    role: 'SEO Specialist',
    department: 'Technical',
    initials: 'SS',
    skills: ["On-Page SEO", "Link Building", "Analytics"],
    bio: "Technical SEO expert driving organic traffic growth through data-driven keyword strategies and website optimization techniques.",
    gradient: 'bg-brand-navy',
    image: '/seo_specialist.png'
  }
];

export const stats: Stat[] = [
  { icon: <Briefcase className="w-5 h-5 text-brand-orange" />, value: 250, suffix: '+', label: 'Projects Completed' },
  { icon: <Smile className="w-5 h-5 text-brand-orange" />, value: 98, suffix: '%', label: 'Client Satisfaction' },
  { icon: <Users className="w-5 h-5 text-brand-orange" />, value: 12, suffix: 'M+', label: 'Campaign Reach' },
  { icon: <TrendingUp className="w-5 h-5 text-brand-orange" />, value: 150, suffix: '%', label: 'Average Lead Growth' }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    metric: "+120% Organic Traffic",
    text: "AdWise Tech really took our online presence to the next level. Their SEO and social media strategies boosted our leads like never before!",
    author: "Ravi Sharma",
    role: "E-commerce Business Owner",
    company: "ShopNish",
    avatar: "RS"
  },
  {
    id: 2,
    rating: 5,
    metric: "+95% More Leads",
    text: "We're impressed with the results from our website design and PPC campaigns. AdWise Tech delivered exactly what they promised.",
    author: "Sneha Kumar",
    role: "Founder & CEO",
    company: "HealWell Clinics",
    avatar: "SK"
  },
  {
    id: 3,
    rating: 5,
    metric: "70% Engagement Growth",
    text: "The team is professional and proactive. Our social media engagement and website traffic have never been better.",
    author: "Neha Rai",
    role: "Small Business Owner",
    company: "FreshBite Cafe",
    avatar: "NR"
  },
  {
    id: 4,
    rating: 5,
    metric: "3x More Customers",
    text: "Working with AdWise Tech was a game-changer for our brand. Their strategies actually drive results we can see and measure.",
    author: "Amit P.",
    role: "Operations Director",
    company: "UrbanField Group",
    avatar: "AP"
  },
  {
    id: 5,
    rating: 5,
    metric: "150% More Leads",
    text: "From SEO to PPC, AdWise Tech handled everything seamlessly. Our business growth and online visibility improved significantly.",
    author: "Karan M.",
    role: "Co-Founder, FitLife Studio",
    company: "FitLife Studio",
    avatar: "KM"
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "Website Development",
    filterCategory: "Website",
    title: "E-Commerce Website Development",
    metric: "+95% Lead Conversion",
    desc: "Built a high-converting e-commerce website with optimized product pages and checkout flow.",
    industry: "E-Commerce"
  },
  {
    id: 2,
    category: "Search Engine Optimization",
    filterCategory: "SEO",
    title: "SEO Campaign — Organic Growth",
    metric: "+120% Organic Traffic",
    desc: "Ranked client on Page 1 of Google for 15+ high-intent keywords within 4 months.",
    industry: "Local Business"
  },
  {
    id: 3,
    category: "Performance Marketing",
    filterCategory: "Meta Ads",
    title: "Meta Ads — Lead Generation",
    metric: "3.2x ROAS Achieved",
    desc: "Generated 1,200+ qualified leads via Facebook and Instagram ad campaigns in 60 days.",
    industry: "Real Estate"
  },
  {
    id: 4,
    category: "PPC Advertising",
    filterCategory: "PPC",
    title: "Google Ads — PPC Campaign",
    metric: "+48% Conversions",
    desc: "Reduced cost-per-click by 35% while increasing conversions through smart bidding strategies.",
    industry: "Healthcare"
  },
  {
    id: 5,
    category: "Graphic Designing",
    filterCategory: "Branding",
    title: "Brand Identity Design",
    metric: "Complete Brand Overhaul",
    desc: "Created full brand identity including logo, color palette, typography and brand guidelines.",
    industry: "Startup"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10x Your ROI: The Ultimate Guide to PPC Ads in 2026',
    desc: 'Discover how modern bidding strategies and smart audience target updates can lower costs and skyrocket conversion rates.',
    date: 'Aug 15, 2025',
    readTime: '5 min read',
    category: 'PPC Advertising',
    gradient: 'bg-brand-orange',
    icon: <Megaphone className="w-8 h-8 text-white" />
  },
  {
    id: 2,
    title: "Bhopal's Digital Boom: Why Local Businesses Need SEO Now",
    desc: 'How the capital city of MP is transitioning to a digital economy and how local SEO search maps are driving physical store visits.',
    date: 'Aug 12, 2025',
    readTime: '7 min read',
    category: 'SEO',
    gradient: 'bg-brand-navy',
    icon: <Search className="w-8 h-8 text-white" />
  },
  {
    id: 3,
    title: 'Social Media Hacks to Boost Organic Engagement by 200%',
    desc: 'Ditch the algorithmic fatigue. Learn practical strategies to build community, write interactive captions, and optimize reels.',
    date: 'Aug 09, 2025',
    readTime: '4 min read',
    category: 'Social Media',
    gradient: 'bg-brand-orange',
    icon: <Users className="w-8 h-8 text-white" />
  },
  {
    id: 4,
    title: 'Building High-Converting Landing Pages: Design Rules for 2026',
    desc: 'Visual hierarchy, rapid page loading speeds, and clear value statements. Learn what makes a landing page convert visitors into paying leads.',
    date: 'Aug 05, 2025',
    readTime: '6 min read',
    category: 'Website Development',
    gradient: 'bg-brand-navy',
    icon: <Monitor className="w-8 h-8 text-white" />
  },
  {
    id: 5,
    title: 'Data-Driven Growth: Transitioning from Branding to ROI Marketing',
    desc: 'Stop spending blindly on vanity metrics. Learn how performance marketing attributes sales back to the source channels accurately.',
    date: 'Aug 02, 2025',
    readTime: '8 min read',
    category: 'Performance Marketing',
    gradient: 'bg-brand-orange',
    icon: <BarChart2 className="w-8 h-8 text-white" />
  },
  {
    id: 6,
    title: 'How Premium Visual Design Changes Customer Value Perception',
    desc: 'A look into consumer psychology and why premium graphic designs, sleek typography, and layout clarity command higher price tags.',
    date: 'Jul 28, 2025',
    readTime: '5 min read',
    category: 'Graphic Designing',
    gradient: 'bg-brand-navy',
    icon: <PenTool className="w-8 h-8 text-white" />
  }
];

export const jobOpenings: JobOpening[] = [
  {
    title: 'Senior SEO Executive',
    type: 'Full-time',
    location: 'Bhopal, MP (Hybrid)',
    experience: '2+ Years Exp'
  },
  {
    title: 'Social Media Manager',
    type: 'Full-time',
    location: 'Bhopal, MP (On-site)',
    experience: '1+ Years Exp'
  },
  {
    title: 'React & Node Developer',
    type: 'Full-time',
    location: 'Bhopal, MP (Hybrid)',
    experience: '3+ Years Exp'
  }
];
