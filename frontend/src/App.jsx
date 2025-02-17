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

function App() {
  return (
    <div>
      {/* Navbar outside Routes to persist on all pages */}
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
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
