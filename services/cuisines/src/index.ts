import express from 'express';
import bodyParser from 'body-parser';

import environment from '@/environment';
import database from '@/database';
import { CUISINES_ROOT } from '@/routes';
import initRouter from '@/router';
import {
  dataMiddleware,
  errorMiddleware,
  stateMiddleware,
} from '@/middlewares';
import { cuisinesState } from '@/state';

const app = express();

app.use(bodyParser.json());
app.use(CUISINES_ROOT, stateMiddleware(cuisinesState), initRouter());
app.use(errorMiddleware, dataMiddleware);

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
