import type { Config } from "tailwindcss";

// Helper for opacity with CSS variables
function withOpacity(variableName: string): any {
  return ({ opacityValue }: { opacityValue?: string }) => {
    if (opacityValue !== undefined) {
      return `color-mix(in oklab, var(${variableName}) calc(${opacityValue} * 100%), transparent)`;
    }
    return `var(${variableName})`;
  };
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: withOpacity("--background"),
        foreground: withOpacity("--foreground"),
        card: {
          DEFAULT: withOpacity("--card"),
          foreground: withOpacity("--card-foreground"),
        },
        popover: {
          DEFAULT: withOpacity("--popover"),
          foreground: withOpacity("--popover-foreground"),
        },
        primary: {
          DEFAULT: withOpacity("--primary"),
          foreground: withOpacity("--primary-foreground"),
        },
        secondary: {
          DEFAULT: withOpacity("--secondary"),
          foreground: withOpacity("--secondary-foreground"),
        },
        muted: {
          DEFAULT: withOpacity("--muted"),
          foreground: withOpacity("--muted-foreground"),
        },
        accent: {
          DEFAULT: withOpacity("--accent"),
          foreground: withOpacity("--accent-foreground"),
        },
        border: withOpacity("--border"),
        input: withOpacity("--input"),
        ring: withOpacity("--ring"),
        ink: {
          DEFAULT: withOpacity("--ink"),
          soft: withOpacity("--ink-soft"),
        },
        parchment: {
          DEFAULT: withOpacity("--parchment"),
          2: withOpacity("--parchment-2"),
        },
        teal: {
          DEFAULT: withOpacity("--teal"),
          deep: withOpacity("--teal-deep"),
          soft: withOpacity("--teal-soft"),
        },
        gold: {
          DEFAULT: withOpacity("--gold"),
          deep: withOpacity("--gold-deep"),
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Crimson Pro", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-body)", "Work Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Work Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
    },
  },
  plugins: [],
};

export default config;
