import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcrypt";
import validator from "validator";
import tutorModel from "../models/tutorModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Add tutor API
const addTutor = async (req, res) => {
  try {
    const { name, email, password, qualification, field, fees } = req.body;

    const imageFile = req.file;

    // Validate all fields
    if (
      !name ||
      !email ||
      !password ||
      !qualification ||
      !field ||
      !fees ||
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

    const tutorData = {
      name,
      email,
      image: imageURL,
      password: hashedPassword,
      qualification,
      field,
      fees,
      date: Date.now(),
    };

    const newtutor = new tutorModel(tutorData);
    await newtutor.save();

    res.status(200).json({ success: true, message: "tutor Added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// const loginTutor = async (req, res) => {
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

//API to get all tutors list

const allTutor = async (req, res) => {
  try {
    const tutors = await tutorModel.find({}).select("-password");
    res.status(200).json({ success: true, tutors });
    // console.log(tutors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export { addTutor, allTutor };
