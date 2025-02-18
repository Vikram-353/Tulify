import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcrypt";
import validator from "validator";
import studentModel from "../models/studentModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Add student API
const addstudent = async (req, res) => {
  try {
    const { name, email, password, qualification, gender, dob } = req.body;

    const imageFile = req.file;

    // Validate all fields
    if (
      !name ||
      !email ||
      !password ||
      !qualification ||
      !gender ||
      !dob ||
      !imageFile
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all the fields" });
    }

    // Validate Email
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter a valid email" });
    }

    // Validate Password Length
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageURL = imageUpload.secure_url;

    const studentData = {
      name,
      email,
      image: imageURL,
      password: hashedPassword,
      qualification,
      gender,
      dob,
      date: Date.now(),
    };

    const newstudent = new studentModel(studentData);
    await newstudent.save();

    res.status(200).json({ success: true, message: "student Added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// const loginstudent = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (
//       email === process.env.ADMIN_EMAIL &&
//       password === process.env.ADMIN_PASSWORD
//     ) {
//       const token = jwt.sign(email + password, process.env.JWT_SECRET);
//       res.json({ success: true, token });
//     } else {
//       res.status(400).json({ success: false, message: "Invalid Credentials" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

//API to get all students list

export { addstudent };
