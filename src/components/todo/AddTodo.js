import React from 'react'
import { generateId } from '../../lib/todoHelpers'

// for stateless function components, context is passed as a second argument
export const AddTodo = (props, { store }) => {
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

// Define context types that will be received from parent
AddTodo.contextTypes = {
  store: React.PropTypes.object
}
