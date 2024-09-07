
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/homepage';

import Signup from './pages/register';
import Login from './pages/login';
import Explore from './pages/explore';

function App() {
  return (

   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login/>} />
      <Route path='find-professionals' element={<Explore/>} />

      </Route>
    </Routes>
   </BrowserRouter>
 
  );
}

export default App;
