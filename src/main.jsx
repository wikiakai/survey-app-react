import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Welcome from './pages/Welcome'
import Survey from './pages/Survey'
import Error from './pages/Error'
import Done from './pages/Done'
import End from './pages/End'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/survey',
    element: <Survey />,
  },
  {
    path: '/done',
    element: <Done />,
  },
  {
    path: '/end',
    element: <End />,
  },
  {
    path: '*',
    element: <Error />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
