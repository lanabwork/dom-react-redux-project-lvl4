import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

import '@/assets/scss/application.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App.jsx';
import { AuthProvider } from '@/context/auth.js';
import { Provider } from 'react-redux';
import { store } from '@/store/store.js'

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const chat = document.getElementById('chat');

createRoot(chat).render(
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>
);
