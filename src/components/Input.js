import React from 'react';

const Input = (props) => {
  return (
    <form onSubmit={(e) => props.handleSubmit(e)}>
      <input
        type='text'
        value={props.value}
        onChange={(e) => props.handleChange(e)}
      />
      <button>Submit</button>
    </form>
  );
};

export default Input;
