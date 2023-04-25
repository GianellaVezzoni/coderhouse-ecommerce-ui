import React from 'react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import { AuthProvider } from './Context/AuthContext';
import { CartProvider } from './Context/CartContext';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <MantineProvider>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </MantineProvider>
      </CartProvider>
    </AuthProvider>
  )
}
export default App;
