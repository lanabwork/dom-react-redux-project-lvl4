import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/index.scss';
import { AuthProvider } from './context/auth';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store'
import { Provider } from 'react-redux'

document.querySelector('html').classList.add('h-100');
document.body.classList.add('bg-light', 'h-100');
document.getElementById('root').classList.add('h-100');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App/>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
