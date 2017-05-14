import React from 'react'

// we need to pass in data to the stateless functional component through props
export const TodoForm = (props) => (
  <form>
    <input type="text"
       onChange={props.handleInputChange}
       value={props.currentTodo}/>
  </form>
)

// If we want to make sure other developers using this component passes in the
// right props, we can specify propTypes

// propTypes object in our component is lowerCased 'p'
// isRequired makes sure that they are passed in, otherwise a error is thrown
TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired, // React PropTypes is capital 'P'
  handleInputChange: React.PropTypes.func.isRequired
}
