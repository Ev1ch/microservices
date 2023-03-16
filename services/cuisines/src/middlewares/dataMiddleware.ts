import { NextFunction, Request, Response } from 'express';

const dataMiddleware = (
  data: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.json({ data });

  next();
};

export default dataMiddleware;
