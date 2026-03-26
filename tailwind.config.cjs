/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",
        "ink-card": "#064e3b",
        muted: "#5b657a",
        soft: "#eef1f7",
        brand: "#1e6bff",
        "bg-top": "#f4f9ff",
        "bg-mid": "#ffffff",
        "sea-500": "#0ea5e9",
        palm: "#10b981",
        sun: "#f59e0b",
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        quicksand: [
          "Quicksand",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 12px 32px rgba(0, 0, 0, 0.25)",
        register: "0 12px 28px rgba(0, 0, 0, 0.3)",
        "register-hover": "0 16px 32px rgba(0, 0, 0, 0.35)",
        "register-active": "0 8px 18px rgba(0, 0, 0, 0.22)",
        highlight: "0 2px 8px rgba(0, 0, 0, 0.08)",
        social: "0 4px 12px rgba(0, 0, 0, 0.1)",
        "social-hover": "0 8px 20px rgba(0, 153, 255, 0.35)",
      },
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-4px) rotate(1deg)" },
        },
      },
      animation: {
        bob: "bob 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
