import environment from '@/environment';

export const API_ROOT = `${environment.API_PREFIX}/${environment.API_VERSION}`;

export const CUISINES_ROOT = `${API_ROOT}/cuisines`;

export const CUISINES_ROUTES = {
  root: '/',
  one: '/:id',
} as const;
