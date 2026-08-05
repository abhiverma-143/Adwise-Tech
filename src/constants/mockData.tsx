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
  { icon: <Briefcase className="w-5 h-5 text-brand-orange" />, value: 235, suffix: '+', label: 'Projects Completed' },
  { icon: <Smile className="w-5 h-5 text-brand-orange" />, value: 91, suffix: '%', label: 'Client Satisfaction' },
  { icon: <Users className="w-5 h-5 text-brand-orange" />, value: 50, suffix: 'M+', label: 'Campaign Reach' },
  { icon: <TrendingUp className="w-5 h-5 text-brand-orange" />, value: 10, suffix: '%', label: 'Average Lead Growth' }
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
    desc: "Built a high-converting e-commerce website with optimized product pages and checkout flow.",
    industry: "E-Commerce",
    img: "/web.jpg"
  },
  {
    id: 2,
    category: "Search Engine Optimization",
    filterCategory: "SEO",
    title: "SEO Campaign — Organic Growth",
    desc: "Ranked client on Page 1 of Google for 15+ high-intent keywords within 4 months.",
    industry: "Local Business",
    img: "/SEO Compaign.jpg"
  },
  {
    id: 3,
    category: "Performance Marketing",
    filterCategory: "Meta Ads",
    title: "Meta Ads — Lead Generation",
    desc: "Generated 1,200+ qualified leads via Facebook and Instagram ad campaigns in 60 days.",
    industry: "Real Estate",
    img: "/Meta.jpg"
  },
  {
    id: 4,
    category: "PPC Advertising",
    filterCategory: "PPC",
    title: "Google Ads — PPC Campaign",

    desc: "Reduced cost-per-click by 35% while increasing conversions through smart bidding strategies.",
    industry: "Healthcare",
    img: "/svc_ppc.png"
  },
  {
    id: 5,
    category: "Graphic Designing",
    filterCategory: "Branding",
    title: "Brand Identity Design",
    desc: "Created full brand identity including logo, color palette, typography and brand guidelines.",
    industry: "Startup",
    img: "/svc_graphic.png"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10x Your ROI: The Ultimate Guide to PPC Ads',
    desc: 'Discover how modern bidding strategies and smart audience target updates can lower costs and skyrocket conversion rates.',
    readTime: '5 min read',
    category: 'PPC Advertising',
    gradient: 'bg-brand-orange',
    icon: <Megaphone className="w-8 h-8 text-white" />,
    img: '/hero_slide_3.png',
    content: [
      {
        heading: 'Why Most PPC Campaigns Waste Money',
        body: 'The biggest mistake businesses make with pay-per-click advertising is treating it like a one-time setup instead of an ongoing experiment. Ad platforms reward accounts that continuously test headlines, adjust bids, and refine audience segments. Without that discipline, budgets quietly leak into clicks that never convert.'
      },
      {
        heading: 'Smart Bidding Beats Manual Guesswork',
        body: 'Automated bidding strategies like Target ROAS and Maximize Conversions use machine learning to analyze thousands of signals in real time — device, location, time of day, and past behavior — something manual bid adjustments simply cannot match at scale. The key is feeding these systems clean conversion data so they learn the right patterns quickly.'
      },
      {
        heading: 'Audience Layering for Sharper Targeting',
        body: 'Instead of targeting broad keywords alone, layering in-market audiences, remarketing lists, and customer match data narrows your reach to people already showing buying intent. This alone can cut cost-per-acquisition significantly while keeping conversion volume steady.'
      },
      {
        heading: 'The Landing Page Connection',
        body: 'Even a perfectly optimized campaign fails if it sends traffic to a slow or generic landing page. Matching ad messaging exactly to landing page content, and keeping load times under two seconds, consistently lifts conversion rates more than any bid adjustment alone.'
      }
    ]
  },
  {
    id: 2,
    title: "Bhopal's Digital Boom: Why Local Businesses Need SEO Now",
    desc: 'How the capital city of MP is transitioning to a digital economy and how local SEO search maps are driving physical store visits.',
    readTime: '7 min read',
    category: 'SEO',
    gradient: 'bg-brand-navy',
    icon: <Search className="w-8 h-8 text-white" />,
    img: '/seo.jpg',
    content: [
      {
        heading: 'A City Going Online Fast',
        body: "Bhopal's consumer base has shifted dramatically toward searching for products and services online before ever stepping into a store. Tier-2 cities across Madhya Pradesh are seeing smartphone penetration and local search volume grow faster than many metro markets, yet most small and mid-sized businesses here still have little to no search presence."
      },
      {
        heading: 'Google Business Profile Is No Longer Optional',
        body: 'For local businesses, an optimized Google Business Profile often matters more than the website itself. Accurate categories, regularly updated photos, and genuine customer reviews directly influence whether a business appears in the local map pack — the section most people tap first when searching nearby.'
      },
      {
        heading: 'Local Keywords Outperform Generic Ones',
        body: 'Ranking for "best furniture shop in Bhopal" brings far more qualified footfall than competing for a broad national keyword. Local SEO rewards specificity — neighborhood names, landmark references, and city-specific service pages consistently outperform generic content in both rankings and actual conversions.'
      },
      {
        heading: 'Reviews as a Ranking and Trust Signal',
        body: 'Search engines increasingly weigh review volume, recency, and response rate as trust signals. Businesses that actively request and respond to reviews see measurable improvements in both map pack visibility and click-through rate from search results.'
      }
    ]
  },
  {
    id: 3,
    title: 'Social Media Hacks to Boost Organic Engagement by 200%',
    desc: 'Ditch the algorithmic fatigue. Learn practical strategies to build community, write interactive captions, and optimize reels.',
    readTime: '4 min read',
    category: 'Social Media',
    gradient: 'bg-brand-orange',
    icon: <Users className="w-8 h-8 text-white" />,
    img: '/smm.jpg',
    content: [
      {
        heading: 'Stop Chasing the Algorithm, Start Building Community',
        body: 'Accounts that treat followers as a community rather than an audience consistently outperform those chasing viral formats. Replying to every comment in the first hour, asking genuine questions in captions, and featuring followers in content all signal to the platform — and to people — that the account is worth engaging with.'
      },
      {
        heading: 'Reels Still Reward Native Editing',
        body: 'Content edited natively inside Instagram or watermark-free from other apps consistently gets more reach than re-shared content with visible watermarks. Platforms prioritize what appears to be created specifically for them, not repurposed leftovers.'
      },
      {
        heading: 'Captions That Ask, Not Tell',
        body: 'Captions structured as open questions rather than statements generate significantly more comments. More comments in the first 30 minutes after posting is one of the strongest early engagement signals platforms use to decide how widely to distribute a post.'
      },
      {
        heading: 'Consistency Beats Frequency',
        body: 'Posting three times a week at a consistent time outperforms posting daily at random hours. Predictable posting schedules train both the algorithm and the audience to expect and engage with content regularly.'
      }
    ]
  },
  {
    id: 4,
    title: 'Building High-Converting Landing Pages: Design Rules for 2026',
    desc: 'Visual hierarchy, rapid page loading speeds, and clear value statements. Learn what makes a landing page convert visitors into paying leads.',
    readTime: '6 min read',
    category: 'Website Development',
    gradient: 'bg-brand-navy',
    icon: <Monitor className="w-8 h-8 text-white" />,
    img: '/web.jpg',
    content: [
      {
        heading: 'The First Three Seconds Decide Everything',
        body: "Visitors form a judgment about whether to stay or leave within the first three seconds of a page loading. That means the headline, hero image, and primary call-to-action need to communicate value instantly, without requiring any scrolling or reading."
      },
      {
        heading: 'Speed Is a Conversion Feature, Not Just a Technical Metric',
        body: 'Every additional second of load time measurably reduces conversion rates. Compressing images, lazy-loading below-the-fold content, and minimizing third-party scripts are no longer optional technical details — they directly affect how many visitors become leads.'
      },
      {
        heading: 'One Page, One Goal',
        body: 'The highest-converting landing pages have a single, unambiguous call to action repeated at strategic points, rather than multiple competing links pulling visitors in different directions. Removing navigation menus from dedicated campaign landing pages alone can lift conversions noticeably.'
      },
      {
        heading: 'Social Proof Placed Near the Decision Point',
        body: 'Testimonials and trust badges work best when placed directly next to the form or button, not buried in a separate section. Visitors need reassurance exactly at the moment they are deciding to act.'
      }
    ]
  },
  {
    id: 5,
    title: 'Data-Driven Growth: Transitioning from Branding to ROI Marketing',
    desc: 'Stop spending blindly on vanity metrics. Learn how performance marketing attributes sales back to the source channels accurately.',
    readTime: '8 min read',
    category: 'Performance Marketing',
    gradient: 'bg-brand-orange',
    icon: <BarChart2 className="w-8 h-8 text-white" />,
    img: '/Meta.jpg',
    content: [
      {
        heading: 'Vanity Metrics Feel Good but Say Little',
        body: 'Likes, impressions, and follower counts are easy to report but rarely correlate with revenue. Performance marketing shifts the conversation from "how many people saw this" to "how much revenue did this channel generate," which is the metric that actually matters to a business owner.'
      },
      {
        heading: 'Attribution Models Matter More Than Ad Spend',
        body: 'Two businesses can spend identical budgets and get wildly different results simply because one tracks attribution correctly and the other does not. Multi-touch attribution reveals which channels actually influence a purchase decision, rather than crediting only the last click before checkout.'
      },
      {
        heading: 'Customer Lifetime Value Changes the Math',
        body: 'A channel that looks expensive on a cost-per-acquisition basis can be the most profitable one once customer lifetime value is factored in. Businesses that only look at first-purchase cost often cut their best-performing channels by mistake.'
      },
      {
        heading: 'Building a Feedback Loop',
        body: 'The businesses that grow fastest treat every campaign as a data source that informs the next one — testing, measuring, and reallocating budget weekly rather than reviewing performance once a quarter.'
      }
    ]
  },
  {
    id: 6,
    title: 'How Premium Visual Design Changes Customer Value Perception',
    desc: 'A look into consumer psychology and why premium graphic designs, sleek typography, and layout clarity command higher price tags.',
    readTime: '5 min read',
    category: 'Graphic Designing',
    gradient: 'bg-brand-navy',
    icon: <PenTool className="w-8 h-8 text-white" />,
    img: '/hero_slide_2.png',
    content: [
      {
        heading: 'Design Is a Pricing Signal',
        body: 'Consumers subconsciously judge product and service quality based on visual presentation before they read a single word of copy. Clean layouts, consistent typography, and generous white space signal premium positioning, while cluttered or inconsistent design signals a budget option — regardless of actual quality.'
      },
      {
        heading: 'Typography Carries More Weight Than People Realize',
        body: 'The same message set in a refined, well-paired typeface is perceived as more trustworthy and higher-value than identical text in a generic or mismatched font. Typography is often the fastest and most cost-effective lever for improving perceived brand quality.'
      },
      {
        heading: 'Color Consistency Builds Recognition and Trust',
        body: 'Brands that maintain a strict, limited color palette across every touchpoint are remembered and trusted more than those that vary their look from platform to platform. Consistency reduces the cognitive effort needed to recognize and trust a brand at a glance.'
      },
      {
        heading: 'Whitespace Is Not Wasted Space',
        body: 'Designs with generous spacing between elements are consistently rated as more premium and easier to trust than dense, information-heavy layouts, even when the underlying content is identical. Restraint in design communicates confidence.'
      }
    ]
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
    title: 'E- commerce website and business development',
    type: 'Full-time',
    location: 'Bhopal, MP (Hybrid)',
    experience: '3+ Years Exp'
  }
];