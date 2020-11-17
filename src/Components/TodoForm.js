import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 } from 'uuid';

//redux
import { addTodo } from '../Redux/action';
import { connect } from 'react-redux';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      return alert('Please add todo');
    }

    const todo = {
      title,
      id: v4(),
    };

    addTodo(todo);
    setTitle('');
  };

  return (
    <>
      <form>
        <div className='col-auto  my-5'>
          <div className='input-group mb-2'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Todo'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className='input-group-prepend'>
              <button className='btn btn-primary' onClick={handleSubmit}>
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
