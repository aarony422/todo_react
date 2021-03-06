import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList, Footer} from './components/todo'
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers'
import {pipe, partial} from './lib/utils'
import {loadTodos, createTodo, saveTodo, destroyTodo} from './lib/todoService'
import { createStore } from 'redux';
import {todoApp} from './lib/todoReducers'

class App extends Component {
  // property intializer syntax in ES6 classes
  // state is an instance property of this class
  // Available as this.state
  state = {
    todos: [],
    currentTodo: ''
  }

  /*
  store = createStore(todoApp);
  */

  static contextTypes = {
    route: React.PropTypes.string
  }

  componentDidMount() {
    loadTodos() // return a promise
      .then(todos => this.setState({todos}))
  }

  // compose dynamic content, we need state
  // In order for handleInputChange to change our state, we need to reference
  // it in our constructor and bind it to 'this'.
  // This ensures that when we call this.setState, 'this' refers to the
  // correct context. This can also be accomplished by using the arrow function
  // syntax for functions, that automatically pass in 'this'
  // Thus, we don't need a custom constructor

  handleToggle = (id) => {
    const getToggledTodo = pipe(findById, toggleTodo)
    const updated = getToggledTodo(id, this.state.todos)
    const getUpdatedTodos = partial(updateTodo, this.state.todos)
    const updatedTodos = getUpdatedTodos(updated)
    this.setState({todos: updatedTodos})
    saveTodo(updated)
      .then(() => this.showTempMessage('Todo Updated'))
  }

  // optimistic UI update: updating state without waiting for response from server
  // This is good for a responsive UI, but we should give a confirmation when
  // the server POST was successful
  handleSubmit = (e) => {
    e.preventDefault(); // prevent the form to submit through GET
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
    createTodo(newTodo)
      .then(() => this.showTempMessage('Todo added'))
  }
  showTempMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }
  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }
  handleRemove = (id, e) => {
    e.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({
      todos: updatedTodos
    })
    destroyTodo(id)
      .then(() => this.showTempMessage('Todo Removed'))
  }
  // In order for the input to update our state, we need an event handler
  // To change our state, we need to use the setState() method, by giving it
  // an object, with key value pairs that we want to update
  // We then set it has a handler for the onChange event of our input
  // This makes our view is a function of our state, to keep view in sync with
  // our data
  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value
    })
  }
  render() {
    // if currentTodo is truthy, use handleSubmit, o.w. use handleEmptySubmit
    const sumbitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          {this.state.message && <span className="success">{this.state.message}</span>}
          <TodoForm handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={sumbitHandler}/>
          <TodoList
            handleToggle={this.handleToggle}
            todos={displayTodos}
            handleRemove={this.handleRemove}/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
