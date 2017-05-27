import React from 'react';
import { Footer } from './components/router'
import { AddTodo, VisibleTodoList } from './components/todo'
import { createStore } from 'redux';
import { todoApp } from './lib/todoStore';

export const App = () => {
  const store = createStore(todoApp)
  return (
    <div>
      <AddTodo
        store={store}/>
      <VisibleTodoList
        store={store}/>
      <Footer
        store={store}/>
    </div>
  );
}

export default App;
