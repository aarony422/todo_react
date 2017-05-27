import React, { Component } from 'react';
import { generateId, getVisibleTodos } from './lib'
import { FilterLinks } from './components/router'
import { TodoList } from './components/todo'

class App extends Component {
  render() {
    const store = this.props.store;

    const {
      todos,
      visibilityFilter
    } = store.getState();

    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    );

    return (
      <div>
        <input ref={node => {
            this.input = node;
          }}/>
        <button
          onClick={() => {
            store.dispatch({
              type:'ADD_TODO',
              name: this.input.value,
              id: generateId()
            });
            this.input.value = '';
          }}>
          Add Todo
        </button>
        <TodoList
          todos={visibleTodos}
          onTodoClick={id =>
            store.dispatch({
              type: 'TOGGLE_TODO',
              id
            })
          } />
        <FilterLinks
          store={store}
          currentVisibilityFilter={visibilityFilter}/>
      </div>
    );
  }
}

export default App;
