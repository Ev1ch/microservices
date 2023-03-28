import HttpCode from '@/common/HttpCode';
import { DEFAULT_ERROR_STATUS } from '@/constants/statuses';

export default class ApiError extends Error {
  public status: HttpCode;

  constructor(message: string, status = DEFAULT_ERROR_STATUS) {
    super(message);
    this.status = status;
  }
}
