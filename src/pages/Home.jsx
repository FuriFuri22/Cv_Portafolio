import React, { useEffect } from 'react';
import About from '../components/About';
//import Projects from '../components/Projects';
//import Robot from '../components/Robot';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section'); // Cambiado a '.section'

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.5 
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <section id="home" className="section visible"> {/* Asegurar que la sección home sea visible */}
        <h1 style={{fontSize: '50px'}}>Bienvenido a mi portafolio</h1>
        {/*<Robot/>*/}
        <p></p>
      </section>
      <div className="container">
        <section id="about" className="section">
          <About />
        </section>
      </div>
      Esta seccion pronto estará disponible
      {/*<div className="container">
        <section id="projects" className="section">
          <Projects />
        </section>
      </div>*/}
    </div>
  );
};

export default Home;
