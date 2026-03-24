/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#080808',
        'bg-secondary': '#0d0d0d',
        'bg-surface': '#111111',
        'border-base': '#1e1e1e',
        'border-accent': '#2a2a2a',
        'gold-bright': '#c8a96e',
        'gold-mid': '#9a7a4a',
        'gold-dim': '#5c4a2a',
        'text-primary': '#f0e6c8',
        'text-secondary': '#9a8a6a',
        'text-muted': '#555555',
      },
      fontFamily: {
        display: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        'mono-ui': ['var(--font-jetbrains)', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
        widest4: '0.4em',
      },
    },
  },
  plugins: [],
}
