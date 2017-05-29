import { generateId } from './todoHelpers'
// setVisibilityFilterAction creator
export const setVisibilityFilterAction = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

// Action Creators
export const addTodoAction = (name) => {
  return {
    type: 'ADD_TODO',
    id: generateId(),
    name
  }
}

export const toggleTodoAction = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
