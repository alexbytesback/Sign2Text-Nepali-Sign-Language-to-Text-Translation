/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
    './app/**/*.{js,jsx,ts,tsx,md,mdx}',
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      }
    }
  },
  rippleui: {
    removeThemes: ["dark"],
    themes: [
      {
        themeName: "light",
        colorScheme: "light",
        colors: {
          primary: "#F88700",
          backgroundPrimary: "#ffffff",
        }
      }]
  },
  plugins: [
    require("tailwindcss-animate"),
    require("rippleui")
  ]
}