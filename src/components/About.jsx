import React from 'react';
import ListElements from './ListElements';
import './Css/About.css'; 

const About = () => {
  const knowledgeSections = [
    {
      title: 'Lenguajes:',
      items: ['JavaScript', 'Python', 'PHP', 'TypeScript', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks y librerias:',
      items: ['ReactJs', 'NodeJs', 'React Native', 'ExpressJs', 'NextJs']
    },
    {
      title: 'Bases de Datos',
      items: ['MongoDB', 'MySQL', 'PosgreSQL']
    },
    {
      title: 'Otros:',
      items: ['Docker', 'Vercel', 'XAMPP', 'Postman', 'Jira', 'GitHub']
    }
  ];

  return (
    <div className='section about-section'>
      <h1 className='about-title'>Sobre mi</h1>
      <p className='about-text'>
        Soy un desarrollador de software con interes en la ciberseguridad y el desarrollo nativo.
      </p>
      <p className='about-text'>
        Me especializo en el stack MERN, pero tengo conocimientos de otras tecnologías.
      </p>
      <div className='knowledge-section'>
        <h2 className='knowledge-title'>Conocimientos:</h2>
        <div className='knowledge-lists'>
          {knowledgeSections.map((section, index) => (
            <ListElements key={index} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
