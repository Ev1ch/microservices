import type { Request, Response, NextFunction } from 'express';

import { setError, setResponse } from '@/common/responses';
import { cuisinesState } from '@/state';

const breakCuisines = async (req: Request, res: Response, next: NextFunction) => {
  try {
    cuisinesState.break();
    setResponse(res, next);
  } catch (error) {
    setError(res, next, error);
  }
};

export default breakCuisines;
