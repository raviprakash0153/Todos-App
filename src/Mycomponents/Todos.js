import React from 'react';
import { Todo } from './Todo';

export const Todos = ({todos,onDelete}) => {
    const style = {
        minHeight: "70vh",
        margin: "10px auto",
}
  return (
    <div className='container my-3' style={style}>
      <h3 className='text-center'>Todos List</h3>
      {todos.length > 0 ? todos.map((todo)=> 
       (
          <>
           <Todo todo={todo} key={todo.sno} onDelete={onDelete}/>
           <hr/>
           </>
      )) : ('No Todos left')}
      
      
    </div>
  );
};
