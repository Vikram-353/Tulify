// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header from "../components/Header";

// function HomePage() {
//   const [problems, setProblems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProblems = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4000/api/post/get-posts"
//         );
//         console.log(response.data);

//         setProblems(response.data); // Assuming backend sends an array of problems
//       } catch (error) {
//         console.error("Error fetching problems:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProblems();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header />
//       <h1 className="text-2xl font-bold text-center my-6">All Problems</h1>

//       {loading ? (
//         <p className="text-center text-gray-600">Loading...</p>
//       ) : (
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
//           {problems.length > 0 ? (
//             problems.map((problem, index) => (
//               <div key={index} className="bg-white p-4 shadow-md rounded-lg">
//                 <h2 className="text-lg font-semibold">{problem.subject}</h2>
//                 <p className="text-gray-600">{problem.topic}</p>
//                 <p className="text-gray-800 mt-2">
//                   {problem.describedQuestion}
//                 </p>
//                 {problem.image && (
//                   <img
//                     src={problem.image}
//                     alt="Problem"
//                     className="w-full h-40 object-cover mt-2 rounded-lg"
//                     onError={(e) => console.error("Image load error:", e)}
//                   />
//                 )}
//                 {problem.isPosted && (
//                   <button className="mt-3 bg-primary text-white px-4 py-2 rounded hover:bg-gray-500">
//                     <p>Apply</p>
//                   </button>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-600">No problems found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default HomePage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

function HomePage() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/post/get-posts"
        );
        console.log(response.data);

        setProblems(response.data); // Assuming backend sends an array of problems
      } catch (error) {
        console.error("Error fetching problems:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <Header />
      <h1 className="text-3xl font-extrabold text-center my-6 text-gray-800">
        All Problems
      </h1>

      {loading ? (
        <p className="text-center text-gray-600 animate-pulse">Loading...</p>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-6 px-4">
          {problems.length > 0 ? (
            problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white p-5 shadow-md rounded-lg border border-gray-100 "
              >
                <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-1">
                  {problem.subject}
                </h2>
                <p className="text-sm text-gray-500 mt-1 italic">
                  {problem.topic}
                </p>
                <p className="text-gray-700 mt-3 leading-relaxed text-[15px]">
                  {problem.describedQuestion}
                </p>
                {problem.image && (
                  <img
                    src={problem.image}
                    alt="Problem"
                    className="w-full h-60 object-cover mt-3 rounded-lg shadow-md border border-gray-300 transition-transform transform  hover:shadow-lg duration-200"
                    onError={(e) => console.error("Image load error:", e)}
                  />
                )}
                {problem.isPosted && (
                  <button className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-500 transition duration-200">
                    Apply
                  </button>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No problems found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default HomePage;
