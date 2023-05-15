import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    reporters: ['junit'],
    coverage: {
      reporter: ['text', 'json', 'html', 'cobertura'],
      provider: "istanbul",
    },
    environment: 'jsdom',
    globals: true,
  }
})