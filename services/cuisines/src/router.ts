import { Router } from "express";

import controller from "@/controller";
import { CUISINES_ROUTES } from "@/routes";

const router = Router();

export default function initRouter() {
  return router
    .get(CUISINES_ROUTES.root, controller.getCuisines)
    .get(CUISINES_ROUTES.one, controller.getCuisineById)
    .post(CUISINES_ROUTES.root, controller.addCuisine)
    .delete(CUISINES_ROUTES.one, controller.deleteCuisineById)
    .put(CUISINES_ROUTES.one, controller.updateCuisineById);
}
