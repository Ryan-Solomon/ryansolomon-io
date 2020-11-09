import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../styles';

import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className='title'>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          veritatis aspernatur praesentium alias maxime iure, vitae adipisci.
          Molestiae, maxime. Placeat.
        </p>
        <button>Contact Me</button>
      </Description>
      <Image>
        <img src={home1} alt='guy with a camera' />
      </Image>
    </About>
  );
};

export default AboutSection;
