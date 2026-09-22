import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  // Dynamically discover all HTML files for multi-page build support
  const htmlFiles = fs.globSync('**/*.html', {
    exclude: (p: string) => p.includes('node_modules') || p.includes('dist'),
  });

  const currentDir = import.meta.dirname || process.cwd();

  const input: Record<string, string> = {};
  for (const file of htmlFiles) {
    const key = file === 'index.html' ? 'main' : file.replace(/\.html$/, '');
    input[key] = path.resolve(currentDir, file);
  }

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(currentDir, '.'),
      },
    },
    build: {
      rollupOptions: {
        input,
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
