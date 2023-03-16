import type { NextFunction, Request, Response } from 'express';

import { ApiError } from '@/errors';
import HttpCode from '@/common/HttpCode';

const errorMiddleware = (
  data: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (data instanceof Error) {
    const status = (data as ApiError)?.status ?? HttpCode.INTERNAL_SERVER_ERROR;
    const message = data?.message ?? 'Internal server error';
    res.status(status).json({ message });
    return;
  }

  next(data);
};

export default errorMiddleware;
