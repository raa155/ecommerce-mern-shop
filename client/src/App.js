import React from 'react';
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Announcement from './components/Announcement/Announcement';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from 'react-router-dom';



const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Announcement/>
        <Outlet />
        <Footer/>
      </div>
    )
  }


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/products/:id',
        element: <ProductList/>
      },
      {
        path: '/product/:id',
        element: <Product/>
      },
    ]
  }
])

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
