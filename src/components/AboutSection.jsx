import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../styles';

import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className='title'>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          veritatis aspernatur praesentium alias maxime iure, vitae adipisci.
          Molestiae, maxime. Placeat.
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt='guy with a camera' />
      </Image>
    </About>
  );
};

export default AboutSection;
