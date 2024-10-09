import { Request, Response, NextFunction } from "express";
import { isValidObjectId } from "mongoose";

export const validateObjectId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  // Kiểm tra ID có hợp lệ không
  if (isValidObjectId(id)) {
    next();
  } else {
    const err = new Error(`ID(${id}) không hợp lệ`, {
      cause: { statusCode: 400 }
    });
    next(err);
  }
};
