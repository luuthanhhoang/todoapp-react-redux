import { todos } from '../states/todoState';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/todoAction';


export const todoReducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        action.payload
      ]
    }
    case UPDATE_TODO: {
      newTodos = [...state];
      for (let todo of newTodos) {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name
        }
      }
      return newTodos;
    }
    case DELETE_TODO: {
      newTodos = [...state];
      newTodos = newTodos.filter(todo => todo.id !== action.payload);
      return newTodos;
    }
    default:
      return state;
  }
};
