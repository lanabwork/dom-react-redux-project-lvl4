import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main.js';
import Login from './pages/Login.js';
import NotFound from './pages/NotFound.js';
import Header from './components/Header.js';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <div className='d-flex flex-column align-items-center'>
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
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
