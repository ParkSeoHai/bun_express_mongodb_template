import express from "express";
const router = express.Router();

import { validateObjectId } from "../validations/common.validation";
import { errorHandler } from "../middlewares/common.middleware";
import {
  createPost,
  readPosts,
  readPostById,
  updatePost,
  deletePost
} from "../controllers/post.controller";

router.post("/", createPost, errorHandler);
router.get("/", readPosts, errorHandler);
router.get("/:id", validateObjectId, readPostById, errorHandler);
router.put('/:id', validateObjectId, updatePost, errorHandler);
router.delete('/:id', validateObjectId, deletePost, errorHandler);

export default router;
