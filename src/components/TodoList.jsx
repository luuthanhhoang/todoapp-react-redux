import React, { useState } from 'react';

const TodoList = ({ todo, deleteTodoFunc, handleUpdateTodo }) => {

  const [isUpdate, setIsUpdate] = useState(false);
  const [nameUpdate, setNameUpdate] = useState(todo.name)

  return (
    <div className="my-3">
      <div className="row mx-2 align-items-center">
        <div>
          <h4>#{todo.id}</h4>
        </div>
        <div className="col m-2">
          <h4>
            {
              !isUpdate ? todo.name :
                <input
                  className="form-control mt-2"
                  type="text"
                  value={nameUpdate}
                  onChange={e => setNameUpdate(e.target.value)}
                />}
          </h4>
        </div>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={() => {
            setIsUpdate(!isUpdate)
            handleUpdateTodo(todo.id, nameUpdate)
          }}
        >{!isUpdate ? 'Edit' : 'Update'}</button>
        <button
          type="button"
          className="btn btn-danger m-2"
          onClick={() => deleteTodoFunc(todo.id)}
        >Delete</button>
      </div>
    </div >
  )
};

export default TodoList;