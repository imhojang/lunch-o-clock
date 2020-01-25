import React from 'react';

const List = ({ items, handleDelete }) => {
  const renderedList = items.map(item => {

    return <li key={item._id}>
      {item.name} 
      {handleDelete && <button onClick={() => handleDelete(item.name)}>X</button>}
      </li>;
  });

  return <ul>{renderedList}</ul>;
};

export default List;
