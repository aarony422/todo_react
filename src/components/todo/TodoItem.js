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

TodoItem.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  isComplete: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired
}
