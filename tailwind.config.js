/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#C41E56',    // Deep Crimson (from logo A letter — professional)
          accent: '#E8601A',     // Burnt Orange (from logo bottom gradient)
          navy: '#1A1A2E',       // Deep Navy (logo dark base)
          dark: '#1A1A2E',       // Alias for navy
          orange: '#C41E56',     // Backward compat — mapped to primary
          secondary: '#4B5563',  // Professional neutral body text (gray-600)
          muted: '#9CA3AF',      // Neutral subtext (gray-400)
          light: '#F9FAFB',      // Light background (gray-50)
          border: '#E5E7EB',     // Border (gray-200)
          divider: '#D1D5DB',    // Dividers (gray-300)
          cta: '#2563EB',        // Primary action buttons (Blue)
          ctaHover: '#1d4ed8',   // Primary action buttons — hover state
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0,0,0,0.08)',
        'nav': '0 2px 8px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
