// ChildComponent.js
import React, { useContext } from 'react';
import MyContext from './MyContext';

const ChildComponent = () => {
  // Access context data using useContext hook
  const { data, setData } = useContext(MyContext);

  const handleClick = () => {
    setData('Updated Value');
  };

  return (
    <div>
      <p>Context Data: {data}</p>
      <button onClick={handleClick}>Update Context</button>
    </div>
  );
};
export default ChildComponent;