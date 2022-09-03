import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title: String,
  message: String,
  creator: { type: String, default: "admin"},
  createdAt: { type: Date, default: Date.now },
  like: { type: Boolean, default: false },
});

const PostMessgae = mongoose.model("PostMessage", postSchema);
export default PostMessgae;