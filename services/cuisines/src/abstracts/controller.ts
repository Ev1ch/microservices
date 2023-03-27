import type { Request, Response, NextFunction } from "express";

import type { ICuisine, ICuisineDTO } from "@/domain";

type ControllerMethod<T = {}, K = {}, B = void> = (
  req: Request<T, K, B>,
  res: Response<K>,
  next: NextFunction
) => Promise<void>;

export type GetCuisines = ControllerMethod<{}, ICuisine[]>;

export type GetCuisineById = ControllerMethod<{ id: string }, ICuisine>;

export type AddCuisine = ControllerMethod<{}, ICuisineDTO, ICuisine>;

export type DeleteCuisine = ControllerMethod<{ id: string }, void>;

export type UpdateCuisine = ControllerMethod<
  { id: string },
  ICuisine,
  ICuisineDTO
>;
