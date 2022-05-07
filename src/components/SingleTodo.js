import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { BsCheck } from 'react-icons/bs';
import { toggleFinished } from '../features/todo/todoSlice';

const SingleTodo = ({ id, title, done }) => {
  // const { todo } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <button
        className={`${done ? 'active done-container' : 'done-container'}`}
        onClick={() => dispatch(toggleFinished(id))}
      >
        {done && <BsCheck className='icon' />}
      </button>
      <span className={`${done ? 'todo-text underline' : 'todo-text'}`}>
        {title}
      </span>
    </Wrapper>
  );
};

export default SingleTodo;

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  border-bottom: 1px solid var(--Dark-Grayish-Blue);
  .done-container {
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    border: 1px solid var(--Dark-Grayish-Blue);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #fff;
  }
  .active {
    background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }
  .icon {
    font-size: 1.5rem;
    color: #fff;
  }
  .todo-text {
  }
  .underline {
    text-decoration: line-through;
    color: var(--Dark-Grayish-Blue);
  }
`;
