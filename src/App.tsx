import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './components/launches/index';
import Info from './components/launchesInfo/Info';
import Home from './components/home/home';
import { Route, Routes } from 'react-router-dom';
import Space from './components/spacex/Space';
function App() {
  // const [id,setid]=useState('');
  // const handleIdChange = useCallback((newId:any) => {
  //   setid(newId);
  // }, []);
  return (
    <div >
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/space' element={<Space></Space>}></Route>
    </Routes>
    </div>
  );
}

export default App;
