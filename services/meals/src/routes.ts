import environment from '@/environment';

export const API_ROOT = `${environment.API_PREFIX}/${environment.API_VERSION}`;

export const MEALS_ROOT = `${API_ROOT}/meals`;

export const MEALS_ROUTES = {
  root: '/',
  one: '/:id',
} as const;
