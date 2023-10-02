import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Root } from './Routes/Root'
import { ErrorPage } from './ErrorPage/ErrorPage'
import { Home } from './Routes/Home/Home'
import { Fleet } from './Routes/Fleet/Fleet'
import { Testimonials } from './Routes/Testimonials/Testimonials'
import { Contact } from './Routes/Contact/Contact'

import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/vehicles',
        element: <Fleet />
      },
      {
        path: '/testimonials',
        element: <Testimonials />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
