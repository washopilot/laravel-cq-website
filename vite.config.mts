import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react(), laravel(['resources/src/main.tsx', 'resources/src/main-products.tsx'])],
    server: {
        hmr: {
            host: 'localhost'
        }
    }
})
