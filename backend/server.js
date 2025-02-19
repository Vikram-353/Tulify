import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import "dotenv/config";
import connectCloudinary from "./config/cloudinary.js";
import tutorRouter from "./routes/tutorRoute.js";
import studentRouter from "./routes/studentRout.js";
import postRouter from "./routes/postRouter.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());

//api endpoints

app.use("/api/tutor", tutorRouter);
app.use("/api/student", studentRouter);
app.use("/api/post", postRouter);
//localhost:4000/api/

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => console.log("Server Started", port));
