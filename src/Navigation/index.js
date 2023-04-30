import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {useAuth} from '../Hooks/useAuth';
import Login from '../Modules/Login/Views'
import Register from '../Modules/Register/Views';
import Products from '../Modules/Products/Views';
import ProductDetail from '../Modules/ProductDetail/Views';
import ProductManagement from '../Modules/ProductManagement/Views';
import Cart from '../Modules/Cart/Views';
import Order from '../Modules/Order/Views';

const Navigation = () => {
  const {authenticated} = useAuth();
  const token = localStorage.getItem('token');

  const ProtectedRoute = ({children}) => {
    if(!authenticated || !token || token === null){
      return <Navigate to='/login' replace />
    }
    return children;
  }

  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <Products />
        </ProtectedRoute>
      } />
      <Route path="/detalle-producto/:productId" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="/orden/:orderId" element={<ProtectedRoute><Order /></ProtectedRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  )
}

export default Navigation