import HttpCode from '@/common/HttpCode';
import ApiError from './ApiError';

export default class NotFoundError extends ApiError {
  public status = HttpCode.NOT_FOUND;

  constructor(message: string) {
    super(message);
  }
}
