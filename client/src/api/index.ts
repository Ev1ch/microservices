import axios from 'axios';

import environment from '@/environment';

const instance = axios.create({
  baseURL: environment.API_ROOT,
});

export default instance;
