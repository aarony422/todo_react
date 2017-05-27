import React from 'react'
import { getVisibleTodos } from '../../lib/todoHelpers'
import { TodoList } from './TodoList'

export class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = props.store.getState();

    return (
      <TodoList
        todos={
          getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick={id =>
          props.store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    )
  }
}

VisibleTodoList.propTypes = {
  store: React.PropTypes.object.isRequired
}
