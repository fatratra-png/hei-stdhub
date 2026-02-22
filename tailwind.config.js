/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          dark: '#0f1e35',
          light: '#243356',
        },
        gold: {
          DEFAULT: '#F5C518',
          dark: '#d4a914',
          light: '#ffd740',
        },
        cyan: {
          td: '#00BCD4',
        },
        exam: {
          red: '#E53935',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}