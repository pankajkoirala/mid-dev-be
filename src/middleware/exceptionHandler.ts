import { Express } from "express";
import { CustomError } from "../Exception/customException";

export const configRequestResponse = (app: Express) => {
  app.use((err: any, req: any, res: any, next: any) => {
    // If the error is an instance of CustomError, use its statusCode and message
    if (err instanceof CustomError) {
      return res.status(err.statusCode).json({
        error: {
          message: err.message,
          status: err.statusCode,
        },
      });
    }
  });
};
