import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/src/main.tsx', 'resources/src/main-products.tsx'],
            refresh: true
        })
    ],
    server: {
        hmr: {
            host: 'localhost'
        }
    }
})
