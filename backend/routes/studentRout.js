import express from "express";
import { addStudent } from "../controllers/studentController.js";

import upload from "../midelware/multer.js";

const studentRouter = express.Router();

studentRouter.post("/add-student", upload.single("image"), addStudent);

export default studentRouter;
