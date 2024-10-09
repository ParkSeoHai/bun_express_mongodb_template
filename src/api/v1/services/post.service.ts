import { Post } from "../models/post.model";
import { IPost } from "../interfaces/post.interface";

const createPost = async (postData: IPost) => {
  try {
    const post = new Post({
      title: postData.title,
      content: postData.content,
      author: postData.author,
      created: postData.created
    });
    const result = await post.save();
    return result;
  } catch (error) {
    throw error;
  }
};

const readPosts = async (page: number) => {
  try {
    const numberPerPage = 3;
    const skip: number = (page - 1) * numberPerPage;
    const posts = await Post.find({}).skip(skip).limit(numberPerPage);

    return posts;
  } catch (error) {
    throw error;
  }
};

const readPostById = async (id: string) => {
  try {
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    throw error;
  }
};

const updatePost = async (id: string, postData: IPost) => {
  try {
    const result = await Post.updateOne(
      { _id: id },
      {
        title: postData.title,
        content: postData.content,
        author: postData.author,
      }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

const deletePost = async (id: string) => {
  try {
    const result = await Post.deleteOne({ _id: id });
    return result;
  } catch (err) {
    throw err;
  }
};

export default {
  createPost,
  readPosts,
  readPostById,
  updatePost,
  deletePost,
};
