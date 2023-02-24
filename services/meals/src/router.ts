import { Router } from 'express';

import controller from '@/controller';
import { MEALS_ROUTES } from '@/routes';

const router = Router();

export default function initRouter() {
  return router
    .get(MEALS_ROUTES.root, controller.getMeals)
    .get(MEALS_ROUTES.one, controller.getMealById);
}
