import express from "express";
import {
  addStudent,
  allStudent,
  loginStudent,
} from "../controllers/studentController.js";

import upload from "../midelware/multer.js";

const studentRouter = express.Router();

studentRouter.post("/add-student", upload.single("image"), addStudent);
studentRouter.post("/login-student", loginStudent);
studentRouter.get("/all-student", allStudent);

export default studentRouter;
