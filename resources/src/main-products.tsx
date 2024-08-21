import { createInertiaApp } from '@inertiajs/inertia-react'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
    id: 'products',
    resolve: (name) => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
        return pages[`./pages/${name}.tsx`] as React.ReactNode
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <React.StrictMode>
                <AnimatePresence mode='wait'>
                    <App {...props} />
                </AnimatePresence>
            </React.StrictMode>
        )
    }
}).then((r) => {})
