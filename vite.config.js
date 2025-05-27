import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

console.log("VITE CONFIGURATION FILE");

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tailwindcss({
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
    }),
  ],
});
