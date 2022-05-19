import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/modal'
import 'react-toastify/dist/ReactToastify.min.css'
import App from './app'
import { AppProvider } from './contexts/app'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <AppProvider>
        <App />
    </AppProvider>
)
