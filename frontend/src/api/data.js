import axios from 'axios';
import routes from './routes.js';
import { toast } from 'react-toastify';
import i18n from 'i18next';

export const getData = (accessToken) => {
  return axios.get(routes.dataPath(), {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
  })
    .then((res) => res.data)
    .catch((e) => {
      console.error(e);
      toast.error(i18n.t('notifications.commonError'));
    });
};
