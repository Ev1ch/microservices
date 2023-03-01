import express from 'express';

import environment from '@/environment';
import { INGREDIENTS_ROOT } from '@/routes';
import initRouter from '@/router';

const app = express();

app.use(INGREDIENTS_ROOT, initRouter());

app.listen(environment.PORT, () => {
  console.log(`Server is listening on port ${environment.PORT}`);
});
