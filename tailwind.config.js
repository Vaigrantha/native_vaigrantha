module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "p-black": ["Poppins-Black", "sans-serif"],
        "p-bold": ["Poppins-Bold", "sans-serif"],
        "p-extrabold": ["Poppins-ExtraBold", "sans-serif"],
        "p-extralight": ["Poppins-ExtraLight", "sans-serif"],
        "p-light": ["Poppins-Light", "sans-serif"],
        "p-medium": ["Poppins-Medium", "sans-serif"],
        "p-regular": ["Poppins-Regular", "sans-serif"],
        "p-semibold": ["Poppins-SemiBold", "sans-serif"],
        "p-thin": ["Poppins-Thin", "sans-serif"],
      },
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#cc0066",
          100: "#cc00cc",
          200: "#ff00ff",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
    },
  },
  plugins: [],
};
