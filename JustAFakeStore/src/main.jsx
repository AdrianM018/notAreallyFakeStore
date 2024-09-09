import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './HomePage'
import CategoryPage from './reactComponents/CategoryPage'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SingleProduct from './reactComponents/SingleProduct'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/CategoryPage',
    element: <CategoryPage/>
  },
  {
    path: '/SingleProductPage',
    element: <SingleProduct/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <HomePage/>
    </RouterProvider>
  </StrictMode>,
)
