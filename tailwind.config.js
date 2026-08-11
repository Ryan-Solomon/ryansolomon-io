/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#00b7c2',
          soft: '#5fd9e0',
        },
        ink: {
          950: '#0b0d0e',
          900: '#111415',
          800: '#181c1e',
          700: '#22282a',
          600: '#2e3538',
          400: '#7c898d',
          200: '#c7d0d2',
          50: '#f4f7f7',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
