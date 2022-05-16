import axios from 'axios';
import routes from '@/routes.js';

export const auth = ({ username, password }) => {
  return axios.post(routes.loginPath(), { username, password })
    .then((res) => res.data)
    .catch((e) => console.error(e));
};
