import React from "react";
import { useState, useContext } from "react";

function Login() {
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();
  const [password, setPassword] = useState("");
  // const { setAtoken, backendUrl } = useContext(AdminContext);
  // const { setDToken } = useContext(DoctorContext);
  const [state, setState] = useState("Student");

  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (state === "Admin") {
  //       const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
  //         email,
  //         password,
  //       });
  //       if (data.success) {
  //         localStorage.setItem("atoken", data.token);
  //         setAtoken(data.token);
  //         navigate("/admin-dashboard");
  //       } else {
  //         toast.error(data.message);
  //       }
  //     } else {
  //       const { data } = await axios.post(`${backendUrl}/api/doctor/login`, {
  //         email,
  //         password,
  //       });
  //       if (data.success) {
  //         localStorage.setItem("dtoken", data.token);
  //         setDToken(data.token);
  //         // console.log(data.token);
  //         navigate("/doctor-dashboard");
  //       } else {
  //         toast.error(data.message);
  //       }
  //     }
  //   } catch (error) {
  //     console.error(
  //       "Login failed:",
  //       error.response?.data?.message || error.message
  //     );
  //   }
  // };

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
