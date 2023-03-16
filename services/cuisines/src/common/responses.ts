import type { NextFunction, Response } from 'express';
import HttpCode from './HttpCode';

export const setError = (res: Response, next: NextFunction, error: unknown) => {
  next(error);
};

export const setResponse = (
  res: Response,
  next: NextFunction,
  data: unknown,
  status = HttpCode.OK,
) => {
  res.locals.data = data;
  res.locals.status = status;
  next();
};
