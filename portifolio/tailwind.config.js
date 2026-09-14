export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#090b10',
        surface: '#10131b',
        elevated: '#161a25',
        line: '#282d3b',
        ink: '#f0f2f8',
        muted: '#a0a7b8',
        subtle: '#7e879b',
        cyan: '#69e5e5',
        violet: '#af95ff',
        magenta: '#e29de9',
        success: '#87e4b2',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        display: ['Space Grotesk', 'Segoe UI', 'sans-serif'],
        mono: ['Consolas', 'monospace'],
      },
      maxWidth: { page: '1160px' },
      spacing: { section: '7rem' },
      boxShadow: {
        glass: '0 24px 80px rgb(0 0 0 / 0.2)',
        glow: '0 0 30px rgb(105 229 229 / 0.12)',
      },
    },
  },
  plugins: [],
}
