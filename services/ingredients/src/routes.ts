import environment from '@/environment';

export const API_ROOT = `${environment.API_PREFIX}/${environment.API_VERSION}`;

export const INGREDIENTS_ROOT = `${API_ROOT}/ingredients`;

export const INGREDIENTS_ROUTES = {
  root: '/',
  one: '/:id',
} as const;
