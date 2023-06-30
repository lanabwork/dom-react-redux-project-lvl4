import axios from 'axios';
import routes from './routes.js';

export const login = ({ username, password }) => {
  return axios.post(routes.loginPath(), { username, password })
    .then((res) => res.data)
    .catch((e) => console.error(e));
};
export const signup = ({ username, password }) => {
  return axios.post(routes.signupPath(), { username, password })
    .then((response) => response)
    .catch((error) => {
      if (error.response) {
       return error.response;
      }
    });
};
