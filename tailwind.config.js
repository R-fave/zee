/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-desk": 'url("/src/assets/land.png")',
        "bg-mobile": 'url("/src/assets/por.png")',
      },
    },
  },
  plugins: [],
};
