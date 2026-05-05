/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#0a0812',
        surface: 'rgba(255,255,255,0.04)',
        love: '#e8607a',
        trauma: '#2ec4b6',
        styleQ: '#5a9ef5',
        woundQ: '#f07e5a',
        healingQ: '#56cfb2',
        compassionQ: '#ecc94b',
        phq9Q: '#9b8ff5',
        gad7Q: '#f472b6',
        emregQ: '#a8a1f8',
      }
    }
  },
  plugins: []
}
