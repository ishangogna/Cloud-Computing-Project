import React, { useState, createContext, useReducer } from 'react';
import UserReducer from '../reducers/userReducer'

export const UserContext = createContext();

const UserContextProvider = (props) => {
   const [current, dispatchUser] = useReducer(UserReducer,{
       username : ''
   })
   return(
       <UserContext.Provider value = {{current, dispatchUser}}> 
           {props.children}
       </UserContext.Provider>
   )
}
export default UserContextProvider;