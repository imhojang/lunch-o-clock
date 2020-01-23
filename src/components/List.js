import React from 'react';

const List = ({ items, handleDelete }) => {
  const renderedList = items.map(item => {

    return <div key={item._id}>{item.name}<button onClick={() => handleDelete(item.name)}>X</button></div>;
  });

  return <div>{renderedList}</div>;
};

export default List;
