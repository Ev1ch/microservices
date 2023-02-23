import type { Request, Response, NextFunction } from 'express';

import type { IMeal } from '@/domain';

type ControllerMethod<T = {}, K = {}> = (
  req: Request<T>,
  res: Response<K>,
  next: NextFunction,
) => Promise<void>;

export type GetMeals = ControllerMethod<{}, IMeal[]>;

export type GetMealById = ControllerMethod<{ id: string }, IMeal>;
