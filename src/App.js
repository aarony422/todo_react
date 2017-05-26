import React, { Component } from 'react';
import { generateId } from './lib/todoHelpers'

class App extends Component {
  render() {
    const store = this.props.store;
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
          {store.getState().todos.map(todo =>
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
      </div>
    );
  }
}

export default App;
