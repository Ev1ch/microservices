import { Router } from 'express';

import controller from '@/controller';
import { COUNTRIES_ROUTES } from '@/routes';

const router = Router();

export default function initRouter() {
  return router
    .get(COUNTRIES_ROUTES.root, controller.getCountries)
    .get(COUNTRIES_ROUTES.one, controller.getCountry);
}
