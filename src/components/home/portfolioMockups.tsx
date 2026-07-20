// Decorative SVG mockups shown on the portfolio cards on the homepage.
// Each case corresponds to a portfolioItems[].id in src/constants/mockData.tsx.
export const renderPortfolioMockup = (id: number) => {
  switch (id) {
    case 1:
      return (
        <svg className="w-full h-full p-4" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Browser Frame */}
          <rect x="10" y="10" width="280" height="140" rx="8" fill="white" stroke="#F0F0F0" strokeWidth="2" />
          {/* Browser Top Bar */}
          <rect x="10" y="10" width="280" height="24" rx="8" fill="#1A1A2E" />
          <rect x="10" y="20" width="280" height="14" fill="#1A1A2E" />
          {/* 3 browser dots */}
          <circle cx="24" cy="22" r="3.5" fill="#C41E56" />
          <circle cx="36" cy="22" r="3.5" fill="#64748B" />
          <circle cx="48" cy="22" r="3.5" fill="#F0F0F0" />
          {/* Accent header bar */}
          <rect x="20" y="44" width="260" height="18" rx="4" fill="#C41E56" opacity="0.9" />
          {/* Shopping cart top right */}
          <path d="M255 53h-4.5l-2.5-7h12l-1.5 4.5c-.2.5-.7.8-1.2.8h-2.3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="249" cy="57" r="1.5" fill="white" />
          <circle cx="256" cy="57" r="1.5" fill="white" />
          {/* Product Grid 2x2 */}
          <rect x="25" y="72" width="115" height="32" rx="4" fill="#F8F9FC" stroke="#F0F0F0" />
          <rect x="160" y="72" width="115" height="32" rx="4" fill="#F8F9FC" stroke="#F0F0F0" />
          <rect x="25" y="110" width="115" height="32" rx="4" fill="#F8F9FC" stroke="#F0F0F0" />
          <rect x="160" y="110" width="115" height="32" rx="4" fill="#F8F9FC" stroke="#F0F0F0" />

          {/* Product internal lines / price tag */}
          <rect x="35" y="80" width="55" height="6" rx="2" fill="#F0F0F0" />
          <rect x="35" y="90" width="30" height="6" rx="2" fill="#F0F0F0" />
          <rect x="105" y="80" width="25" height="16" rx="3" fill="#C41E56" opacity="0.15" />
          <rect x="110" y="85" width="15" height="6" rx="1.5" fill="#C41E56" />

          <rect x="170" y="80" width="55" height="6" rx="2" fill="#F0F0F0" />
          <rect x="170" y="90" width="30" height="6" rx="2" fill="#F0F0F0" />
          <rect x="240" y="80" width="25" height="16" rx="3" fill="#C41E56" opacity="0.15" />
          <rect x="245" y="85" width="15" height="6" rx="1.5" fill="#C41E56" />

          <rect x="35" y="118" width="55" height="6" rx="2" fill="#F0F0F0" />
          <rect x="35" y="128" width="30" height="6" rx="2" fill="#F0F0F0" />
          <rect x="105" y="118" width="25" height="16" rx="3" fill="#C41E56" opacity="0.15" />
          <rect x="110" y="123" width="15" height="6" rx="1.5" fill="#C41E56" />

          <rect x="170" y="118" width="55" height="6" rx="2" fill="#F0F0F0" />
          <rect x="170" y="128" width="30" height="6" rx="2" fill="#F0F0F0" />
          <rect x="240" y="118" width="25" height="16" rx="3" fill="#C41E56" opacity="0.15" />
          <rect x="245" y="123" width="15" height="6" rx="1.5" fill="#C41E56" />
        </svg>
      );
    case 2:
      return (
        <svg className="w-full h-full p-4" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="280" height="140" rx="8" fill="white" stroke="#F0F0F0" strokeWidth="2" />
          <rect x="20" y="20" width="260" height="20" rx="10" fill="#F8F9FC" stroke="#F0F0F0" strokeWidth="1" />
          <text x="35" y="33" fill="#64748B" className="text-[9px] font-semibold">google.com/search?q=best+marketing+agency</text>

          <g>
            <rect x="20" y="48" width="54" height="12" rx="4" fill="#C41E56" />
            <text x="47" y="57" fill="white" textAnchor="middle" className="text-[7px] font-black uppercase">Page 1 #1</text>

            <text x="80" y="57" fill="#1A1A2E" className="text-[9px] font-bold">Ad Wise Tech — Bhopal's Leading Growth Agency</text>
            <text x="20" y="69" fill="#C41E56" className="text-[8px]">https://adwisetech.com</text>
            <text x="20" y="79" fill="#64748B" className="text-[7px] leading-[1.2]">We help local brands and e-commerce stores scale conversions by 95% using organic SEO systems...</text>
          </g>

          <g opacity="0.6">
            <text x="20" y="93" fill="#1A1A2E" className="text-[9px] font-bold">Top Marketing Agency in Bhopal</text>
            <text x="20" y="103" fill="#64748B" className="text-[8px]">https://competitor-one.com/marketing</text>
            <text x="20" y="113" fill="#64748B" className="text-[7px] leading-[1.2]">Read reviews, compare features, and check pricing profiles for local agencies...</text>
          </g>

          <g opacity="0.4">
            <text x="20" y="127" fill="#1A1A2E" className="text-[9px] font-bold">Digital Services - Bhopal Agency</text>
            <text x="20" y="137" fill="#64748B" className="text-[8px]">https://competitor-two.net/web-dev</text>
          </g>
        </svg>
      );
    case 3:
      return (
        <svg className="w-full h-full p-3" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="90" y="10" width="120" height="140" rx="16" fill="white" stroke="#1A1A2E" strokeWidth="3" />
          <rect x="135" y="14" width="30" height="4" rx="2" fill="#F0F0F0" />

          <circle cx="108" cy="32" r="8" fill="#C41E56" />
          <rect x="120" y="26" width="50" height="6" rx="2" fill="#1A1A2E" />
          <text x="120" y="38" fill="#C41E56" className="text-[5.5px] font-bold">Sponsored</text>

          <rect x="98" y="46" width="104" height="60" rx="4" fill="#F8F9FC" stroke="#F0F0F0" />
          <path d="M98 90l30-24 25 20 20-16 29 20v16H98V90z" fill="#C41E56" opacity="0.1" />
          <circle cx="175" cy="62" r="5" fill="#C41E56" opacity="0.15" />

          <g>
            <rect x="140" y="80" width="58" height="18" rx="6" fill="#C41E56" />
            <text x="169" y="92" fill="white" textAnchor="middle" className="text-[8px] font-black">+36% CTR</text>
          </g>

          <circle cx="106" cy="114" r="3" stroke="#94A3B8" strokeWidth="1" />
          <circle cx="118" cy="114" r="3" stroke="#94A3B8" strokeWidth="1" />
          <circle cx="130" cy="114" r="3" stroke="#94A3B8" strokeWidth="1" />

          <rect x="102" y="124" width="96" height="4" rx="1" fill="#F0F0F0" />
          <rect x="102" y="132" width="70" height="4" rx="1" fill="#F0F0F0" />
        </svg>
      );
    case 4:
      return (
        <svg className="w-full h-full p-4" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="280" height="140" rx="8" fill="white" stroke="#F0F0F0" strokeWidth="2" />
          <rect x="10" y="10" width="280" height="24" rx="8" fill="#F8F9FC" />
          <rect x="10" y="20" width="280" height="14" fill="#F8F9FC" />
          <text x="24" y="26" fill="#1A1A2E" className="text-[9px] font-black uppercase tracking-wider">Google Ads Dashboard</text>

          <rect x="24" y="44" width="70" height="24" rx="6" fill="#C41E56" fillOpacity="0.08" stroke="#C41E56" strokeWidth="1" opacity="0.8" />
          <text x="32" y="54" fill="#64748B" className="text-[7px] font-bold">Clicks</text>
          <text x="32" y="64" fill="#1A1A2E" className="text-[10px] font-bold">14.8K</text>

          <rect x="102" y="44" width="80" height="24" rx="6" fill="#F8F9FC" stroke="#F0F0F0" strokeWidth="1" />
          <text x="110" y="54" fill="#64748B" className="text-[7px] font-bold">Impressions</text>
          <text x="110" y="64" fill="#1A1A2E" className="text-[10px] font-bold">345K</text>

          <g>
            <rect x="190" y="44" width="86" height="24" rx="6" fill="#C41E56" />
            <text x="233" y="58" fill="white" textAnchor="middle" className="text-[9px] font-black">+48% Conversions</text>
          </g>

          <rect x="40" y="105" width="22" height="25" fill="#C41E56" opacity="0.4" rx="3" />
          <rect x="75" y="95" width="22" height="35" fill="#C41E56" opacity="0.4" rx="3" />
          <rect x="110" y="85" width="22" height="45" fill="#C41E56" opacity="0.4" rx="3" />
          <rect x="145" y="98" width="22" height="32" fill="#C41E56" opacity="0.4" rx="3" />
          <rect x="180" y="78" width="22" height="52" fill="#C41E56" opacity="0.4" rx="3" />
          <rect x="215" y="70" width="22" height="60" fill="#C41E56" rx="3" />
          <line x1="30" y1="130" x2="250" y2="130" stroke="#F0F0F0" strokeWidth="1.5" />
        </svg>
      );
    case 5:
      return (
        <svg className="w-full h-full p-4" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="280" height="140" rx="8" fill="white" stroke="#F0F0F0" strokeWidth="2" />

          <rect x="24" y="24" width="100" height="48" rx="6" fill="#F8F9FC" stroke="#F0F0F0" strokeWidth="1" />
          <circle cx="50" cy="48" r="14" fill="#C41E56" opacity="0.1" />
          <path d="M46 48l4-4 4 4-4 4z" fill="#C41E56" />
          <rect x="74" y="44" width="40" height="8" rx="3" fill="#1A1A2E" />

          <text x="140" y="38" fill="#1A1A2E" className="text-[12px] font-black font-display">Outfit Bold</text>
          <text x="140" y="52" fill="#64748B" className="text-[8px] font-sans">Aa Bb Cc Dd Ee Ff 123</text>

          <text x="24" y="96" fill="#64748B" className="text-[8px] font-bold uppercase tracking-wider">Color Palette</text>
          <circle cx="34" cy="120" r="14" fill="#C41E56" stroke="#F0F0F0" strokeWidth="1" />
          <circle cx="70" cy="120" r="14" fill="#1A1A2E" stroke="#F0F0F0" strokeWidth="1" />
          <circle cx="106" cy="120" r="14" fill="#64748B" stroke="#F0F0F0" strokeWidth="1" />

          <rect x="140" y="75" width="136" height="60" rx="6" fill="#F8F9FC" stroke="#F0F0F0" />
          <rect x="150" y="88" width="60" height="8" rx="3" fill="#C41E56" />
          <rect x="150" y="102" width="116" height="5" rx="2" fill="#F0F0F0" />
          <rect x="150" y="112" width="80" height="5" rx="2" fill="#F0F0F0" />
        </svg>
      );
    default:
      return null;
  }
};
