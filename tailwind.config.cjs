/** @type {import('tailwindcss').Config} */
const {
  scrollbarGutter,
  scrollbarWidth,
  scrollbarColor,
} = require("tailwind-scrollbar-utilities");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    animation: {
      marquee: "marquee 25s linear infinite",
      marquee2: "marquee2 25s linear infinite",
      "fade-in": "fade-in 0.5s linear forwards",
    },
    keyframes: {
      marquee: {
        "0%": {
          transform: "translateX(0%)",
        },
        "100%": {
          transform: "translateX(-100%)",
        },
      },
      marquee2: {
        "0%": {
          transform: "translateX(100%)",
        },
        "100%": {
          transform: "translateX(0%)",
        },
      },
      "fade-in": {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      },
      scroller3: {
        "100%": {
          transform: "translateY(-50%)",
        },
      },
    },
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    extend: {
      keyframes: {
        disco: {
          "0%": {
            transform: "translateY(-50%) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(-50%) rotate(360deg)",
          },
        },
      },
      animation: {
        disco: "disco 1.5s linear infinite",
      },
      colors: {
        vulcan: {
          50: "#EFF0F5",
          100: "#DFE1EC",
          200: "#BFC3D9",
          300: "#9FA5C6",
          400: "#8087B3",
          500: "#636CA1",
          600: "#4E5683",
          700: "#3B4163",
          800: "#282C43",
          900: "#151723",
          950: "#0B0D13",
        },
        danger: {
          50: "hsl(327, 73%, 97%)",
          100: "hsl(326, 78%, 95%)",
          200: "hsl(326, 81%, 90%)",
          300: "hsl(328, 85%, 82%)",
          400: "hsl(329, 83%, 70%)",
          500: "hsl(331, 79%, 64%)",
          600: "hsl(334, 70%, 51%)",
          700: "hsl(336, 76%, 42%)",
          800: "hsl(336, 72%, 35%)",
          900: "hsl(337, 68%, 30%)",
          950: "hsl(337, 82%, 17%)",
        },
        warning: {
          50: "hsl(40, 90%, 96%)",
          100: "hsl(39, 86%, 89%)",
          200: "hsl(40, 87%, 77%)",
          300: "hsl(38, 87%, 65%)",
          400: "hsl(35, 87%, 56%)",
          500: "hsl(30, 83%, 50%)",
          600: "hsl(24, 85%, 44%)",
          700: "hsl(18, 81%, 37%)",
          800: "hsl(15, 74%, 31%)",
          900: "hsl(13, 70%, 26%)",
          950: "hsl(13, 83%, 14%)",
        },
        success: {
          50: "hsl(74, 84%, 95%)",
          100: "hsl(77, 82%, 89%)",
          200: "hsl(78, 83%, 80%)",
          300: "hsl(79, 79%, 64%)",
          400: "hsl(80, 73%, 55%)",
          500: "hsl(81, 75%, 44%)",
          600: "hsl(82, 80%, 35%)",
          700: "hsl(83, 74%, 27%)",
          800: "hsl(83, 64%, 23%)",
          900: "hsl(84, 57%, 20%)",
          950: "hsl(86, 76%, 10%)",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "5rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide"),
    scrollbarGutter(),
    scrollbarWidth(),
    scrollbarColor(),
  ],
};
