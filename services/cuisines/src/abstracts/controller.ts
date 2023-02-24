import type { Request, Response, NextFunction } from 'express';

import type { ICuisine } from '@/domain';

type ControllerMethod<T = {}, K = {}> = (
  req: Request<T>,
  res: Response<K>,
  next: NextFunction,
) => Promise<void>;

export type GetCuisines = ControllerMethod<{}, ICuisine[]>;

export type GetCuisineById = ControllerMethod<{ id: string }, ICuisine>;
