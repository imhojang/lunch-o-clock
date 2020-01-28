import React from 'react';
import './Counter.css';
import { IncrementIcon, DecrementIcon } from '../../utils/Icons';

const Counter = ({ count, decrement, increment }) => {
  return (
    <div className='counter-container'>
      <DecrementIcon handleClick={decrement} />
      <span>{count}</span>
      <IncrementIcon handleClick={increment} />
    </div>
  );
};

export default Counter;
