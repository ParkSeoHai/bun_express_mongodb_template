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
  // Handle error here
  const response = formatApiResponse("success", err.message || "Lỗi máy chủ nội bộ", null);
  res.status(500).send(response);
};
