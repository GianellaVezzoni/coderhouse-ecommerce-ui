import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [products, setProducts] = useState([]);  
  const getProductById = (id) => {   
    return products.find(p => p?.item?.id === id || p?.data?.id === id);
  }  
  
  const addProductToCart = (product) => {
    const existingProduct = getProductById(product?.item?.id || product?.data?.id);
    let newState = [];
    if (existingProduct) {
      newState = products.map((p) => {
        if (p?.item?.id === existingProduct?.item?.id || p?.data?.id === existingProduct?.data?.id) {
          return {
            item: p.item,
            quantity: p.quantity + product.quantity
          }
        }
        return p;
      });
      setProducts(newState);
    };
    setProducts([...products, product]);
  }

  const removeProductFromCart = (product) => {
    const newProducts = products.filter(p => p.item.id !== product.id);
    setProducts(newProducts);
  }

  const deleteCart = () => {
    setProducts([]);
  }

  const contextValue = {
    cart: products,
    addProductToCart,
    removeProductFromCart,
    deleteCart
  };
  
  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
};