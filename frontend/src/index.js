import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './assets/scss/index.scss';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import dictionaryFilter from 'leo-profanity';
import { AuthProvider } from './context/auth';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import ru from './locales/ru';
import App from './App';

dictionaryFilter.list();
dictionaryFilter.clearList();
dictionaryFilter.add(dictionaryFilter.getDictionary('en'));
dictionaryFilter.add(dictionaryFilter.getDictionary('ru'));
dictionaryFilter.list();

document.querySelector('html').classList.add('h-100');
document.body.classList.add('bg-light', 'h-100');
document.getElementById('root').classList.add('h-100');
const root = ReactDOM.createRoot(document.getElementById('root'));

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    resources: {
      ru,
    },
    interpolation: {
      escapeValue: false,
    },
  });

root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
