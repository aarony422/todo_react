import React from 'react'

// we need to pass in data to the stateless functional component through props
export const TodoForm = (props) => (
  <form>
    <input type="text"
       onChange={props.handleInputChange}
       value={props.currentTodo}/>
  </form>
)
