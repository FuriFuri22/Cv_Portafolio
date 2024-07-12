import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Aplicacion para el analisis de datos obtenidos de pozos petroleros',
    description: 'En este repositorio solo muestra el Frontend hecho con React Native',
    url: 'https://github.com/yourusername/project-one'
  },
  {
    title: 'ReciRop, pagina web de donaciones',
    description: '',
    url: 'https://github.com/yourusername/project-two'
  }
];

const Projects = () => {
  return (
    <div className='section'>
      <h1 style={{fontSize: '50px'}}>Mis Proyectos</h1>
      {projects.map(project => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default Projects;