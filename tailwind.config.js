/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        crimson: ["Crimson Text", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
      color: {
        primaryColor: "#74C69D",
      },
    },
  }  
};
