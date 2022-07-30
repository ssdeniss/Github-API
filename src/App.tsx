import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Favorites from './components/pages/Favorites/Favorites';
import Navigation from './components/Navigation/Navigation';



function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
