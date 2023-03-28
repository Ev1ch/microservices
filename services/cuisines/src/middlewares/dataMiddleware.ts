import type { NextFunction, Request, Response } from 'express';

import HttpCode from '@/common/HttpCode';

const dataMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const data = res.locals?.data;
  const status = res.locals?.status ?? HttpCode.OK;

  if (data) {
    res.status(status).json({ data });
  } else {
    res.status(status).end();
  }

  next();
};

export default dataMiddleware;
