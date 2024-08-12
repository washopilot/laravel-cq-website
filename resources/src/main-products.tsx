import { createInertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
    id: 'products',
    resolve: (name) => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
        return pages[`./pages/${name}.tsx`] as React.ReactNode // Asegúrate de que el tipo sea ReactNode
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>
        )
    }
}).then((r) => {})
