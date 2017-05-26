import {todos} from './todoStore'
import deepFreeze from 'deep-freeze'

// Tests for todo store
test('todos should add a new todo to the state', () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    name: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      name: 'Learn Redux',
      isComplete: false
    }
  ];
  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
})

test('todos should toggle the isComplete property of todo item with id', () => {
  const stateBefore = [
    {
      id: 0,
      name: 'Learn Redux',
      isComplete: false
    },
    {
      id: 1,
      name: 'Go Shopping',
      isComplete: false
    }
  ];
  const action = {
      type: 'TOGGLE_TODO',
      id: 1
  };

  const stateAfter = [
    {
      id: 0,
      name: 'Learn Redux',
      isComplete: false
    },
    {
      id: 1,
      name: 'Go Shopping',
      isComplete: true
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
})
