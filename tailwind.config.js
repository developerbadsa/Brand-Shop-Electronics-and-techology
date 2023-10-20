module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // darkMode: ['dark', '[data-mode="dark"]'],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
