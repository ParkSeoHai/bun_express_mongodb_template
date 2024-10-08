import express from "express";
import routesV1 from "../v1/routes";

import { loggerMiddleware } from "../v1/middlewares/common.middleware";

const routes = express.Router();

routes.use(loggerMiddleware);

routes.use("/api/v1", routesV1);
// routes.use('/api/v2', require('./v2/routes'));

export default routes;
