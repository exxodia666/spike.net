import React from 'react';
import NavbarComponent from './components/Navbar/Navbar'
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacnts/Contacts';
import './App.scss';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contacts />
      </Container>
    </>
  );
}

export default App;
