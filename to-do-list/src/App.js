import React, { useState } from 'react';
import ListOfLists from './fitures/lists/ListOfLists';
import HeaderHome from './app/HeaderHome';
import HeaderList from './app/HeaderList'
import LittleLanding from './app/LittleLanding';
import './Style/App.css'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<HeaderHome/>} />
        <Route path='/lists' element={<HeaderList/>} />
      </Routes>
      <Routes>
        <Route path='/' element={<LittleLanding />} />
        <Route path='/lists' element={<ListOfLists />} />
      </Routes>
    </>
  );
}

export default App;
