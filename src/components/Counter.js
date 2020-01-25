import React from 'react';

const Counter = ({ count, decrement, increment }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
