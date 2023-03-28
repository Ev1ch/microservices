import express from 'express';

import environment from '@/environment';
import database from '@/database';
import { CUISINES_ROOT } from '@/routes';
import initRouter from '@/router';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(CUISINES_ROOT, initRouter());

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
