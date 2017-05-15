import React from 'react'
import {partial} from '../../lib/utils'

// We are defining this arrow function in-line for this onChange handler because
// we need to pass in data into our handler, that's not an event object
export const TodoItem = (props) => {
  // First arg is null because we're not interested in resetting the context
  // This means handleToggle is a function that already knows the value of its
  // first arg.
  const handleToggle = partial(props.handleToggle, props.id)
  const handleRemove = partial(props.handleRemove, props.id)
  return (
    <li>
      <span className='delete-item'><a href="#" onClick={handleRemove}>X</a></span>
      <input type="checkbox"
        checked={props.isComplete}
        onChange={handleToggle}/>
      {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  isComplete: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired
}
