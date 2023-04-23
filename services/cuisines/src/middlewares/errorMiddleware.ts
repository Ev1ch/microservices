import type { NextFunction, Request, Response } from 'express';

import { ApiError } from '@/errors';
import { DEFAULT_ERROR_STATUS } from '@/constants/statuses';

const errorMiddleware = (
  data: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (data instanceof Error) {
    const status = (data as ApiError)?.status ?? DEFAULT_ERROR_STATUS;
    const message = data?.message ?? 'Internal server error';
    res.status(status).json({ error: { message } });
    return;
  }

  next(data);
};

export default errorMiddleware;
