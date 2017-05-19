import React, { Component } from 'react';
import { generateId } from './lib/todoHelpers'

class App extends Component {
  render() {
    return (
      <div>
        <input ref={node => {
            this.input = node;
          }}/>
        <button
          onClick={() => {
            this.props.store.dispatch({
              type:'ADD_TODO',
              name: this.input.value,
              id: generateId()
            });
            this.input.value = '';
          }}>
          Add Todo
        </button>
        <ul>
          {this.props.store.getState().todos.map(todo =>
            <li key={todo.id}>
              {todo.name}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
