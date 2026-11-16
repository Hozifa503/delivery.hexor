import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration. The React plugin lets Vite understand JSX files.
export default defineConfig({
  plugins: [react()],
});
