import React, { useEffect } from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section'); // Cambiado a '.section'

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Dejar de observar una vez que la animación ha sido activada
        }
      });
    }, {
      threshold: 0.5 // El umbral puede ajustarse según la preferencia
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
        <p></p>
      </section>
      <div className="container">
        <section id="about" className="section">
          <About />
        </section>
      </div>
      {/*<div className="container">
        <section id="projects" className="section">
          <Projects />
        </section>
      </div>*/}
    </div>
  );
};

export default Home;
