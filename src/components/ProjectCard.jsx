import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3 style={{fontSize: '30px'}}>{project.title}</h3>
      <p style={{fontSize: '20px'}}>{project.description}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default ProjectCard;