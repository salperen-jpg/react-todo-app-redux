import React from 'react';
import styled from 'styled-components';
import ButtonContainer from './ButtonContainer';
import Title from './Title';
import TodoForm from './TodoForm';
import Todos from './Todos';

const TodoContainer = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <Title />
        <TodoForm />
        <Todos />
        <ButtonContainer />
      </div>
    </Wrapper>
  );
};

export default TodoContainer;

const Wrapper = styled.section`
  margin-top: -9rem;
`;
