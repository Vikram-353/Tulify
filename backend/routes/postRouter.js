import express from "express";
import { addPost, getPosts } from "../controllers/postController.js";

import upload from "../midelware/multer.js";

const postRouter = express.Router();

postRouter.post("/add-post", upload.single("image"), addPost);
postRouter.get("/get-posts", getPosts);

export default postRouter;
