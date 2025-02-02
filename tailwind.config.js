/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'lijeva' : ['Playwrite HR Lijeva', 'cursive'],
        'poppins' : ['Poppins', 'sans-serif'],
        'roboto' : ['Roboto', 'sans-serif'],
        'ubuntu' : ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

