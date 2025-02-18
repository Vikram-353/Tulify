import express from "express";
import { addstudent } from "../controllers/studentController.js";

import upload from "../midelware/multer.js";

const studentRouter = express.Router();

studentRouter.post("/add-student", upload.single("image"), addstudent);

export default studentRouter;
