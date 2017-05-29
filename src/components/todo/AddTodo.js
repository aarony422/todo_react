import React from 'react'
import { connect } from 'react-redux'
import { addTodoAction } from '../../lib'

// AddTodo component no longer receives the store as an argument, but just
// receives the dispatch function, which it assumes will be passed in correctly
let addTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => {
          input = node;
        }}/>
      <button
        onClick={() => {
          dispatch(addTodoAction(input.value));
          input.value = '';
        }}>
        Add Todo
      </button>
    </div>
  )
}

// connect call without arguments returns a container component that does not
// subscribe to the store, However, will pass dispatch to the component that
// it wraps.
export const AddTodo = connect()(addTodo);
