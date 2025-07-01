/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'marcellus': ['Marcellus', 'serif'],
        'sans': ['Marcellus', 'serif'],
        'serif': ['Marcellus', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      backgroundImage: {
        'gothic-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f0f 100%)',
        'purple-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        'dots': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
      },
      backgroundSize: {
        'dots': '20px 20px',
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.3)',
        'glow-red': '0 0 20px rgba(239, 68, 68, 0.3)',
      }
    },
  },
  plugins: [],
}