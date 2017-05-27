import React from 'react';
import { generateId, getVisibleTodos } from './lib'
import { Footer } from './components/router'
import { TodoList, AddTodo } from './components/todo'

export const App = ({
  store
}) => {

  const {
    todos,
    visibilityFilter
  } = store.getState();

  return (
    <div>
      <AddTodo
        onAddClick={name => {
          store.dispatch({
            type: 'ADD_TODO',
            id: generateId(),
            name
          });
        }
        }/>
      <TodoList
        todos={getVisibleTodos(todos,visibilityFilter)}
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        } />
      <Footer
        onFilterLinkClick={filter => {
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          });
        }}
        currentVisibilityFilter={visibilityFilter}/>
    </div>
  );
}

export default App;
