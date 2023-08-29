import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rollbar from 'rollbar';
import { createBrowserHistory } from 'history';
import { historyContext } from '@rollbar/react';
import { ToastContainer } from 'react-toastify';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import RequireAuth from './components/RequireAuth';

const rollbarConfig = {
  accessToken: '86197306fc5c4ae78c8f37d947c4d341',
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: 'production',
  server: {
    root: 'https://dom-react-redux-project-lvl4-production.up.railway.app/',
    branch: 'main',
  },
};

const rollbar = new Rollbar(rollbarConfig);

const history = createBrowserHistory();

history.listen(historyContext(rollbar));

function App() {
  return (
    <div className="d-flex flex-column align-items-center h-100">
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={(
              <RequireAuth>
                <Main />
              </RequireAuth>
          )}
          />
          <Route
            path="login"
            element={(
              <RequireAuth>
                <Login />
              </RequireAuth>
          )}
          />
          <Route
            path="signup"
            element={(
              <RequireAuth>
                <Signup />
              </RequireAuth>
          )}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
