import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BouncingBalls from './components/BouncingBalls';
import Home from './pages/Home';
import "./App.css"


const App = () => {

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    const headerHeight = document.querySelector('header').offsetHeight;

    window.scrollTo({
      top: section.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  };
  return (
    <Router>
      <div className="app-container">
        <Header scrollToSection={scrollToSection} />
        <main className="content">
       <BouncingBalls/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;