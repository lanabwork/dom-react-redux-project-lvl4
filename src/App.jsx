import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RequireAuth from '@/components/RequireAuth.js';
import Main from '@/pages/Main.jsx';
import Login from '@/pages/Login.jsx';
import NotFound from '@/pages/NotFound.jsx';

const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path='/'
            element={
              <RequireAuth>
                <Main />
              </RequireAuth>
            }
          />
          <Route
            path='/login'
            element={
              <RequireAuth>
                <Login />
              </RequireAuth>
            }
          />
          <Route
            path='/*'
            element={<NotFound /> }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;