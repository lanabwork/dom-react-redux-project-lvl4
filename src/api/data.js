import axios from 'axios';
import routes from '@/routes.js';

export const getData = (accessToken) => {
  const headers = {'Authorization': `Bearer ${accessToken}` };
  return axios.get(routes.dataPath(), { headers })
    .then((res) => res.data)
    .catch((e) => console.error(e));
};