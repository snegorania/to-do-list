import React, { useState } from 'react';
import ListOfLists from './fitures/lists/ListOfLists';
import Header from './app/Header';
import LittleLanding from './app/LittleLanding';
import './Style/App.css'


function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <>
      <Header/>
      {
        (isUserLoggedIn) ?
        <ListOfLists /> :
        <LittleLanding />
      }
    </>
  );
}

export default App;
