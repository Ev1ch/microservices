import type { NextFunction, Request, Response } from 'express';

import HttpCode from '@/common/HttpCode';

const dataMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const data = res.locals?.data ?? null;
  const status = res.locals?.status ?? HttpCode.OK;

  res.status(status).json({ data });

  next();
};

export default dataMiddleware;
