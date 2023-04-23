import { Router } from "express";

import controller from "@/controller";
import { MEALS_ROUTES } from "@/routes";

const router = Router();

export default function initRouter() {
  return router
    .get(MEALS_ROUTES.root, controller.getMeals)
    .get(MEALS_ROUTES.one, controller.getMealById)
    .post(MEALS_ROUTES.root, controller.addMeal)
    .delete(MEALS_ROUTES.one, controller.deleteMealById)
    .put(MEALS_ROUTES.one, controller.updateMealById);
}
