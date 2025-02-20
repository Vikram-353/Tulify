import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcrypt";
import validator from "validator";
import studentModel from "../models/studentModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const addStudent = async (req, res) => {
  try {
    const { name, email, password, qualification, gender, dob } = req.body;
    const imageFile = req.file;

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

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // Check if email already exists
    const existingStudent = await studentModel.findOne({ email });
    if (existingStudent) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

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
    };

    const newStudent = new studentModel(studentData);
    await newStudent.save();
    // Generate JWT Token
    const stoken = jwt.sign({ id: newStudent._id }, process.env.JWT_SECRET);

    console.log("Generated Token:", stoken); // Debugging

    res
      .status(201)
      .json({ success: true, message: "Student added successfully", stoken });
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find student by email
    const student = await studentModel.findOne({ email });

    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "student does not exist" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, student.password);
    if (isMatch) {
      // Generate JWT token
      const stoken = jwt.sign({ id: student._id }, process.env.JWT_SECRET);
      res.status(200).json({ success: true, stoken });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { addStudent, loginStudent };
