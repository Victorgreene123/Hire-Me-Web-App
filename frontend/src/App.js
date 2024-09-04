
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/homepage';
import Login from './pages/login';

function App() {
  return (

   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
      <Route path='login' element={<Login />} />

      </Route>
    </Routes>
   </BrowserRouter>
 
  );
}

export default App;
