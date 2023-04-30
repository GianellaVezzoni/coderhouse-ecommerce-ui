import { createContext, useReducer } from "react";

const initialState = {
  authenticated: false,
  userId: '',
  userName: '',
  email: '',
};

export const AuthContext = createContext();

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        authenticated: true,
        email: payload.email,
        token: payload.token,
        userId: payload.userId
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        authenticated: false,
        userName: '',
        email: '',
      };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};