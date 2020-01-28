import React from 'react';

export const DeleteIcon = ({ className, handleClick, item }) => {
  return (
    <svg
      width='24'
      height='24'
      xmlns='http://www.w3.org/2000/svg'
      fill-rule='evenodd'
      clip-rule='evenodd'
      viewBox='0 0 25 25'
      className={className}
      onClick={() => handleClick(item.name)}
    >
      <path d='M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z' />
    </svg>
  );
};

export const IncrementIcon = ({ handleClick }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      onClick={handleClick}
    >
      <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
    </svg>
  );
};

export const DecrementIcon = ({ handleClick }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      onClick={handleClick}
    >
      <path d='M0 10h24v4h-24z' />
    </svg>
  );
};
