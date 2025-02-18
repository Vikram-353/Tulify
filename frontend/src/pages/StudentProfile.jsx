import React, { useState } from "react";
import ProfilePic from "../assets/problems";

function StudentProfile() {
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

  return (
    <div className="p-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <img
            src={studentData.profilePic}
            alt={studentData.name}
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {studentData.name}
            </h2>
            <p className="text-sm text-gray-500">{studentData.email}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Past Learning Sessions
          </h3>
          {studentData.pastSessions.length > 0 ? (
            <ul className="space-y-4">
              {studentData.pastSessions.map((session, index) => (
                <li
                  key={index}
                  className="p-4 border rounded-lg shadow-sm bg-gray-50"
                >
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
            <p className="text-gray-500">
              No past learning sessions available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
