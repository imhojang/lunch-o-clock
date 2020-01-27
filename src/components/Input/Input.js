import React from 'react';
import './Input.css';

const Input = (props) => {
  const placeholderText = 'Type and press Enter key to add to list'
  return (
    <form className='input-container' onSubmit={props.handleSubmit}>
      <input
        type='text'
        value={props.value}
        onChange={props.handleChange}
        placeholder={placeholderText}
      />
    </form>
  );
};

export default Input;
