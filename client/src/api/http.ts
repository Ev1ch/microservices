import api from './index';

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const HTTP_METHODS_WITHOUT_BODY = [HttpMethod.GET, HttpMethod.DELETE];

export const HTTP_METHOD_TO_API_METHOD_MAP = {
  [HttpMethod.GET]: api.get,
  [HttpMethod.POST]: api.post,
  [HttpMethod.PUT]: api.put,
  [HttpMethod.DELETE]: api.delete,
} as const;
