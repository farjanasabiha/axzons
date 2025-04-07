/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Scans the App Router directory
    "./src/app/components/**/*.{js,ts,jsx,tsx}", // Scans the components directory
    "./pages/**/*.{js,ts,jsx,tsx}", // If using the Pages Router
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors
        primary: {
          DEFAULT: "#7e22ce", // Default primary color
          50: "#F5F2FF", // Lightest shade
          100: "#E9E2FE",
          200: "#D5C6FD",
          300: "#BAA0FB",
          400: "#9D72F8",
          500: "#6E4FF6", // Base color
          600: "#5D3BD4",
          700: "#4C2CB2",
          800: "#3D218F",
          900: "#2F1974", // Darkest shade
        },
        secondary: "#F8F3FE",
        accent: "#FF6B6B",
        success: "#48BB78",
        warning: "#ED8936",
        danger: "#E53E3E",
        dark: "#1A202C",
        light: "#F7FAFC",

        // Custom named colors
        "brand-blue": "#3B82F6",
        "brand-purple": "#8B5CF6",
        "text-primary": "#2D3748",
        "text-secondary": "#4A5568",
      },
      animation: {
        border: "border 4s linear infinite",
        "infinite-scroll": "infinite-scroll 15s linear infinite",

        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        border: {
          to: { "--border-angle": "360deg" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
