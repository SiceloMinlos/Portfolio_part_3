/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {
    //   backgroundImage: {
    //     'gradient-primary-500-300-45deg': 'linear-gradient(45deg, #1687ac 0%, #41bde7 100%)',
    //     'gradient-primary-900-300-45deg': 'linear-gradient(45deg, #19295a 0%, #2ec3fb 100%)',
    //     'gradient-primary-900-700-45deg': 'linear-gradient(45deg, #13161e 0%, #111727 34.35%, #0e4b61 100%)',
    //     'gradient-primary-400-200-45deg': 'linear-gradient(45deg, #1caad9 0%, #4cc8f1 100%)',
    //   },
    // },
    // colors: {
    //   brown: 'rgb(153, 73, 0)',
    // },
  },
  plugins: [],
}