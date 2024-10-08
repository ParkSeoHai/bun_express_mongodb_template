import { Schema, InferSchemaType, model } from "mongoose";

const postSchema = new Schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  author: { type: String, require: true },
  created: { type: Date, default: Date.now },
});

export type Post = InferSchemaType<typeof postSchema>;
export const Post = model("posts", postSchema);
