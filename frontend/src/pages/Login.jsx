import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import StudentContext from "../Context/StudentContext";
// import TeacherContext from "../Context/TeacherContext";
// import { AppContext } from "../Context/AppContext.js";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();
  const [password, setPassword] = useState("");
  // const { setStoken, stoken } = useContext();
  const [state, setState] = useState("Student");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = password.length >= 4; // Example: Minimum 6 characters for password
    ///////////
    // Use email variable here
    if (isValidEmail && isValidPassword) {
      console.log(email, password);
      // toast.success("Registered Successfully")
      // navigate('/home');
    } else if (!isValidPassword) {
      toast.error("Password must be at least 4 characters long.");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/student/login-student",
        { email, password }
      );
      // setSuccess(response.data.message);
      if (response.data.success) {
        localStorage.setItem("stoken", response.data.stoken); // Store the token
        setSuccess("Login Successful!");
        toast.success("Login Successful!");
        navigate("/");
        // setError('');
      } else {
        setError(response.data.message || "Login failed");
        toast.error(response.data.message || "Login failed");
      }
    } catch (err) {
      setError(err.response.data.message || "Login failed");
      toast.error(err.response?.data?.message || "Login failed");
      // setSuccess('');
    }
  };

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-md text-base"
        >
          Login
        </button>
        {state === "Student" ? (
          <p>
            Teacher Login?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Teacher")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Student Login?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Student")}
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;

// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { AppContext } from "../context/AppContext.js";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [state, setState] = useState("Student");
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const { setStoken, stoken } = useContext(AppContext); // ✅ Fix Context
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // ✅ Prevent default form submission

//     if (!email || !password) {
//       toast.error("Please fill in all fields.");
//       return;
//     }

//     const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     const isValidPassword = password.length >= 4;

//     if (!isValidEmail) {
//       toast.error("Invalid email format.");
//       return;
//     }
//     if (!isValidPassword) {
//       toast.error("Password must be at least 4 characters long.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/student/login-student",
//         { email, password }
//       );

//       if (response.data.success) {
//         localStorage.setItem("stoken", response.data.stoken);
//         setStoken(response.data.stoken);
//         setSuccess("Login Successful!");
//         toast.success("Login Successful!");
//         navigate("/");
//       } else {
//         setError(response.data.message || "Login failed");
//         toast.error(response.data.message || "Login failed");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//       toast.error(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="min-h-[80vh] flex items-center">
//       <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
//         <p className="text-2xl font-semibold m-auto">
//           <span className="text-primary">{state}</span> Login
//         </p>
//         {error && <p className="text-red-500">{error}</p>}
//         {success && <p className="text-green-500">{success}</p>}
//         <div className="w-full">
//           <p>Email</p>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             className="border border-[#DADADA] rounded w-full p-2 mt-1"
//             type="email"
//             required
//           />
//         </div>
//         <div className="w-full">
//           <p>Password</p>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             className="border border-[#DADADA] rounded w-full p-2 mt-1"
//             type="password"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-primary text-white w-full py-2 rounded-md text-base"
//         >
//           Login
//         </button>
//         {state === "Student" ? (
//           <p>
//             Teacher Login?{" "}
//             <span
//               className="text-primary underline cursor-pointer"
//               onClick={() => setState("Teacher")}
//             >
//               Click here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Student Login?{" "}
//             <span
//               className="text-primary underline cursor-pointer"
//               onClick={() => setState("Student")}
//             >
//               Click here
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// }

// export default Login;

// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios";
// // import { AppContext } from "../context/AppContext";
// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [state, setState] = useState("Student");
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const { setStoken, setTtoken, ttoken, stoken } = useContext(AppContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     if (!email || !password) {
//       toast.error("Please fill in all fields.");
//       return;
//     }

//     const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     const isValidPassword = password.length >= 4;

//     if (!isValidEmail) {
//       toast.error("Invalid email format.");
//       return;
//     }
//     if (!isValidPassword) {
//       toast.error("Password must be at least 4 characters long.");
//       return;
//     }

//     try {
//       const loginUrl =
//         state === "Student"
//           ? "http://localhost:4000/api/student/login-student"
//           : "http://localhost:4000/api/teacher/login-teacher";

//       const response = await axios.post(loginUrl, { email, password });

//       if (response.data.success) {
//         if (state === "Student") {
//           localStorage.setItem("stoken", response.data.stoken);
//           setStoken(response.data.stoken);
//         } else {
//           localStorage.setItem("ttoken", response.data.ttoken);
//           setTtoken(response.data.ttoken);
//         }

//         setSuccess("Login Successful!");
//         toast.success("Login Successful!");
//         navigate("/");
//       } else {
//         setError(response.data.message || "Login failed");
//         toast.error(response.data.message || "Login failed");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//       toast.error(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="min-h-[80vh] flex items-center">
//       <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
//         <p className="text-2xl font-semibold m-auto">
//           <span className="text-primary">{state}</span> Login
//         </p>
//         {error && <p className="text-red-500">{error}</p>}
//         {success && <p className="text-green-500">{success}</p>}
//         <div className="w-full">
//           <p>Email</p>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             className="border border-[#DADADA] rounded w-full p-2 mt-1"
//             type="email"
//             required
//           />
//         </div>
//         <div className="w-full">
//           <p>Password</p>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             className="border border-[#DADADA] rounded w-full p-2 mt-1"
//             type="password"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-md text-base"
//         >
//           Login
//         </button>
//         {state === "Student" ? (
//           <p>
//             Teacher Login?{" "}
//             <span
//               className="text-primary underline cursor-pointer"
//               onClick={() => setState("Teacher")}
//             >
//               Click here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Student Login?{" "}
//             <span
//               className="text-primary underline cursor-pointer"
//               onClick={() => setState("Student")}
//             >
//               Click here
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// }

// export default Login;
