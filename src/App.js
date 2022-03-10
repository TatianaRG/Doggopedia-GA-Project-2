import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { getAllDogs } from './lib/api';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import DogIndex from './components/DogIndex';
import DogShow from './components/DogShow';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<DogIndex />} />
        <Route path="/dogs/:point" element={<DogShow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
