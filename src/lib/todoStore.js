import { combineReducers } from 'redux';

// Redux functions
// reducer composition: different reducers specify how different parts of the
// state tree are updated in response to actions

// reducer for individual todo items
const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {id: action.id, name: action.name, isComplete: false};
    case 'TOGGLE_TODO':
      if (state.id === action.id) {
        return {...state, isComplete: !state.isComplete};
      } else {
        return state;
      }
    default:
      return state;
  }
}

// todos reducer
// exported for testing purposes
export const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [ ...state, todo(undefined, action) ]
    case 'TOGGLE_TODO':
      return state.map((todoItem) => todo(todoItem, action));
    default:
      return state;
  }
}

// visibilityFilter reducer
const visibilityFilter = (state='SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

// currentTodo reducer
const currentTodo = (state='', action) => {
  switch(action.type) {
    case 'CHANGE_CURRENT_TODO':
      return action.name;
    default:
      return state;
  }
}

// message reducer
const message = (state='', action) => {
  switch(action.type) {
    case 'DISPLAY_MESSAGE':
      return action.message;
    case 'REMOVE_MESSAGE':
      return '';
    default:
      return state;
  }
}

// error Message reducer
const errorMessage = (state='', action) => {
  switch(action.type) {
    case 'DISPLAY_MESSAGE':
      return action.message;
    case 'REMOVE_MESSAGE':
      return '';
    default:
      return state;
  }
}

// Reducer composition with objects
// top-level reducer
export const todoApp = combineReducers({
  todos,
  visibilityFilter,
  currentTodo,
  message,
  errorMessage
})
