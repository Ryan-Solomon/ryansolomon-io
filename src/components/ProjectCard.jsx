import React from 'react';

const ProjectCard = ({ project }) => {
  const {
    description,
    technologies,
    otherNotes,
    githubLink,
    websiteLink,
  } = project;
  return (
    <main className='page-content'>
      <div className='card'>
        <div className='content'>
          <h2 className='title'>Description</h2>
          <p className='copy'>{description}</p>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
          <h2 className='title'>Technologies Used</h2>
          <p className='copy'>{technologies}</p>
        </div>
      </div>
      {/* <div className='card'>
        <div className='content'>
          <h2 className='title'>Other Notes</h2>
          <p className='copy'>{otherNotes}</p>
        </div>
      </div> */}
      <div className='card'>
        <div className='content'>
          <h2 className='title'>View The App</h2>
          <p className='copy'>
            Click the buttons below to visit the app or the code on GitHub.
          </p>
          <button className='btn'>
            <a href={websiteLink} target='_blank'>
              See The App
            </a>
          </button>
          <button className='btn'>
            <a href={githubLink} target='_blank'>
              GitHub Code
            </a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProjectCard;
