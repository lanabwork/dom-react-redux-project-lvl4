import axios from 'axios';
import { toast } from 'react-toastify';
import i18n from 'i18next';
import routes from './routes';

// eslint-disable-next-line import/prefer-default-export
export const getData = (accessToken) => axios.get(routes.dataPath(), {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
  .then((res) => res.data)
  .catch((e) => {
    console.error(e);
    toast.error(i18n.t('notifications.commonError'));
  });
