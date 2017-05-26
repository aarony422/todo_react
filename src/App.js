import React, { Component } from 'react';
import { generateId, getVisibleTodos } from './lib'
import { FilterLinks } from './components/router'

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
        <ul>
          {visibleTodos.map(todo =>
            <li key={todo.id}
                onClick={() => {
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: todo.id
                  });
                }}
                style={{
                  textDecoration: todo.isComplete ?
                    'line-through' :
                    'none'
                }}>
              {todo.name}
            </li>
          )}
        </ul>
        <FilterLinks
          store={store}
          currentVisibilityFilter={visibilityFilter}/>
      </div>
    );
  }
}

export default App;
