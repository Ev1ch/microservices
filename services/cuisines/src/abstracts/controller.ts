import type { Request, Response, NextFunction } from 'express';

import type { ICuisine, ICuisineDTO } from '@/domain';

type ControllerMethod<T = {}, K = void, B = void> = (
  req: Request<T, K, B>,
  res: Response<K>,
  next: NextFunction,
) => Promise<void>;

export type GetCuisines = ControllerMethod<{}, ICuisine[]>;

export type GetCuisineById = ControllerMethod<{ id: string }, ICuisine>;

export type AddCuisine = ControllerMethod<{}, ICuisine, ICuisineDTO>;

export type DeleteCuisineById = ControllerMethod<{ id: string }>;

export type UpdateCuisineById = ControllerMethod<
  { id: string },
  ICuisine,
  ICuisineDTO
>;
