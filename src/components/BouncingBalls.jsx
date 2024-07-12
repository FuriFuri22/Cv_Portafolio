import React, { useEffect } from 'react';
import './Css/BouncingBalls.css';

const BouncingBalls = () => {
  useEffect(() => {
    const ball1 = document.querySelector('.bouncing-ball-green');
    const ball2 = document.querySelector('.bouncing-ball-blue');
    const headerHeight = 50; // Altura del header
    const footerHeight = 60; // Altura del footer
    const ballSize = 15; // Tamaño de las pelotitas

    let posX1 = window.innerWidth / 2 - ballSize / 2;
    let posY1 = headerHeight + 100;
    let velocityX1 = 50;
    let velocityY1 = 30;
    let gravity1 = 0.1;

    let posX2 = window.innerWidth / 2 - ballSize / 2;
    let posY2 = headerHeight + 100;
    let velocityX2 = 50;
    let velocityY2 = 10;
    let gravity2 = 0.1;

    const updateBallPosition = () => {
      posX1 += velocityX1;
      posY1 += velocityY1;
      velocityY1 += gravity1;

      posX2 += velocityX2;
      posY2 += velocityY2;
      velocityY2 += gravity2;

      if (posX1 <= 0 || posX1 + ballSize >= window.innerWidth) {
        velocityX1 *= -1; // Rebotar en las paredes laterales
      }

      if (posY1 <= headerHeight) {
        velocityY1 *= -1; // Rebotar en el techo (header)
        posY1 = headerHeight;
      }

      if (posY1 + ballSize >= window.innerHeight - footerHeight) {
        velocityY1 *= -1; // Rebotar en el suelo (footer)
        posY1 = window.innerHeight - footerHeight - ballSize;
      }

      if (posX2 <= 0 || posX2 + ballSize >= window.innerWidth) {
        velocityX2 *= -1; // Rebotar en las paredes laterales
      }

      if (posY2 <= headerHeight) {
        velocityY2 *= -1; // Rebotar en el techo (header)
        posY2 = headerHeight;
      }

      if (posY2 + ballSize >= window.innerHeight - footerHeight) {
        velocityY2 *= -1; // Rebotar en el suelo (footer)
        posY2 = window.innerHeight - footerHeight - ballSize;
      }

      // Colisión entre las pelotitas
      const dx = posX1 - posX2;
      const dy = posY1 - posY2;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < ballSize) {
        // Intercambiar velocidades
        [velocityX1, velocityX2] = [velocityX2, velocityX1];
        [velocityY1, velocityY2] = [velocityY2, velocityY1];
      }

      ball1.style.transform = `translate(${posX1}px, ${posY1}px)`;
      ball2.style.transform = `translate(${posX2}px, ${posY2}px)`;

      requestAnimationFrame(updateBallPosition);
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      ball1.style.top = `${scrollTop}px`;
      ball2.style.top = `${scrollTop}px`;
    };

    window.addEventListener('scroll', handleScroll);

    updateBallPosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bouncing-ball bouncing-ball-green"></div>
      <div className="bouncing-ball bouncing-ball-blue"></div>
    </>
  );
};

export default BouncingBalls;
