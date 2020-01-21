import React from 'react';

const List = ({ items }) => {
  const renderedList = items.map(item => {
    return <div key={item._id}>{item.name}</div>;
  });

  return <div>{renderedList}</div>;
};

export default List;
