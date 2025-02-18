import express from "express";
import { addTutor, allTutor } from "../controllers/tutorController.js";

import upload from "../midelware/multer.js";

const tutorRouter = express.Router();

tutorRouter.post("/add-tutor", upload.single("image"), addTutor);
tutorRouter.post("/all-tutor", allTutor);

export default tutorRouter;
