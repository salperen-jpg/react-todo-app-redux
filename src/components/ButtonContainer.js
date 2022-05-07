import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { filterTodos, clearCompleted } from '../features/todo/todoSlice';
import { buttons } from '../utils/filterButtons';

const ButtonContainer = () => {
  const { todos } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <span>{todos.length} items left</span>
      <div className='button-container'>
        {buttons.map((button) => {
          return (
            <button
              key={button.id}
              className='btn'
              onClick={() => dispatch(filterTodos(button.text))}
            >
              {button.text}
            </button>
          );
        })}
      </div>
      <button className='btn' onClick={() => dispatch(clearCompleted())}>
        Clear Completed
      </button>
    </Wrapper>
  );
};

export default ButtonContainer;

const Wrapper = styled.section`
  background: var(--main-white);
  padding: 1rem;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 0.8rem;
  }

  .button-container {
    display: flex;
    gap: 0.5rem;
  }
  .btn {
    font-size: 0.75rem;
    background-color: transparent;
    border: none;
    font-weight: 600;
    cursor: pointer;
    text-transform: capitalize;
    transition: all 0.2s linear;
    color: var(--main-black);
    &:hover {
      color: var(--Dark-Grayish-Blue);
    }
  }
`;
