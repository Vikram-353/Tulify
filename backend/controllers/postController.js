import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcrypt";
import validator from "validator";
import postModel from "../models/postModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const addPost = async (req, res) => {
  try {
    const { subject, topic, describedQuestion, isPosted } = req.body;
    const imageFile = req.file;

    if (!subject || !topic || !describedQuestion || !imageFile) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all the fields" });
    }

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageURL = imageUpload.secure_url;

    const postData = {
      subject,
      topic,
      describedQuestion,
      imageURL,
      isPosted: true,
    };

    const newpost = new postModel(postData);
    await newpost.save();

    res.status(201).json({ success: true, message: "post added successfully" });
  } catch (error) {
    console.error("Error adding post:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    // console.log("Fetched Posts:", posts); // ✅ Debugging output
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
export { addPost, getPosts };
