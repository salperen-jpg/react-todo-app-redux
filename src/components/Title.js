import React from 'react';
import styled from 'styled-components';
import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
const Title = () => {
  const dispatch = useDispatch();
  const { lightTheme } = useSelector((store) => store.theme);

  return (
    <Wrapper>
      <h1>todo</h1>
      <button
        className='btn toggle-btn'
        onClick={() => dispatch(toggleTheme())}
      >
        {lightTheme === true ? (
          <img src={moon} alt='moon' className='icon' />
        ) : (
          <img src={sun} alt='sun' className='icon' />
        )}
      </button>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.section`
  padding: 1rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    text-transform: uppercase;
    color: var(--Light-grayish-Blue);
    font-size: 2.5rem;
  }
  .toggle-btn {
    width: 2rem;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .icon {
    fill: #fff;
    font-size: 2rem;
  }
`;
