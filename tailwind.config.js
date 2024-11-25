/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'sm-md': ['16px', '22px'], // For small devices
        'md-lg': ['20px', '26px'], // For medium devices
      },
      screens: {
        // Optional: Define custom breakpoints if needed
        
      },
      colors: {
        darkGreen: '#003121',
      },
    },
  },
  plugins: [],
};

