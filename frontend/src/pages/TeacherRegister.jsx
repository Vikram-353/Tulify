import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function TeacherRegister() {
  const [formData, setFormData] = useState({
    profilePic: null,
    name: "",
    email: "",
    qualification: "",
    field: "",
    fees: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.profilePic);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("qualification", formData.qualification);
    formDataToSend.append("field", formData.field);
    formDataToSend.append("fees", formData.fees);
    formDataToSend.append("password", formData.password);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/tutor/add-tutor",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Tutor registered successfully!");
    } catch (error) {
      console.error("Error registering tutor:", error.response?.data);
      toast.error(error.response?.data?.message || "Failed to register tutor.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          Teacher <span className="text-primary">Registration</span>
        </p>

        <div className="w-full">
          <p>Profile Picture</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
          />
        </div>

        <div className="w-full">
          <p>Full Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            placeholder="Enter your full name"
          />
        </div>

        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            placeholder="Enter your email"
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            placeholder="Enter your password"
          />
        </div>

        <div className="w-full">
          <p>Qualification</p>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            placeholder="Enter your qualification"
          />
        </div>

        <div className="w-full">
          <p>Field of Interest</p>
          <input
            type="text"
            name="field"
            value={formData.field}
            onChange={handleChange}
            required
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            placeholder="EX: Medical"
          />
        </div>

        <div className="w-full">
          <p>Basic Fees (per hour)</p>
          <input
            type="number"
            name="fees"
            value={formData.fees}
            onChange={handleChange}
            required
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            placeholder="Enter fees per hour"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-md text-base mt-4"
        >
          Register
        </button>
      </div>
    </form>
  );
}

export default TeacherRegister;
