import { Router } from 'express';

import controller from '@/controller';
import { INGREDIENTS_ROUTES } from '@/routes';

const router = Router();

export default function initRouter() {
  return router
    .get(INGREDIENTS_ROUTES.root, controller.getIngredients)
    .get(INGREDIENTS_ROUTES.one, controller.getIngredientById);
}
