// import React, { useEffect, useState } from "react";
// import { assets } from "../assets/assests";
// import { NavLink, useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();

//   const [showMenu, setShowMenu] = useState(false);
//   const [token, setToken] = useState(true);
//   const logout = () => {
//     setToken(false);
//   };

//   return (
//     <div className="bg-gray-900 text-white shadow-md p-4">
//       <div className="flex items-center justify-between">
//         <img src={assets.logo} alt="logo" className="h-10" />
//         <ul className="flex space-x-6">
//           <NavLink to="/" className="hover:text-gray-400">
//             <li className="cursor-pointer">Home</li>
//           </NavLink>
//           <NavLink to="/tutors" className="hover:text-gray-400">
//             <li className="cursor-pointer">All Tutors</li>
//           </NavLink>
//           <NavLink to="/about" className="hover:text-gray-400">
//             <li className="cursor-pointer">About</li>
//           </NavLink>
//           <NavLink to="/post-problem" className="hover:text-gray-400">
//             <li className="cursor-pointer">Post Problem</li>
//           </NavLink>
//         </ul>
//         <div>
//           {token ? (
//             <div className="flex items-center gap-2 cursor-pointer group relative">
//               <img
//                 className="w-8 rounded-full"
//                 src={assets.profilePic}
//                 alt=""
//               />
//               <img className="w-3.5" src={assets.dropdownIcon} alt="" />
//               <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//                 <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
//                   <p
//                     className="hover:text-black cursor-pointer"
//                     onClick={() => navigate("user-profile")}
//                   >
//                     My Profile
//                   </p>
//                   <p
//                     className="hover:text-black cursor-pointer"
//                     onClick={() => navigate("wallet")}
//                   >
//                     My wallet
//                   </p>
//                   <p
//                     className="hover:text-black cursor-pointer"
//                     onClick={logout}
//                   >
//                     Logout
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
//             >
//               Create Account
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { assets } from "../assets/assests";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const logout = () => {
    setToken(false);
  };

  return (
    <div className="bg-gray-900 text-white shadow-md p-4">
      <div className="flex items-center justify-between">
        <img src={assets.logo} alt="logo" className="h-10" />
        <ul className="flex space-x-6">
          <NavLink to="/" className="hover:text-gray-400">
            <li className="cursor-pointer">Home</li>
          </NavLink>
          <NavLink to="/tutors" className="hover:text-gray-400">
            <li className="cursor-pointer">All Tutors</li>
          </NavLink>
          <NavLink to="/wallet" className="hover:text-gray-400">
            <li className="cursor-pointer">My Wallet</li>
          </NavLink>
          <NavLink to="/post-problem" className="hover:text-gray-400">
            <li className="cursor-pointer">Post Problem</li>
          </NavLink>
        </ul>
        <div>
          {token ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img
                className="w-8 rounded-full"
                src={assets.profilePic}
                alt=""
              />
              <img className="w-3.5" src={assets.dropdownIcon} alt="" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p
                    className="hover:text-black cursor-pointer"
                    onClick={() => navigate("student-profile")}
                  >
                    My Profile
                  </p>

                  <p
                    className="hover:text-black cursor-pointer"
                    onClick={logout}
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
