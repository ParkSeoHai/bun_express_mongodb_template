import express from "express";
import connectDB from "./config/db";
import routes from "./api/routes";

const app = express();

// connect to database
connectDB();

// middleware
app.use(express.json());

// use routes
app.use(routes);

export default app;
