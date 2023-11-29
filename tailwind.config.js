/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0930D1',
        primaryDark: '#07189B',
        secondary: '#F87E49',
        secondaryDark: '#EE6842',
      },
      fontFamily:{
        sans: ['Inter', 'sans-serif'],
        hedvig: ['Hedvig Letters Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
