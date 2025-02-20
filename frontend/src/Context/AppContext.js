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
