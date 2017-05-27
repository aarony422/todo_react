import React from 'react'

export const AddTodo = ({
  onAddClick
}) => {
  let input;
  return (
    <div>
      <input ref={node => {
          input = node;
        }}/>
      <button
        onClick={() => {
          onAddClick(input.value);
          input.value = '';
        }}>
        Add Todo
      </button>
    </div>
  )
}

AddTodo.propTypes = {
  onAddClick: React.PropTypes.func.isRequired
}
