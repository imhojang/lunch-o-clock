import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({ value, handleSubmit, handleChange, placeholderText }) => {
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
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  placeholderText: PropTypes.string
}

export default Input
