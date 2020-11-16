import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
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
          <ProjectCard project={projectData[0]} />
        </Hide>
      </Movie>

      <Movie ref={element} variants={fade} animate={controls} initial='hidden'>
        <h2>Karen's Crafts</h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <ProjectCard project={projectData[1]} />
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial='hidden'
      >
        <h2>This Website</h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <ProjectCard project={projectData[2]} />
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
