import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { getAllDogs } from './lib/api';

import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import DogIndex from './components/DogIndex';
import DogShow from './components/DogShow';

// import paws from 'src/assets/paws.jpg';
// styles={{ backgroundImage: `url(${paws})` }}
// const paws = require('./assets/paws.jpg');
// <img className="paws" src={paws} />;

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<DogIndex />} />
        <Route path="/dogs/breeds/search?q=$:point" element={<DogShow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

//  <form>
//    <div className="field has-addons">
//      <div className="control">
//        <input
//          className="input is-medium is-rounded"
//          type="search"
//          placeholder="Search for the breed"
//        ></input>

//        <div className="control">
//          <a class="button is-info is-rounded">Search</a>
//        </div>
//      </div>
//    </div>
//  </form>;
