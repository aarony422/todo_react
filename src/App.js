import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'

class App extends Component {
  // compose dynamic content, we need state
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build React App', isComplete: false},
        {id: 3, name: 'Ship it!', isComplete: false}
      ],
      currentTodo: ''
    }
    // In order for handleInputChange to change our state, we need to reference
    // it in our constructor and bind it to 'this'.
    // This ensures that when we call this.setState, 'this' refers to the
    // correct context
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  // In order for the input to update our state, we need an event handler
  // To change our state, we need to use the setState() method, by giving it
  // an object, with key value pairs that we want to update
  // We then set it has a handler for the onChange event of our input
  // This makes our view is a function of our state, to keep view in sync with
  // our data
  handleInputChange(e) {
    this.setState({
      currentTodo: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}/>
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
