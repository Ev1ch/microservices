import { DEFAULT_ERROR_STATUS } from '@/constants/statuses';

export default class ApiError extends Error {
  public status = DEFAULT_ERROR_STATUS;

  constructor(message: string) {
    super(message);
  }
}
