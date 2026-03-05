import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Resolve paths for easier imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Allows you to import from src as '@'
    },
  },
  
  // Environment variables handling
  define: {
    'process.env': process.env,  // Makes process.env available in your code
  },
  
  // CSS preprocessor options (e.g., for SCSS)
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`, // You can auto-import global SCSS variables, mixins, etc.
      },
    },
  },
  
  // Build optimizations (optional)
  build: {
    outDir: 'build',  // Output directory for production build
    target: 'esnext',  // Modern build target
    minify: 'terser',  // Minification with Terser
    chunkSizeWarningLimit: 2000,  // Increases the chunk size limit
  },

  // Server settings
  server: {
    open: true,  // Automatically open the app in the browser
    proxy: {
      '/api': 'http://localhost:5000',  // Proxy API requests to your backend server
    },
  },

  // Optimizations for dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],  // Pre-bundle React and React DOM for better performance
  },
});
