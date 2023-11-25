import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
     watch: {
      //  watch for file changes; Vite will push update to the client without a full page refresh
       usePolling: true
     }
  }
})