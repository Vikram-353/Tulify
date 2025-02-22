import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PaymentPage from "./pages/PaymentPage";
import TutorBooking from "./pages/TutorBooking";
import StudentProfile from "./pages/StudentProfile";
import TeacherProfile from "./pages/TeacherProfile";
import WalletPage from "./pages/WalletPage";
import Login from "./pages/Login";
import Navbar from "./Navbar/Navbar";
import AllTutors from "./pages/AllTutors";
import ProblemPost from "./components/Posts/ProblemPost";
import StudentRegister from "./pages/StudentRegister";
import TeacherRegister from "./pages/TeacherRegister";
// import TeacherProfile from "./pages/TeacherProfile";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      {/* Navbar outside Routes to persist on all pages */}
      <ToastContainer position="top-right" autoClose={3000} />

      <Navbar />
      <div className="flex justify-center items-start">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/tutors" element={<AllTutors />} />
          <Route path="/tutor-booking" element={<TutorBooking />} />
          <Route path="/post-problem" element={<ProblemPost />} />
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/teacher-profile" element={<TeacherProfile />} />
          <Route path="/teacher-register" element={<TeacherRegister />} />
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/tutor-profile" element={<TeacherProfile />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // import { AppContext } from "./context/AppContext"; // Import context provider

// import HomePage from "./pages/HomePage";
// import About from "./pages/About";
// import PaymentPage from "./pages/PaymentPage";
// import TutorBooking from "./pages/TutorBooking";
// import StudentProfile from "./pages/StudentProfile";
// import TeacherProfile from "./pages/TeacherProfile";
// import WalletPage from "./pages/WalletPage";
// import Login from "./pages/Login";
// import Navbar from "./Navbar/Navbar";
// import AllTutors from "./pages/AllTutors";
// import ProblemPost from "./components/Posts/ProblemPost";
// import StudentRegister from "./pages/StudentRegister";
// import TeacherRegister from "./pages/TeacherRegister";

// function App() {
//   return (
//     // <AppContext>
//     // {" "}
//     // {/* Wrap everything inside the context provider */}
//     <Router>
//       <ToastContainer position="top-right" autoClose={3000} />
//       <Navbar />
//       <div className="flex justify-center items-start min-h-screen">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/payment" element={<PaymentPage />} />
//           <Route path="/tutors" element={<AllTutors />} />
//           <Route path="/tutor-booking" element={<TutorBooking />} />
//           <Route path="/post-problem" element={<ProblemPost />} />
//           <Route path="/student-profile" element={<StudentProfile />} />
//           <Route path="/teacher-profile" element={<TeacherProfile />} />
//           <Route path="/teacher-register" element={<TeacherRegister />} />
//           <Route path="/student-register" element={<StudentRegister />} />
//           <Route path="/wallet" element={<WalletPage />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//     // </AppContext>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { AppProvider } from "./context/AppContext"; // ✅ Use AppProvider

// import HomePage from "./pages/HomePage";
// import About from "./pages/About";
// import PaymentPage from "./pages/PaymentPage";
// import TutorBooking from "./pages/TutorBooking";
// import StudentProfile from "./pages/StudentProfile";
// import TeacherProfile from "./pages/TeacherProfile";
// import WalletPage from "./pages/WalletPage";
// import Login from "./pages/Login";
// import Navbar from "./Navbar/Navbar";
// import AllTutors from "./pages/AllTutors";
// import ProblemPost from "./components/Posts/ProblemPost";
// import StudentRegister from "./pages/StudentRegister";
// import TeacherRegister from "./pages/TeacherRegister";

// function App() {
//   return (
//     <AppProvider> {/* ✅ Correctly wrap everything inside the provider */}
//       <Router>
//         <ToastContainer position="top-right" autoClose={3000} />
//         <Navbar />
//         <div className="flex justify-center items-start min-h-screen">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/payment" element={<PaymentPage />} />
//             <Route path="/tutors" element={<AllTutors />} />
//             <Route path="/tutor-booking" element={<TutorBooking />} />
//             <Route path="/post-problem" element={<ProblemPost />} />
//             <Route path="/student-profile" element={<StudentProfile />} />
//             <Route path="/teacher-profile" element={<TeacherProfile />} />
//             <Route path="/teacher-register" element={<TeacherRegister />} />
//             <Route path="/student-register" element={<StudentRegister />} />
//             <Route path="/wallet" element={<WalletPage />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </div>
//       </Router>
//     </AppProvider>
//   );
// }

// export default App;
