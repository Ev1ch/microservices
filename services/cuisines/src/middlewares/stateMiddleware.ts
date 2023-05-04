import type { NextFunction, Request, Response } from 'express';

import { sleep } from '@/common/timeouts';
import type State from '@/state';

const DELAY_BEFORE_RESPONSE = 5000;

const stateMiddleware =
  (state: State) => async (req: Request, res: Response, next: NextFunction) => {
    if (state.isBroken()) {
      await sleep(DELAY_BEFORE_RESPONSE);
    }

    next();
  };

export default stateMiddleware;
