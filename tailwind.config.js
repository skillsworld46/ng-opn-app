/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';
module.exports = {
    content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
    darkMode: ['selector', '[class~="my-app-dark"]'],  
  plugins: [PrimeUI],
}
