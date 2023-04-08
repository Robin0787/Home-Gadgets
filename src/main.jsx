import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import { getSelectedProducts } from './Custom Loaders/Loaders'
import About from './components/About'
import Cart from './components/Cart'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Shop from './components/Shop'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: getSelectedProducts, 
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />,
            },
            {
                path: '/cart',
                element: <Cart />,
                loader: () => getSelectedProducts()
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(<>
    <Toaster />
    <RouterProvider router={router}/>
</>)
