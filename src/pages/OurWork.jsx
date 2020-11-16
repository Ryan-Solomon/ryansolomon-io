import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//Animations
import { motion } from 'framer-motion';
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';
import './OurWork.styles.scss';

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: '#1b1b1b' }}
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie variants={fade}>
        <motion.h2 variants={fade}>Movie Buff</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Hide variants={fade}>
          <main className='page-content'>
            <div className='card'>
              <div className='content'>
                <h2 className='title'>Description</h2>
                <p className='copy'>
                  This app allows users to search movies, play movie trivia,
                  store movies to a watch list, and just for fun -- get some dad
                  jokes.
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='content'>
                <h2 className='title'>To The Beach</h2>
                <p className='copy'>
                  Plan your next beach trip with these fabulous destinations
                </p>
                <button className='btn'>View Trips</button>
              </div>
            </div>
            <div className='card'>
              <div className='content'>
                <h2 className='title'>Desert Destinations</h2>
                <p className='copy'>It's the desert you've always dreamed of</p>
                <button className='btn'>Book Now</button>
              </div>
            </div>
            <div className='card'>
              <div className='content'>
                <h2 className='title'>Explore The Galaxy</h2>
                <p className='copy'>
                  Seriously, straight up, just blast off into outer space today
                </p>
                <button className='btn'>Book Now</button>
              </div>
            </div>
          </main>
        </Hide>
      </Movie>

      <Movie ref={element} variants={fade} animate={controls} initial='hidden'>
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/work/the-racer'>
          <img src={theracer} alt='theracer' />
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial='hidden'
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/work/good-times'>
          <img src={goodtimes} alt='goodtimes' />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
    color: #fff;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #00b7c2;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #00b7c2;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #6a6c6e;
`;
const Frame3 = styled(Frame1)`
  background: #00b7c2;
`;
const Frame4 = styled(Frame1)`
  background: #6a6c6e;
`;

export default OurWork;
