import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import ProfilePic from "../assets/problems";

function TeacherProfile() {
  const [followers, setFollowers] = useState(500); // Initial followers count
  const rating = 4.8; // Static rating value (can be made dynamic)

  const teacherData = {
    name: "Dr. Jane Smith",
    email: "janesmith@example.com",
    profilePic: ProfilePic,
    subjects: ["Mathematics", "Physics", "Computer Science"],
    experience: "10+ years of teaching experience",
  };

  const handleFollow = () => {
    setFollowers(followers + 1);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        {/* Profile Section */}
        <div className="flex items-center space-x-6">
          <img
            src={teacherData.profilePic}
            alt={teacherData.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-gray-300"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              {teacherData.name}
            </h2>
            <p className="text-sm text-gray-500">{teacherData.email}</p>
            <p className="text-sm text-gray-600">{teacherData.experience}</p>

            <div className="mt-2 flex items-center space-x-3">
              {/* Followers */}
              <span className="text-gray-700 text-lg font-medium">
                Followers: {followers}
              </span>
              <button
                onClick={handleFollow}
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
              >
                Follow +
              </button>
            </div>
            {/* Rating */}
            <div className="flex mt-2 text-yellow-500">
              {Array.from({ length: 5 }, (_, i) =>
                i < Math.floor(rating) ? (
                  <FaStar key={i} />
                ) : (
                  <FaRegStar key={i} />
                )
              )}
            </div>
          </div>
        </div>

        {/* Subjects Taught */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Subjects Taught
          </h3>
          <ul className="mt-3 space-y-2">
            {teacherData.subjects.map((subject, index) => (
              <li
                key={index}
                className="p-2 border rounded-lg bg-gray-50 text-gray-800"
              >
                {subject}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;
