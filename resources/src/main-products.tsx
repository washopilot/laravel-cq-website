import { createInertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './pages/components/Layout'

createInertiaApp({
    id: 'products',
    resolve: (name) => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
        let page: any = pages[`./pages/${name}.tsx`]
        page.default.layout = page.default.layout || ((page: any) => <Layout children={page} />)
        return page as React.ReactNode
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>
        )
    }
}).then((r) => {})
