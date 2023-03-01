import express from 'express';

import environment from '@/environment';
import { CUISINES_ROOT } from '@/routes';
import initRouter from '@/router';

const app = express();

app.use(CUISINES_ROOT, initRouter());

app.listen(environment.PORT, () => {
  console.log(`Server is listening on port ${environment.PORT}`);
});
