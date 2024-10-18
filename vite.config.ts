/// <reference types="vitest" />
import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  test: {
    environment: "jsdom", // Configura el entorno para simular el DOM en las pruebas
    globals: true, // Permite usar las expectativas como `expect()` globalmente
    setupFiles: "./src/setupTests.ts", // Archivo opcional para configurar el entorno de prueba
  },
});
