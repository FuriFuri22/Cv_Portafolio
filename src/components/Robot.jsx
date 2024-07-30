import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';
import './Css/Robot.css';
const Robot = ({ onClick }) => {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState(null);
  const lottieRef = useRef();

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch('/Robot.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAnimationData();
  }, []);

  useEffect(() => {
    if (lottieRef.current) {
      const interval = setInterval(() => {
        lottieRef.current.goToAndPlay(0, true); // Reiniciar la animación cada 4 segundos
      }, 3000); // 4 segundos

      return () => clearInterval(interval);
    }
  }, [animationData]);

  if (error) {
    return <div>Error loading animation: {error}</div>;
  }

  if (!animationData) {
    return <div>Loading...</div>; // Puedes mostrar un loader mientras se carga la animación
  }

  return (
    <div className="robot-container" onClick={onClick}>
      <Lottie
        animationData={animationData}
        loop={false} // Desactivar el bucle automático
        lottieRef={lottieRef} // Pasar la referencia del componente Lottie
      />
    </div>
  );
};

export default Robot;
