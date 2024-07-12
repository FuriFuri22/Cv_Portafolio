import React from 'react';
import ListElements from './ListElements';

const About = () => {
  const knowledgeSections = [
    {
      title: 'Lenguajes:',
      items: ['JavaScript', 'Python', 'PHP', 'TypeScript', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks:',
      items: ['ReactJs', 'NodeJs', 'React Native', 'ExpressJs']
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
    <div className='section'>
      <h1 style={{fontSize: '50px'}}>
        Sobre mi
      </h1>
      <p style={{fontSize: '20px'}}>
        Soy un desarrollador de software apasionado por el frontend y el desarrollo nativo
      </p>
      <p style={{fontSize: '20px'}}>
        Me especializo en el satck MERN, pero tengo conocimientos de otras tecnologias
      </p >
      <p style={{fontSize: '20px',
        display: "flex"
      }}>
        Conocimientos:
        {knowledgeSections.map((section, index) => (
          <ListElements key={index} title={section.title} items={section.items} />
        ))}
      </p>
    </div>
  );
};

export default About;