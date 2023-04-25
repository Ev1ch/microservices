import type { Request, Response, NextFunction } from 'express';

import type { ICuisine, IIngredient, IMeal } from '@/domain';

type ControllerMethod<T = {}, K = void, B = void> = (req: Request<T, K, B>, res: Response<K>, next: NextFunction) => Promise<void>;

export type GetAll = ControllerMethod<{}, { cuisines: ICuisine[]; ingredients: IIngredient[]; meals: IMeal[] }>;
