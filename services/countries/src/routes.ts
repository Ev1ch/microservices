import environment from '@/environment';

export const API_ROOT = `${environment.API_PREFIX}/${environment.API_VERSION}`;

export const COUNTRIES_ROOT = `${API_ROOT}/countries`;

export const COUNTRIES_ROUTES = {
  root: '/',
  one: '/:id',
} as const;
