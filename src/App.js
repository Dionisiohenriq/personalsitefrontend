import './styles/App.css';
import Button from './components/Button';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import ExampleComponent from './components/ExampleComponent';

function MainRouter() {
  return (
    <Router>
      <div className='MainRouter'>
        <Navigation />
        <Routs />
      </div>
    </Router>
  )
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/example">ExampleRequest</Link>
        </li>
        <li>
          <Button>Teste</Button>
        </li>
      </ul>
    </nav>
  );
}

function Routs(){
  return (
    <Routes>
      <Route exact path="/sobre" element={<AboutPage />} />
      <Route exact path='/contato' element={<ContactPage />} />
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/example' element={<ExampleComponent/>} />
    </Routes>
  );
}

export default MainRouter;
