import axios from 'axios';

import { CUISINES_ROOT } from './routes';

const instance = axios.create({
  baseURL: CUISINES_ROOT,
});

instance.interceptors.response.use(
  (response) => ({
    ...response,
    data: response.data.data,
  }),
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
