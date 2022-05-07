import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { handleChange, handleSubmit } from '../features/todo/todoSlice';

const TodoForm = () => {
  const { todo } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    if (todo) {
      dispatch(handleSubmit());
    }
  };
  return (
    <Wrapper>
      <form className='todo-form' onSubmit={submitForm}>
        <input
          type='text'
          placeholder='Create a new todo...'
          className='form-input'
          value={todo}
          onChange={(e) => dispatch(handleChange(e.target.value))}
        />
      </form>
    </Wrapper>
  );
};

export default TodoForm;

const Wrapper = styled.section`
  .form-input {
    width: 100%;
    height: 3rem;
    border-radius: 10px;
    border: none;
    appearance: none;
    outline: none;
    padding: 1rem;
    font-size: 1rem;
    background: var(--main-white);
    color: var(--main-black);
    letter-spacing: 0.1rem;
  }
  .form-input::placeholder {
    color: inherit;
    font-size: inherit;
  }
`;
