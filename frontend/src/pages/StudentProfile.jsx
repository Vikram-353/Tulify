import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import ProfilePic from "../assets/problems";

function StudentProfile() {
  const [followers, setFollowers] = useState(250); // Initial followers count
  const rating = 4.5; // Static rating value (can be made dynamic)

  const studentData = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePic: ProfilePic,
    pastSessions: [
      { title: "Math - Session 1", date: "2025-01-15", tutor: "Mr. Smith" },
      {
        title: "Physics - Session 2",
        date: "2025-02-01",
        tutor: "Ms. Johnson",
      },
      { title: "Chemistry - Session 3", date: "2025-02-10", tutor: "Dr. Lee" },
    ],
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
            src={studentData.profilePic}
            alt={studentData.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-gray-300"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              {studentData.name}
            </h2>
            <p className="text-sm text-gray-500">{studentData.email}</p>
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

        {/* Past Sessions */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Past Learning Sessions
          </h3>
          {studentData.pastSessions.length > 0 ? (
            <ul className="mt-4 space-y-4">
              {studentData.pastSessions.map((session, index) => (
                <li key={index} className="p-4 border rounded-lg bg-gray-50">
                  <h4 className="font-semibold text-gray-800">
                    {session.title}
                  </h4>
                  <p className="text-sm text-gray-600">Date: {session.date}</p>
                  <p className="text-sm text-gray-600">
                    Tutor: {session.tutor}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-3">
              No past learning sessions available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
