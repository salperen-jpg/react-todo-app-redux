import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleTodo from './SingleTodo';
import { filterTodos } from '../features/todo/todoSlice';

const Todos = () => {
  const { todos, filteredTodos } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterTodos());
  }, [todos]);
  return (
    <Wrapper>
      {filteredTodos.map((todo) => {
        return <SingleTodo key={todo.id} {...todo} />;
      })}
    </Wrapper>
  );
};

export default Todos;

const Wrapper = styled.section`
  background: var(--main-white);
  margin-top: 1.5rem;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;
