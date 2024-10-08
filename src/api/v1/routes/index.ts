import express from "express";
import blogRoute from "./post.route";

const routes = express.Router();

routes.use("/posts", blogRoute);

export default routes;
