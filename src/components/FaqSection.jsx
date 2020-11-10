import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial='hidden'
    >
      <h2>Education & Experience</h2>
      <h3>Click the title for more information</h3>
      <AnimateSharedLayout>
        <Toggle title='Masters Degree from the University of Northern Iowa in Exercise Science'>
          <div className='answer'>
            <p>2015 - 2019</p>
            <p>GPA: 4.0</p>
            <p>
              While my education wasn't specifically in Computer Science, I did
              complete coursework in graduate-level statistics, human
              physiology, biomechanics, and other technical topics. This
              demonstrates my ability to learn complex topics that is
              transferable to software engineering.
            </p>
          </div>
        </Toggle>
        <Toggle title='Business Owner'>
          <div className='answer'>
            <p>2018 - Present</p>
            <p>
              While earning my degree, I started my own online personal training
              business. By the time I completed my degree, I could support
              myself fully through my business. When growing my business, I
              learned how to develop my website using Wix, how to produce
              content (articles, podcasts, videos, etc), how to run ads, email
              marketing, solving problems every day to help my clients get the
              results they want, and a variety of other tasks when doing your
              own thing. While growing my business, I also joined a team of
              coaches and we all work collaboratively under the same brand,
              Revive Stronger.
            </p>
          </div>
        </Toggle>
        <Toggle title='Freelance Video Editor'>
          <div className='answer'>
            <p>2018 - Present</p>
            <p>
              When growing my business, I also taught myself how to edit videos
              and podcasts. I then used these skills work as a freelance video
              editor. I've been editing anywhere from 2 to 10 videos per week
              the last few years. While this isn't directly related to software
              engineering, it does demonstrate my ability to learn on my own,
              communicate with clients, and take initiative.
            </p>
          </div>
        </Toggle>
        <Toggle title='Graduate Assistant'>
          <div className='answer'>
            <p>2018 - 2019</p>
            <p>
              My responsibilities included basic web development using HTML,
              program development in Excel to analyze data, and organizing
              various academic events. This job, especially the programming in
              Excel part, made me realize the power of programming in general
              and is what helped peak my interest in it.
            </p>
          </div>
        </Toggle>
        <Toggle title='Strength & Conditioning Coach'>
          <div className='answer'>
            <p>2018 - 2019</p>
            <p>
              I worked as a Physical Therapy Assistant and Strength &
              Conditioning coach while in school. I was given the opportunity to
              lead my own kids strength and conditioning camps, and it was one
              of my favorite work experiences while in school. I wish I would
              have had a kids strength and conditioning camp while growing up,
              so it was incredibly rewarding to be able to help some kids out
              and provide some direction earlier on in life.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  h3 {
    color: #00b7c2;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
