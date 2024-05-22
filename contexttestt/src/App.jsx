// App.js
import React from 'react';
import { MyContextProvider } from './MyContext';
import ChildComponent from './ChildComponent';

const App = () => {
  return (
    <MyContextProvider>
      <div>
        <h1>My App</h1>
        <ChildComponent />
      </div>
    </MyContextProvider>
  );
};

export default App;