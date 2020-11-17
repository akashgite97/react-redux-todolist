import React from 'react';

//redux
import { connect } from 'react-redux';
import { removeTodo } from '../Redux/action';

const Todo = ({ todos, markComplete }) => {
  return (
    <>
      {todos.map((todo) => (
        <>
          <ul className='list-unstyled bg-dark p-2 text-white w-75 offset-1'>
            <li>
              {todo.title}
              <i
                onClick={() => markComplete(todo.id)}
                className='fa fa-times-circle text-danger float-right'
                aria-hidden='true'
              ></i>
            </li>
          </ul>
        </>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removeTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
