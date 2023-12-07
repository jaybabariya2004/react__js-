import React from 'react';
import './App.css';
import Card from './Component/Card';
import { Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Result from './Component/Result';

function App() {
  return (
    <>
      {/* <Card /> */}
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/about' exact element={<About />}/>
        <Route path='/contact' exact element={<Contact />}/>
        <Route path='/:id' exact element={<Result />}/>
      </Routes>
    </>
  );
}

export default App;
