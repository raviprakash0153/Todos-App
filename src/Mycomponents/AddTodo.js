import React from 'react';
import { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Title and desc required');
    } else {
      addTodo(title, desc);
      setTitle('');
      setDesc('');
    }
  };
  return (
    <div className='container my-3'>
      <form onSubmit={(e) => Submit(e)}>
        <h3>Add a Todo</h3>
        <div className='mb-3'>
          <label for='title' className='form-label'>
            Type Your Todo
          </label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label for='desc' className='form-label'>
            Todo Description
          </label>
          <input
            type='text'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='form-control'
            id='desc'
          />
        </div>

        <button type='submit' className='btn btn-success'>
          Submit
        </button>
      </form>
    </div>
  );
};
