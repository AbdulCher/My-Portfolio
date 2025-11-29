/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#001524',
          blue: '#27818f',
          orange: '#ff7d00',
          light: '#ece5dd',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
      }
    }
  }
};
