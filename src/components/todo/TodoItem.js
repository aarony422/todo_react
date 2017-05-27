import React from 'react'

export const TodoItem = ({
  onClick,
  isComplete,
  name
}) => (
  <li
    onClick={onClick}
      style={{
        textDecoration: isComplete ?
          'line-through' :
          'none'
      }}>
    {name}
  </li>
);
