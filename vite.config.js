import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      overrideConfig: {
        rules: {
          "no-unused-vars": "off", // Example rule set to warning
          // Other ESLint rules...
        },
      },
    }),
  ],
});
