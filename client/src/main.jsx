//React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from './components/App.jsx'
import Home from './components/Home.jsx'
import UserPanel from './components/UserPanel/index.jsx'
import Cart from './components/Cart'
import ErrorPage from './components/ErrorPage.jsx'
import Sticker from './components/Sticker.jsx'

import Fav from './components/Fav'


// CSS
import './index.css'

// React-Router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
        path:'userPanel',
        element: <UserPanel />,
        errorElement: <ErrorPage />
      },
      {
        path: 'fav',
        element: <Fav />,
        errorElement: <ErrorPage />
      },
      {
        path:'cart',
        element: <Cart />,
        errorElement: <ErrorPage />,
        children: [
          {
            path:'sticker/:id',
            element: <Sticker />,
            errorElement: <ErrorPage />
          }
        ]
      }
    ]
  }
]
//router
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
