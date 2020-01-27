import React from 'react';
import './List.css';
import { Icon } from 'antd';

const List = ({ items, handleDelete }) => {
  const renderedList = items.map(item => {
    return (
      <li key={item._id}>
          <span>{item.name}</span>
          {handleDelete && (
            <Icon
              className='remove-person-button'
              type='close-square'
              theme='outlined'
              onClick={() => handleDelete(item.name)}
            />
          )}
      </li>
    );
  });

  return <ul>{renderedList}</ul>;
};

export default List;
