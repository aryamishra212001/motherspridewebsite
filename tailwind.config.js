/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gliker: ['Gliker', 'sans-serif'], // Define your custom font family here
        halimun: ['Halimun', 'sans-serif'], // Define your custom font family here
        nevrada: ['Nevrada', 'sans-serif'], 
      },
      animation: {
        flap: 'flap 0.5s ease-in-out infinite', // Define the animation duration, easing, and infinite loop
      },
      keyframes: {
        flap: {
          '0%, 100%': {
            transform: 'rotate(0deg)', // Starting and ending state
          },
          '50%': {
            transform: 'rotate(30deg)', // Midway (wing flap)
          },
        },
      },
    },
  },
  plugins: [],
};
