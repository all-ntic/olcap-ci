export default {
  plugins: [],
  server: {
    headers: {
      // Cache static assets for 1 year
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  },
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-dialog'],
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority']
        }
      }
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000
  }
}
