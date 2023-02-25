import type { Request, Response, NextFunction } from 'express';

import type { IIngredient } from '@/domain';

type ControllerMethod<T = {}, K = {}> = (
  req: Request<T>,
  res: Response<K>,
  next: NextFunction,
) => Promise<void>;

export type GetIngredients = ControllerMethod<{}, IIngredient[]>;

export type GetIngredientById = ControllerMethod<{ id: string }, IIngredient>;