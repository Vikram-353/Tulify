import React from "react";
import { useState, useContext } from "react";
import StudentContext from "../Context/StudentContext";
import TeacherContext from "../Context/TeacherContext";
// import { AppContext } from "../Context/AppContext";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();
  const [password, setPassword] = useState("");
  // const { setStoken, stoken } = useContext(AppContext);
  const [state, setState] = useState("Student");

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
