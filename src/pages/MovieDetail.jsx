import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
    console.log(setMovies);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          exit='exit'
          variants={pageAnimation}
          initial='hidden'
          animate='show'
        >
          <div className='headline'>
            <h2>{movie.title}</h2>
          </div>
          <ImageAndAwardsContainer>
            <Awards>
              {movie.awards.map((award) => (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              ))}
            </Awards>
          </ImageAndAwardsContainer>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const ImageAndAwardsContainer = styled.div`
  display: flex;
`;

const HeadLine = styled.div`
  padding-top: 10vh;
  grid-column: 2/3;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 80%;
    margin: 1rem;
    height: 80%;
    object-fit: cover;
    margin: auto;
  }
`;
const Awards = styled.div``;
const AwardStyle = styled.div`
  padding: 2rem;
  h3 {
    font-size: 1.5rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.2rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
