import express from "express";
import { addStudent, loginStudent } from "../controllers/studentController.js";

import upload from "../midelware/multer.js";

const studentRouter = express.Router();

studentRouter.post("/add-student", upload.single("image"), addStudent);
studentRouter.post("/login-student", loginStudent);

export default studentRouter;
