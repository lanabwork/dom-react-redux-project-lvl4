// @ts-check

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

import '../assets/application.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/App.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const chat = document.getElementById("chat");

createRoot(chat).render(
  <App />
);
