import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Orders from './components/pages/orders'
import Shoes from './components/pages/shoes'
import Suppliers from './components/pages/suppliers'
import Supplies from './components/pages/supplies'
import Sellers from './components/pages/sellers'
import ProductForm from './components/ProductForm'
import AdminForm from './components/AdminForm'
import EditForm from './components/EditForm.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'viewdata/shoes',
        element: <Shoes />,
      },
      {
        path: 'viewdata/supplies',
        element: <Supplies />,
      },
      {
        path: 'viewdata/orders',
        element: <Orders />,
      },
      {
        path: 'viewdata/suppliers',
        element: <Suppliers />,
      },
      {
        path: 'viewdata/sellers',
        element: <Sellers />,
      },
    ],
  },
  {
    path: '/form',
    element: <ProductForm />,
  },
  {
    path: '/adminform',
    element: <AdminForm />,
  },
  {
    path: '/editform',
    element: <EditForm />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
