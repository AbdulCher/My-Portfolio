// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Minification aggressive
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Retire les console.log
        drop_debugger: true,
      },
    },
    // Code splitting optimisé
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les vendors (bibliothèques)
          'react-vendor': ['react', 'react-dom'],
          'icons': ['react-icons/fa', 'react-icons/fi'],
          'aos': ['aos'],
        },
      },
    },
    // Taille des chunks
    chunkSizeWarningLimit: 1000,
  },
  // Optimisations supplémentaires
  optimizeDeps: {
    include: ['react', 'react-dom', 'aos'],
  },
})