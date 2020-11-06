import React, { useState } from 'react';

const TodoInput = ({ addTodoFunction }) => {

  const [title, setTitle] = useState(' ');
  return (
    <div className="row mx-2 my-3">
      <input
        className="col form-control"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button
        className="btn btn-primary mx-2 px-3"
        onClick={() => {
          addTodoFunction(title);
          setTitle('');
        }}
      >Add</button>
    </div>
  )
};

export default TodoInput;