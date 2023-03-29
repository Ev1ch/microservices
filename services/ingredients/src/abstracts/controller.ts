import type { Request, Response, NextFunction } from "express";

import type { IIngredient, IIngredientDTO } from "@/domain";

type ControllerMethod<T = {}, K = void, B = void> = (
  req: Request<T, K, B>,
  res: Response<K>,
  next: NextFunction
) => Promise<void>;

export type GetIngredients = ControllerMethod<{}, IIngredient[]>;

export type GetIngredientById = ControllerMethod<{ id: string }, IIngredient>;

export type AddIngredient = ControllerMethod<{}, IIngredient, IIngredientDTO>;

export type DeleteIngredientsById = ControllerMethod<{ id: string }>;

export type UpdateIngredientsById = ControllerMethod<
  { id: string },
  IIngredient,
  IIngredientDTO
>;
