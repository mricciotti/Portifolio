/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#03040a",
          900: "#070a16",
          800: "#0c1024",
          700: "#12172f",
          600: "#1a2140",
        },
        neon: {
          cyan: "#22d3ee",
          purple: "#a855f7",
          magenta: "#ec4899",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        "glow-cyan": "0 0 25px 0 rgba(34, 211, 238, 0.35)",
        "glow-purple": "0 0 25px 0 rgba(168, 85, 247, 0.35)",
        "glow-magenta": "0 0 25px 0 rgba(236, 72, 153, 0.3)",
        "glow-soft": "0 0 60px 0 rgba(34, 211, 238, 0.12)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
        "aurora-gradient":
          "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.18), transparent 45%), radial-gradient(circle at 80% 30%, rgba(168,85,247,0.18), transparent 45%), radial-gradient(circle at 50% 80%, rgba(236,72,153,0.14), transparent 45%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 18s ease infinite",
      },
    },
  },
  plugins: [],
}

