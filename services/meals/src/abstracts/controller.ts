import type { Request, Response, NextFunction } from "express";

import type { IMeal, IMealDTO } from "@/domain";

type ControllerMethod<T = {}, K = void, B = void> = (
  req: Request<T, K, B>,
  res: Response<K>,
  next: NextFunction
) => Promise<void>;

export type GetMeals = ControllerMethod<{}, IMeal[]>;

export type GetMealById = ControllerMethod<{ id: string }, IMeal>;

export type AddMeal = ControllerMethod<{}, IMeal, IMealDTO>;

export type DeleteMealById = ControllerMethod<{ id: string }>;

export type UpdateMealById = ControllerMethod<{ id: string }, IMeal, IMealDTO>;
