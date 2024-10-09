import { Request, Response, NextFunction } from "express";

import { formatDate, formatApiResponse } from "../helpers/common.helper";
import { IPost } from "../interfaces/post.interface";
import postService from "../services/post.service";

export const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { author, title, content, created } = req.body;
    const postData: IPost = { title, content, author, created };

    const result = await postService.createPost(postData);
    if (result) {
      const response = formatApiResponse("success", "Bài viết được tạo thành công", result);
      res.status(201).send(response);
    } else {
      const err = new Error("Tạo mới bài viết không thành công");
      next(err);
    }
    
  } catch (error) {
    next(error);
  }
};

export const readPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let page = Number(req.query.page) || 1;
    
    if (page < 1) page = 1;

    const posts = await postService.readPosts(page);

    const response = formatApiResponse("success", "Lấy danh sách bài viết thành công", posts);

    res.status(200).send(response);
  } catch(error) {
    next(error);
  }
};

export const readPostById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const post = await postService.readPostById(id);

    // Nếu bài viết không tồn tại
    if (!post) {
      const err = new Error(`Bài viết không tìm thấy với ID = ${id}`, {
        cause: { statusCode: 404 }
      });
      next(err);
      return;
    }

    // Sử dụng helper formatDate để định dạng ngày tạo của bài viết
    const formattedDate = formatDate(post.created);

    const dataResponse = {
      post,
      formattedDate
    }

    const response = formatApiResponse("success", "Lấy bài viết theo id thành công", dataResponse);

    // Trả về bài viết thành công
    res.status(200).send(response);
  } catch (error) {
    // Xử lý các lỗi không xác định và ném lỗi cho middleware
    next(error);
  }
};

export const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const { author, title, content } = req.body;
    const postData: IPost = { title, content, author };

    const result = await postService.updatePost(id, postData);

    // Update success
    if (result.matchedCount > 0) {
      const response = formatApiResponse("success", "Bài viết được cập nhật thành công", result);
      res.status(201).send(response);
    } else {
      // Update fail
      const err = new Error(`Cập nhật bài viết không thành công với ID = ${id}`, {
        cause: { statusCode: 404 }
      });
      next(err);
    }
    
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const result = await postService.deletePost(id);

    if (result.deletedCount > 0) {
      const response = formatApiResponse("success", "Xóa bài viết thành công", result);
      res.status(201).send(response);
    } else {
      const err = new Error(`Xóa bài viết không thành công với ID = ${id}`, {
        cause: { statusCode: 404 }
      });
      next(err);
    }

  } catch (error) {
    next(error);
  }
};