// import React from "react";
// import { Teachers } from "../assets/problems";

// function AllTutors() {
//   return (
//     <div className="p-8 ">
//       <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
//         All Tutors
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {Teachers.map((teacher, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50"
//           >
//             <div className="flex flex-col items-center text-center">
//               <img
//                 src={teacher.ProfilePic}
//                 alt={teacher.name}
//                 className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-500"
//               />
//               <h2 className="text-xl font-semibold text-gray-800">
//                 {teacher.name}
//               </h2>
//               <p className="text-gray-500 mb-2">{teacher.Qualification}</p>
//               <p className="text-primary font-medium">{teacher.BasicFees}</p>
//               <button
//                 className="mt-4 px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-gray-700 transition duration-200 transform hover:scale-105"
//                 onClick={() => alert(`Appointment booked with ${teacher.name}`)}
//               >
//                 Book Appointment
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AllTutors;
import React, { useEffect, useState } from "react";
import axios from "axios";

function AllTutors() {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/tutor/all-tutor") // Adjust API URL if needed
      .then((response) => {
        if (response.data.success) {
          setTutors(response.data.tutors);
        } else {
          setError("Failed to fetch tutors.");
        }
      })
      .catch((error) => {
        console.error("Error fetching tutors:", error);
        setError("Something went wrong while fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
        All Tutors
      </h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading tutors...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : tutors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-500"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  {tutor.name}
                </h2>
                <p className="text-gray-500 mb-2">{tutor.qualification}</p>
                <p className="text-primary font-medium">{tutor.fees}</p>
                <button
                  className="mt-4 px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-gray-700 transition duration-200 transform hover:scale-105"
                  onClick={() => alert(`Appointment booked with ${tutor.name}`)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No tutors available.</p>
      )}
    </div>
  );
}

export default AllTutors;
