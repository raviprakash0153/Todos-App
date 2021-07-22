import React from 'react';

export const Todo = ({todo,onDelete}) => {
  return (<div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={(e)=>{onDelete(todo)}}>Delete</button>
      <div class="mb-3 form-check grid">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  </div>);
};
