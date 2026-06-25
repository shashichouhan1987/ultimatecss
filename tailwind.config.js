/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['General Sans', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
      },
      colors: {
        accent: '#eb4242',
        brand: {
          black: '#000000',
          white: '#ffffff',
          gray: '#888888',
          light: '#f7f7f7',
        },
      },
      boxShadow: {
        premium: '0 20px 50px -12px rgba(0, 0, 0, 0.08)',
        glow: '0 0 40px -5px rgba(235, 66, 66, 0.3)',
        card: '0 10px 40px -10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
