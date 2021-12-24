import React, { useState, createContext, useReducer } from 'react';
import AuthReducer from '../reducers/authReducer'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
   const [user, dispatch] = useReducer(AuthReducer,{
       isAuthenticated : false,
   })
   return(
       <AuthContext.Provider value = {{user, dispatch}}> 
           {props.children}
       </AuthContext.Provider>
   )
}
export default AuthContextProvider;