import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import typescript from '../img/typescript-seeklogo.com.svg';
import python from '../img/python-5.svg';
import css from '../img/css3.svg';
import github from '../img/github-1.svg';
import javascript from '../img/javascript-js-seeklogo.com.svg';

import react from '../img/react.svg';

import home2 from '../img/home2.jpg';
//Styles
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <Description>
        <h2>
          <span>Proficient</span> Technologies
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img alt='icon' src={react} />
              <h3>React</h3>
            </div>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='icon' src={javascript} />
              <h3>JavaScript</h3>
            </div>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='icon' src={typescript} />
              <h3>Typescript</h3>
            </div>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='icon' src={python} />
              <h3>Python</h3>
            </div>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='icon' src={github} />
              <h3>Git & GitHub</h3>
            </div>
          </Card>
          <Card>
            <div className='icon'>
              <img alt='icon' src={css} />
              <h3>CSS</h3>
            </div>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img alt='camera' src={home2} />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
