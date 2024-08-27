
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Categories from './components/Categories'
import Brands from './components/Brands.jsx'
import NotFound from './components/NotFound'
import CounterContextProvider from './context/CounterContext.jsx'
import AuthContextProvider from './context/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import ProtectedAuthRoute from './components/ProtectedAuthRoute.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import { ToastContainer } from 'react-toastify'
import ShippingAddress from './components/ShippingAddress.jsx'
import Orders from './components/Orders.jsx'
import { Offline } from "react-detect-offline";
import Products from './components/Products.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import WishLIst from './components/WishLIst.jsx'


function App() {

  const queryClient = new QueryClient()

  let routes = createBrowserRouter([{
    path: '/', element: <Layout></Layout>, children: [
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: '/login', element: <ProtectedAuthRoute><Login /></ProtectedAuthRoute> },
      { path: '/register', element: <ProtectedAuthRoute><Register /></ProtectedAuthRoute> },
      { path: '/products', element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: '/cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: '/categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: '/brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: '/allorders', element: <ProtectedRoute><Orders /></ProtectedRoute> },
      { path: '/wish list', element: <ProtectedRoute><WishLIst /></ProtectedRoute> },
      { path: '/shippingAddress/:cartId', element: <ProtectedRoute><ShippingAddress /></ProtectedRoute> },
      { path: '/productDetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
      { path: '*', element: <NotFound></NotFound> }
    ]
  }])

  return (

    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <CounterContextProvider>
          <RouterProvider router={routes}></RouterProvider>
          <ToastContainer />
        </CounterContextProvider>
      </AuthContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>

  )
}

export default App
