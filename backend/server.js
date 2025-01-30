import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import User from "../Models/Products.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.post("/api/users", async (req, res) => {
  const user = req.body;

  if (!user.name || !user.role) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all data" });
  }

  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(200).json({ success: true, message: "account created" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
});
