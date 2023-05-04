import { Router } from 'express';

import controller from '@/controller';
import { CAFE_ROUTES } from '@/routes';

const router = Router();

export default function initRouter() {
  return router.get(CAFE_ROUTES.root, controller.getAll);
}
