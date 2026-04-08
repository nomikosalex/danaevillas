import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Swiss Minimalist aesthetic colors
        'swiss-dark': '#111111',
        'swiss-gray': '#EFEFEF',
        'swiss-white': '#FAFAFA',
      },
      spacing: {
        // Enforcing strict 8pt grid aliases if needed, though Tailwind 4, 8, 12, 16 align perfectly
      },
    },
  },
  plugins: [],
};
export default config;
