// MyContext.js
import React, { createContext, useState } from 'react';

// Create a context with a default value
const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState('Initial Value');

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;