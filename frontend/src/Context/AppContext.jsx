import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "Rs";
  //   const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [stoken, setSToken] = useState(
    localStorage.getItem("stoken") ? localStorage.getItem("stoken") : false
  );
  //   const [userData, setUserData] = useState(false);

  //   useEffect(() => {
  //     getDoctorData();
  //   }, []);
  //   useEffect(() => {
  //     if (stoken) {
  //       if (stoken) {
  //         loadUserProfileData();
  //       } else {
  //         setUserData(false);
  //       }
  //     }
  //   }, [stoken]);

  const value = {
    stoken,
    setSToken,
    currencySymbol,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;

// import { createContext, useState, useEffect } from "react";

// // Creating the context
// export const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [stoken, setStoken] = useState(localStorage.getItem("stoken") || null);
//   const [ttoken, setTtoken] = useState(localStorage.getItem("ttoken") || null);

//   // const getStudentData = async () => {
//   //   try {
//   //     const { data } = await axios.get(
//   //       "http://localhost:4000/api/student/allStudent"
//   //     );
//   //     if (data.success) {
//   //       setDoctors(data.doctors);
//   //     } else {
//   //       toast.error(data.message);
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //     toast.error(error.message);
//   //   }
//   // };

//   // Sync stoken with localStorage
//   useEffect(() => {
//     if (stoken) {
//       localStorage.setItem("stoken", stoken);
//     } else {
//       localStorage.removeItem("stoken");
//     }
//   }, [stoken]);

//   useEffect(() => {
//     if (ttoken) {
//       localStorage.setItem("ttoken", ttoken);
//     } else {
//       localStorage.removeItem("ttoken");
//     }
//   }, [ttoken]);

//   return (
//     <AppContext.Provider value={{ stoken, setStoken }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// import { createContext, useState, useEffect } from "react";

// // Creating the context
// export const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   const [stoken, setStoken] = useState(localStorage.getItem("stoken") || null);
//   const [ttoken, setTtoken] = useState(localStorage.getItem("ttoken") || null);

//   // Sync stoken with localStorage
//   useEffect(() => {
//     if (stoken) {
//       localStorage.setItem("stoken", stoken);
//     } else {
//       localStorage.removeItem("stoken");
//     }
//   }, [stoken]);

//   useEffect(() => {
//     if (ttoken) {
//       localStorage.setItem("ttoken", ttoken);
//     } else {
//       localStorage.removeItem("ttoken");
//     }
//   }, [ttoken]);

//   return (
//     <AppContext.Provider value={{ stoken, setStoken, ttoken, setTtoken }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppProvider;
