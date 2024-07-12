import React from 'react';

const ListElements = ({ title, items }) => {
  return (
    <ul style={{ flex: 1 }}>
      <p style={{ color: "#94FF10" }}>{title}</p>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListElements;
