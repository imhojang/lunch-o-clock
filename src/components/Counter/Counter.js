import React from 'react'
import PropTypes from 'prop-types'
import './Counter.css'
import { IncrementIcon, DecrementIcon } from '../Icon'

const Counter = ({ count, decrement, increment, updateCount }) => {
  return (
    <div className='counter-container'>
      <DecrementIcon className='decrement-button' handleClick={decrement} />
      <input
        className='count'
        name='count-input'
        type='number'
        value={count}
        onChange={e => updateCount(e.target.value)}
      />
      <IncrementIcon className='increment-button' handleClick={increment} />
    </div>
  )
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  updateCount: PropTypes.func
}

export default Counter
