import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

function StudentRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    qualification: "",
    gender: "",
    dob: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please upload a profile picture.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("qualification", formData.qualification);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("dob", formData.dob);
    formDataToSend.append("image", image); // Append image file

    try {
      const response = await axios.post(
        "http://localhost:4000/api/student/add-student",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 201) {
        toast.success("Student registered successfully!");
        setFormData({
          name: "",
          email: "",
          password: "",
          qualification: "",
          gender: "",
          dob: "",
        });
        setImage(null);
      }
    } catch (err) {
      console.error("Error registering student:", err);
      toast.error(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <>
      {/* Add ToastContainer to enable toasts */}

      <form className="min-h-[80vh] flex items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
          <p className="text-2xl font-semibold m-auto">
            <span className="text-primary">Student</span> Registration
          </p>

          <div className="w-full">
            <p>Full Name</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
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
            />
          </div>

          <div className="w-full">
            <p>Gender</p>
            <div className="flex gap-3 mt-1">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  required
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  required
                />{" "}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                  required
                />{" "}
                Other
              </label>
            </div>
          </div>

          <div className="w-full">
            <p>Date of Birth</p>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
            />
          </div>

          <div className="w-full">
            <p>Profile Picture</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white w-full py-2 rounded-md text-base"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default StudentRegister;
