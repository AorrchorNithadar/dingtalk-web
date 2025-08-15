/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        backgroundPrimary: {
          DEFAULT: "var(--primary)",
          red: "var(--red-test)",
        },
      },
    },
  },
  plugins: [],
}
