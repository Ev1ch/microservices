import { Router } from 'express';

import * as controller from './controller/index.js';
import { COUNTRIES_ROUTES } from './routes.js';

const router = Router();

export default function initRouter() {
  return router
    .get(COUNTRIES_ROUTES.root, controller.getCountries)
    .get(COUNTRIES_ROUTES.one, controller.getCountry);
}
