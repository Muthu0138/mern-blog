import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    build: {
      outDir: 'dist', // Output directory for the build
    },
    proxy:{
      '/api': {
        target: 'http://localhost:3000',
        secure : false,
      },
    },
  },
  plugins: [react()],
})
