/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'jet': {
          950: '#0a0a0a',
          900: '#121212',
          800: '#1a1a1a',
          700: '#242424',
        },
        'graphite': {
          600: '#404040',
          500: '#525252',
          400: '#6b6b6b',
        },
        'silver': {
          400: '#a3a3a3',
          300: '#b8b8b8',
          200: '#d4d4d4',
          100: '#e8e8e8',
        },
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
      },
      lineHeight: {
        'heading': '1.2',
        'body': '1.5',
      },
    },
  },
  plugins: [],
};
