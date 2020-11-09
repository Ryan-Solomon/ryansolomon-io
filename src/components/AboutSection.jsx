import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../styles';
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className='title'>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
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
