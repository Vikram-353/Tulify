// import { v2 as cloudinary } from "cloudinary";
// import bcrypt from "bcrypt";
// import validator from "validator";
// import tutorModel from "../models/tutorModel.js";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// // Add tutor API
// const addTutor = async (req, res) => {
//   try {
//     const { name, email, password, qualification, field, fees } = req.body;

//     const imageFile = req.file;

//     // Validate all fields
//     if (
//       !name ||
//       !email ||
//       !password ||
//       !qualification ||
//       !field ||
//       !fees ||
//       !imageFile
//     ) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Please fill all the fields" });
//     }

//     // Validate Email
//     if (!validator.isEmail(email)) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Please enter a valid email" });
//     }

//     // Validate Password Length
//     if (password.length < 8) {
//       return res.status(400).json({
//         success: false,
//         message: "Password must be at least 8 characters",
//       });
//     }

//     // Hash Password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
//       resource_type: "image",
//     });
//     const imageURL = imageUpload.secure_url;

//     const tutorData = {
//       name,
//       email,
//       image: imageURL,
//       password: hashedPassword,
//       qualification,
//       field,
//       fees,
//       date: Date.now(),
//     };

//     const newtutor = new tutorModel(tutorData);
//     await newtutor.save();

//     const token = jwt.sign({ id: newtutor._id }, process.env.JWT_SECRET);
//     console.log(token);

//     res.status(200).json({ success: true, message: "tutor Added", token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// //API to get all tutors list

// const allTutor = async (req, res) => {
//   try {
//     const tutors = await tutorModel.find({}).select("-password");
//     res.status(200).json({ success: true, tutors });
//     // console.log(tutors);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// export { addTutor, allTutor };

import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcrypt";
import validator from "validator";
import tutorModel from "../models/tutorModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

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

    // Check if tutor already exists
    const existingTutor = await tutorModel.findOne({ email });
    if (existingTutor) {
      return res.status(400).json({
        success: false,
        message: "Tutor already registered with this email",
      });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Upload Image to Cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageURL = imageUpload.secure_url;

    // Create new tutor
    const newTutor = new tutorModel({
      name,
      email,
      image: imageURL,
      password: hashedPassword,
      qualification,
      field,
      fees,
      date: Date.now(),
    });

    await newTutor.save();

    // Generate JWT Token
    const ttoken = jwt.sign({ id: newTutor._id }, process.env.JWT_SECRET);

    console.log("Generated Token:", ttoken); // Debugging

    res
      .status(200)
      .json({ success: true, message: "Tutor added successfully", token });
  } catch (error) {
    console.error("Error in addTutor:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all tutors API
const allTutor = async (req, res) => {
  try {
    const tutors = await tutorModel.find({}).select("-password"); // Exclude passwords
    res.status(200).json({ success: true, tutors });
  } catch (error) {
    console.error("Error in allTutor:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export { addTutor, allTutor };
