import { Request, Response, NextFunction } from "express";
import { formatApiResponse } from "../helpers/common.helper";

// Middleware log thông tin các yêu cầu HTTP
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

// Middleware xử lý lỗi
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);

  let status, statusCode;

  if (err.cause) {
    status = err.cause.status || "error";
    statusCode = err.cause.statusCode || 500;
  }

  // Handle error here
  const response = formatApiResponse(status, err.message || "Lỗi máy chủ nội bộ", null);
  res.status(statusCode).send(response);
};
