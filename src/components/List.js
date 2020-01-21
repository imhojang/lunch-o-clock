import React from 'react';

const List = props => {
  const renderedList = props.list.map(item => {
    return <div key={item._id}>{item.name}</div>;
  });

  return <div>{renderedList}</div>;
};

export default List;
