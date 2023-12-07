import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/commonComponent/Home/Home';
import Product from './Component/commonComponent/Product';
import About from './Component/commonComponent/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/product' exact element={<Product />}/>
        <Route path='/about' exact element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
