import express from "express";
import { Request, Response, NextFunction } from "express";

import routesV1 from "../v1/routes";

import { loggerMiddleware, errorHandler } from "../v1/middlewares/common.middleware";

const routes = express.Router();

routes.use(loggerMiddleware);

routes.use("/api/v1", routesV1);
// routes.use('/api/v2', require('./v2/routes'));

// Handle error request url not found
routes.all("*", (req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Can't find ${req.originalUrl} on the server!`, {
      cause: {
        status: "fail",
        statusCode: 404,
      },
    });
    next(err);
  },
  errorHandler
);

export default routes;
