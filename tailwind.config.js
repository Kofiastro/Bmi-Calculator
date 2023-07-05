/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      },
      colors: {
        Blue: 'hsl(227, 92%, 58%)',
        GunMetal: 'hsl(215, 31%, 21%)',
        DarkBlue: 'hsl(215, 17%, 45%)',
        Borders: 'hsl(200, 24%, 88%)',
        heroB: "hsl(207,94%,92%)",
      }
    },
  },
  plugins: [
   
  ],
}

