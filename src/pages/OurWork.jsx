import React from 'react';
import styled from 'styled-components';

//Animations
import { motion } from 'framer-motion';
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  lineAnim,
} from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';
import './OurWork.styles.scss';
import { projectData } from '../projectData';
import ProjectCard from '../components/ProjectCard';

const OurWork = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
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
        <motion.h2 variants={fade}>Project 1. Movie Buff</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Hide variants={fade}>
          <ProjectCard project={projectData[0]} />
        </Hide>
      </Movie>

      <Movie
        ref={element1}
        variants={fade}
        animate={controls1}
        initial='hidden'
      >
        {/* <Movie variants={fade}> */}
        <motion.h2 variants={fade}>
          Project 2. Spotify-ish (React Native)
        </motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Hide variants={fade}>
          <ProjectCard project={projectData[1]} />
        </Hide>
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial='hidden'
      >
        <h2>
          Project 3. Karen's Crafts{' '}
          <span style={{ fontSize: '16px' }}>
            (Please allow several seconds to load because of a "cold start")
          </span>
        </h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <ProjectCard project={projectData[2]} />
      </Movie>
      <Movie
        ref={element3}
        variants={fade}
        animate={controls3}
        initial='hidden'
      >
        <h2>Project 4. Tesla</h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <ProjectCard project={projectData[3]} />
      </Movie>
      <Movie
        ref={element4}
        variants={fade}
        animate={controls4}
        initial='hidden'
      >
        <h2>Project 5. Music Player</h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <ProjectCard project={projectData[4]} />
      </Movie>

      <Movie
        ref={element5}
        variants={fade}
        animate={controls5}
        initial='hidden'
      >
        <h2>Project 6. This Website</h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <ProjectCard project={projectData[5]} />
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
