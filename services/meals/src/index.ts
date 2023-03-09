import express from 'express';

import environment from '@/environment';
import database from '@/database';
import { MEALS_ROOT } from '@/routes';
import initRouter from '@/router';

const app = express();

app.use(MEALS_ROOT, initRouter());

database
  .initialize()
  .then(() => {
    app.listen(environment.PORT, () => {
      console.log(`Server is listening on port ${environment.PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
