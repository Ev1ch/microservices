import axios from 'axios';

import environment from '@/environment';

const instance = axios.create({
  baseURL: environment.API_ROOT,
});

instance.interceptors.response.use((response) => ({
  ...response,
  data: response.data.data,
}));

export default instance;
