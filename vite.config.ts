import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// ========================================
// TIME KAMU — VITE CONFIGURATION
// Desktop + Mobile Production Setup
// ========================================

export default defineConfig({

  // GitHub Pages repository path
  base: '/TIME-KAMU-THE-SERIES/',

  // Application plugins
  plugins: [
    react(),
    tailwindcss()
  ],

  // Development server
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true
  },

  // Production build
  build: {

    target: 'es2020',

    outDir: 'dist',

    assetsDir: 'assets',

    sourcemap: false,

    minify: 'esbuild',

    cssMinify: true,

    chunkSizeWarningLimit: 1000,

    rollupOptions: {

      output: {

        manualChunks(id) {

          if (id.includes('node_modules')) {

            if (
              id.includes('framer-motion')
            ) {
              return 'motion';
            }

            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('scheduler')
            ) {
              return 'react';
            }

            if (
              id.includes('lenis')
            ) {
              return 'smooth-scroll';
            }

          }

        }

      }

    }

  },

  // Resolve source extensions
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.jsx',
      '.js'
    ]
  }

});
