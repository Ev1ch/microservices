import { Router } from "express";

import controller from "@/controller";
import { INGREDIENTS_ROUTES } from "@/routes";

const router = Router();

export default function initRouter() {
  return router
    .get(INGREDIENTS_ROUTES.root, controller.getIngredients)
    .get(INGREDIENTS_ROUTES.one, controller.getIngredientById)
    .post(INGREDIENTS_ROUTES.root, controller.addIngredient)
    .delete(INGREDIENTS_ROUTES.one, controller.deleteIngredient)
    .put(INGREDIENTS_ROUTES.one, controller.updateIngredient);
}
