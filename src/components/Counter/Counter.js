import React from 'react';
import './Counter.css';
import { Icon } from 'antd';

const Counter = ({ count, decrement, increment }) => {
  return (
    <div className='counter-container'>
      <Icon type='minus' onClick={decrement} />
      <span>{count}</span>
      <Icon type='plus' onClick={increment} />
    </div>
  );
};

export default Counter;
