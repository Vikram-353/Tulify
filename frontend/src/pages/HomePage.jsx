import React from "react";
import Header from "../components/Header";
import { Problems } from "../assets/problems";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <h1 className="text-2xl font-bold text-center my-6">All Problems</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {Problems.map((problem, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">{problem.Subject}</h2>
            <p className="text-gray-600">{problem.Topic}</p>
            <p className="text-gray-800 mt-2">{problem.ProblemDescription}</p>
            {problem.ProblemImage && (
              <img
                src={problem.ProblemImage}
                alt="Problem"
                className="w-full h-40 object-cover mt-2 rounded-lg"
              />
            )}
            {problem.isPosted ? (
              <button className="mt-3 bg-primary text-white px-4 py-2 rounded hover:bg-gray-500">
                <p>Apply</p>
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
