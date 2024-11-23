import { HTTP_STATUS_INTERNAL_SERVER_ERROR } from "../config/appConstant";

export class CustomError extends Error {
  statusCode: number;
  constructor(message?: string, statusCode?: number) {
    super(message);

    this.statusCode = statusCode || HTTP_STATUS_INTERNAL_SERVER_ERROR;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
