/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f7da67",
        
"secondary": "#0c6670",
        
"accent": "#cfd60a",
        
"neutral": "#1D1424",
        
"base-100": "#FCFDFD",
        
"info": "#4BA4CE",
        
"success": "#21AB78",
        
"warning": "#F1BC1E",
        
"error": "#E02E61",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
