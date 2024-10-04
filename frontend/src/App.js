
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/homepage';

import Signup from './pages/register';
import Login from './pages/login';
import Explore from './pages/explore';
import ProfilePage from './pages/profile';
import NoPage from './pages/nopage';
import Dashboard from './pages/dashboard';
import DashLayout from './components/dashLayout';
import Notification from './pages/notifications';
import Chats from './pages/Chats';

function App() {
  return (

   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login/>} />
      <Route path='find-professionals' element={<Explore/>} />
      <Route path='dashboard' element={<DashLayout />} >
          <Route index element={<Dashboard />} />
          <Route path='inbox' element={<Notification />} />
          <Route path='chats' element={<Chats />} />
      <Route path='profile/:name' element={<ProfilePage />} />

      </Route>
      <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
   </BrowserRouter>
 
  );
}

export default App;
