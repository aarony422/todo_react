import { getVisibleTodos } from '../../lib/todoHelpers'
import { TodoList } from './TodoList'
import { connect } from 'react-redux'
import { toggleTodoAction } from '../../lib'

// take state of the redux store, and returns the props that the presentational
// components will use. These props will be updated anytime the state changes
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  }
}

// takes stores dispatch function, and returns the props that will use the dispatch
// method to dispatch actions.
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodoAction(id))
    }
  }
}

// use connect to create a container component
export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList); // curried function, to pass in the presentational component that
// will connect to the redux store
