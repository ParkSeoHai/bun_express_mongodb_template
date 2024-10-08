import { Request, Response, NextFunction } from "express";
import { isValidObjectId } from "mongoose";

import { formatApiResponse } from "../helpers/common.helper";

export const validateObjectId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  // Kiểm tra ID có hợp lệ không
  if (isValidObjectId(id)) {
    next();
  } else {
    console.log("Error: ID không hợp lệ");
    const response = formatApiResponse("error", `ID(${id}) không hợp lệ`, null);
    res.status(400).send(response);
  }
};
