import React from "react";
import { assets } from "../assets/assests";

function Header() {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-8 ">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={assets.HeaderIcon}
          alt="Header Icon"
          className="w-40 md:w-52 rounded-lg"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
        <p className="text-2xl md:text-3xl font-semibold">
          Clear Your Doubts With Certified Teachers
        </p>
        <p className="text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae
          cupiditate dicta quis eius nemo amet pariatur temporibus ex, tempora
          accusamus minima, neque libero illo deserunt velit, impedit provident.
          Voluptatibus?
        </p>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md">
          Book Tutor
        </button>
      </div>
    </div>
  );
}

export default Header;
