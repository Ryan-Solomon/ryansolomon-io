import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';
import { useHistory } from 'react-router-dom';

const AboutSection = () => {
  const history = useHistory();

  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Software <span>Engineer</span>{' '}
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          I appreciate you taking the time to check out my site. Below you'll
          see the technologies I'm proficient in as well as information about my
          experience and education. Also, you can head over to my projects page
          to see examples of what I can do.
        </motion.p>
        <motion.button onClick={() => history.push('/contact')} variants={fade}>
          Contact Me
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt='portfolio picture' />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
