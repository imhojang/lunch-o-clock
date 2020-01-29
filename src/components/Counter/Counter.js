import React from 'react';
import './Counter.css';
import { IncrementIcon, DecrementIcon } from '../../utils/Icons';

const Counter = ({ count, decrement, increment, updateCount }) => {
  return (
    <div className='counter-container'>
      <DecrementIcon className='decrement-button' handleClick={decrement} />
      <input
        className='count'
        name='count-input'
        value={count}
        onChange={e => updateCount(e.target.value)}
      />
      <IncrementIcon className='increment-button' handleClick={increment} />
    </div>
  );
};

export default Counter;
