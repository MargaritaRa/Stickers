//React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from './components/App.jsx'
import Home from './components/Home.jsx'
import UserPanel from './components/UserPanel/index.jsx'
import CartPage from './components/CartPage.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Sticker from './components/Sticker.jsx'
import ShopNow from './components/ShopNow.jsx'
import PaymentPage from './components/PaymentPage.jsx'


// CSS
import './index.css'

// React-Router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CurrentUserProvider } from './components/CurrentUserContext.jsx';

//routes
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true, 
        element: <Home />, 
        errorElement: <ErrorPage /> 
      },
      { 
        path: 'shopnow', 
        element: <ShopNow />, 
        errorElement: <ErrorPage /> 
      },
      { 
        path: 'cart', 
        element: <CartPage />, 
        errorElement: <ErrorPage />, 
        children: [
          { 
            path: 'payment', 
            element: <PaymentPage />, 
            errorElement: <ErrorPage /> 
          }
        ],
      },
      { 
        path: 'userPanel', 
        element: <UserPanel />, 
        errorElement: <ErrorPage /> 
      },
    ],
  },
];


//router
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurrentUserProvider>
      <RouterProvider router={router} />
    </CurrentUserProvider>
  </React.StrictMode>
)
