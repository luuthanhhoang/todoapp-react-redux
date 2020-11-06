import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import { addTodo, deleteTodo, updateTodo } from '../actions/todoAction';

export const HomePage = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const deleteTodoFunc = id => {
    const action = deleteTodo(id);
    dispatch(action);
  };

  const addTodoFunction = title => {
    const id = Math.trunc(100 * Math.random());
    const action = addTodo({
      id: id,
      name: title
    })
    dispatch(action);
  };

  const handleUpdateTodo = (id, name) => {
    const action = updateTodo({
      id: id,
      name: name
    })
    dispatch(action);
  };


  return (
    <div>
      <TodoInput addTodoFunction={addTodoFunction} />
      {todos.map(todo =>
        <TodoList
          key={todo.id}
          todo={todo}
          deleteTodoFunc={deleteTodoFunc}
          addTodoFunction={addTodoFunction}
          handleUpdateTodo={handleUpdateTodo}
        />)}
    </div>
  );
};