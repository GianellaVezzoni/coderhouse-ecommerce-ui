import { createContext, useReducer } from "react";

const initialState = {
  products: [],
  total: 0
};

export const CartContext = createContext();

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'ADD_PRODUCTS':
      console.log('payload ', payload)
      let total = 0;
      total = payload?.products?.map(item => item.price + total);
      return {
        ...state,
        products: state.products.push(...payload.products),
        total: total
      };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

export const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{...state, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};