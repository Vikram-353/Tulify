import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PaymentPage from "./pages/PaymentPage";
import TutorBooking from "./pages/TutorBooking";
import UserProfile from "./pages/UserProfile";
import WalletPage from "./pages/WalletPage";
import Login from "./pages/Login";
import Navbar from "./Navbar/Navbar";

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
          <Route path="/tutor-booking" element={<TutorBooking />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
