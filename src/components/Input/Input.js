import React from 'react';
import './Input.css';

const Input = ({ value, handleSubmit, handleChange }) => {
  const placeholderText = 'Type and press Enter key to add to list';
  return (
    <form className='input-container' onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        placeholder={placeholderText}
      />
    </form>
  );
};

export default Input;
