import environment from '@/environment';

export const API_ROOT = `${environment.API_PREFIX}/${environment.API_VERSION}`;

export const CAFE_ROOT = API_ROOT;

export const CAFE_ROUTES = {
  root: '/',
} as const;
