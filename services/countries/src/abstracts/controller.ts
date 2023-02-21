import type { Request, Response, NextFunction } from 'express';

import type { ICountry } from '@/domain';

type ControllerMethod<T = {}, K = {}> = (
  req: Request<T>,
  res: Response<K>,
  next: NextFunction,
) => Promise<void>;

export type GetCountries = ControllerMethod<{}, ICountry[]>;

export type GetCountryById = ControllerMethod<{ id: string }, ICountry>;
