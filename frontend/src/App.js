import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Main from './pages/Main.js';
import Login from './pages/Login.js';
import NotFound from './pages/NotFound.js';
import Header from './components/Header.js';
import RequireAuth from './components/RequireAuth';
import Signup from 'pages/Signup';

function App() {
  return (
    <div className='d-flex flex-column align-items-center h-100'>
      <ToastContainer />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <RequireAuth>
              <Main/>
            </RequireAuth>
          }/>
          <Route path="login" element={
            <RequireAuth>
              <Login/>
            </RequireAuth>
          }/>
          <Route path="signup" element={
            <RequireAuth>
              <Signup/>
            </RequireAuth>
          }/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
