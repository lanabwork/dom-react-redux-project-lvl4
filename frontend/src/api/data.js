import axios from 'axios';
import routes from './routes.js';

export const getData = (accessToken) => {
  return axios.get(routes.dataPath(), {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
  })
    .then((res) => res.data)
    .catch((e) => console.error(e));
};
