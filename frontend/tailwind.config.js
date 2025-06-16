/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Major Mono Display"', 'monospace'],
      },
    },
  },
  plugins: [],
}
