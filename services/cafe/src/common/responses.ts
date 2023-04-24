import type { NextFunction, Response } from 'express';

import { DEFAULT_SUCCESS_STATUS } from '@/constants/statuses';

export const setError = (res: Response, next: NextFunction, error: unknown) => {
  next(error);
};

export const setResponse = (
  res: Response,
  next: NextFunction,
  data?: unknown,
  status = DEFAULT_SUCCESS_STATUS,
) => {
  res.locals.data = data;
  res.locals.status = status;
  next();
};
