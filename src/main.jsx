import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Gallery from './pages/Gallery'
import Index, {loader as galleryLoader, loader} from './pages/Index'
import './index.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: galleryLoader,
    children: [
      {
        index: true,
        element: <Index />,
        loader: galleryLoader
      },
      {
        path: '/:id',
        element: <Gallery />,
        loader: galleryLoader
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
