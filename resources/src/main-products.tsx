import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './AppProducts'

ReactDOM.createRoot(document.getElementById('products') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
