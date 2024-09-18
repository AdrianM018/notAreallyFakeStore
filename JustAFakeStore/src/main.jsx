import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './HomePage'
import CategoryPage from './reactComponents/CategoryPage'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SingleProduct from './reactComponents/SingleProduct'
import Cart from './reactComponents/Cart'
import SearchPage from './reactComponents/SearchPage'


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
  },
  {
    path: '/Cart',
    element: <Cart/>
  },
  {
    path: '/SearchPage',
    element: <SearchPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <HomePage/>
    </RouterProvider>
  </StrictMode>,
)
