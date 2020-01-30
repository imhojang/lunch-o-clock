import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({ value, handleSubmit, handleChange }) => {
  const placeholderText = 'Type and press Enter key to add to list'
  return (
    <form className='input-container' onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholderText}
      />
    </form>
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Input
