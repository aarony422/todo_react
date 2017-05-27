import React from 'react'
import { generateId } from '../../lib/todoHelpers'

export const AddTodo = ({
  store
}) => {
  let input;
  return (
    <div>
      <input ref={node => {
          input = node;
        }}/>
      <button
        onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            id: generateId(),
            name: input.value
          });
          input.value = '';
        }}>
        Add Todo
      </button>
    </div>
  )
}

AddTodo.propTypes = {
  store: React.PropTypes.object.isRequired
}
