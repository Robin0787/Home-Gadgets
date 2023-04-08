import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Cart from './components/Cart'
import Home from './components/Home'
import Shop from './components/Shop'
import { getStoredData } from './components/Utilities/Utility'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: () => getStoredData(),
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />,
                loader: () => fetch('products.json')
            },
            {
                path: '/cart',
                element: <Cart />,
                loader: () => fetch('products.json')
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
