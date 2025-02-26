/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        keyframes: {
          glitchRed: {
            "0%": { transform: "translateX(0)" },
            "20%": { transform: "translateX(-2px) skewX(-5deg)" },
            "40%": { transform: "translateX(2px) skewX(5deg)" },
            "60%": { transform: "translateX(-2px) skewX(-5deg)" },
            "80%": { transform: "translateX(2px) skewX(5deg)" },
            "100%": { transform: "translateX(0)" },
          },
          glitchBlue: {
            "0%": { transform: "translateX(0)" },
            "20%": { transform: "translateX(2px) skewX(5deg)" },
            "40%": { transform: "translateX(-2px) skewX(-5deg)" },
            "60%": { transform: "translateX(2px) skewX(5deg)" },
            "80%": { transform: "translateX(-2px) skewX(-5deg)" },
            "100%": { transform: "translateX(0)" },
          },
        },
        animation: {
          "glitch-red": "glitchRed 0.5s infinite linear alternate",
          "glitch-blue": "glitchBlue 0.5s infinite linear alternate",
        },
      },
    },
  plugins: [],
}

