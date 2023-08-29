import axios from 'axios';
import routes from './routes';

// eslint-disable-next-line max-len
export const login = ({ username, password }) => axios.post(routes.loginPath(), { username, password })
  .then((res) => res.data)
  .catch((e) => console.error(e));
// eslint-disable-next-line max-len
export const signup = ({ username, password }) => axios.post(routes.signupPath(), { username, password })
  .then((response) => response)
  // eslint-disable-next-line consistent-return
  .catch((error) => {
    if (error.response) {
      return error.response;
    }
  });
