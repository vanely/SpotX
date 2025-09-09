import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      global: 'globalThis',
      'process.env': JSON.stringify(env),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: '0.0.0.0', // Allow external connections (needed for Docker)
      port: 3000,
      watch: {
        usePolling: true, // Enable polling for file watching in Docker
        interval: 1000, // Polling interval in milliseconds
      },
      proxy: {
        '/api': {
          target: 'http://localhost:3333',
          changeOrigin: true,
        },
      },
    },
  };
});
