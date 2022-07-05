import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ListOfLists from './fitures/lists/ListOfLists';
import HeaderHome from './app/HeaderHome';
import HeaderList from './app/HeaderList'
import LittleLanding from './app/LittleLanding';
import './Style/App.css'
import { Routes, Route } from 'react-router-dom'
import { fetchUsers } from './fitures/users/usersSlice';
import { fetchLists } from './fitures/lists/listsSlice';
import { fetchTasks } from './fitures/taasks/tasksSlice';


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUsers());
  });

  useEffect(()=> {
    dispatch(fetchLists());
  });

  useEffect(()=> {
    dispatch(fetchTasks());
  });

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
