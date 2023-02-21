import express from 'express';

import environment from './environment.js';
import { COUNTRIES_ROOT } from './routes.js';
import initRouter from './router.js';

const app = express();

app.use(COUNTRIES_ROOT, initRouter());

app.listen(environment.PORT, () => {
  console.log(`Server is listening on port ${environment.PORT}`);
});
