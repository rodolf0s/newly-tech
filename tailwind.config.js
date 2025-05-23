console.log("TAILWIND CONFIGURATION FILE");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#D700F3FF",
    },
    extend: {
      colors: {
        primary: "#0070f3",
        secondary: "#f7fafc",
        accent: "#F300D7FF",
        error: "#dc2626",
        success: "#10b981",
        warning: "#fbbf24",
        textPrimary: "#5EA413FF",
      },
    },
  },
  plugins: [],
};
