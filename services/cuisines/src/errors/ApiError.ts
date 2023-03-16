import HttpCode from '@/common/HttpCode';

export default class ApiError extends Error {
  public status: HttpCode;

  constructor(message: string, status = HttpCode.CLIENT_ERROR) {
    super(message);
    this.status = status;
  }
}
