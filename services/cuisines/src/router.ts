import { Router } from "express";

import controller from "@/controller";
import { CUISINES_ROUTES } from "@/routes";
import { errorMiddleware, dataMiddleware } from "@/middlewares";

const router = Router();

export default function initRouter() {
  return router
    .get(
      CUISINES_ROUTES.root,
      controller.getCuisines,
      errorMiddleware,
      dataMiddleware
    )
    .get(
      CUISINES_ROUTES.one,
      controller.getCuisineById,
      errorMiddleware,
      dataMiddleware
    )
    .post(
      CUISINES_ROUTES.root,
      controller.addCuisine,
      // @ts-expect-error
      errorMiddleware,
      dataMiddleware
    );
}

//TODO: add POST PUT DELETE
