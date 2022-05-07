import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { lightDesktop, lightMobile, darkDekstop, darkMobile } from './Images';
import anotherImg from '../images/bg-mobile-dark.jpg';

const Hero = () => {
  const { lightTheme } = useSelector((store) => store.theme);
  console.log(lightTheme);
  return (
    <Wrapper>
      <div className={`${lightTheme ? 'hero' : 'dark-hero'}`}></div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.article`
  .hero {
    height: 30vh;
    background: url(${lightMobile}) center/cover no-repeat;
  }
  .dark-hero {
    height: 30vh;
    background: url(${darkMobile}) center/cover no-repeat;
  }
  @media (min-width: 768px) {
    .hero {
      background: url(${lightDesktop}) center/cover no-repeat;
    }
    .dark-hero {
      background: url(${darkDekstop}) center/cover no-repeat;
    }
  }
`;
