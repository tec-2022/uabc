/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'sans-serif']
      },
      colors: {
        primary: {
          50:'#ecf7f1',100:'#d6efe2',200:'#a7dfc2',300:'#77cfa3',400:'#47bf83',
          500:'#0b6b3a',600:'#0a5f35',700:'#094f2c',800:'#0a4226',900:'#083321'
        },
        accent: {
          50:'#fff8e6',100:'#ffefc2',200:'#ffe28a',300:'#ffd452',400:'#ffca2e',
          500:'#c9a227',600:'#b88a1e',700:'#8f6b18',800:'#6b5012',900:'#513d0e'
        },
        slateDeep: '#0f172a'
      }
    }
  },
  plugins: []
};
