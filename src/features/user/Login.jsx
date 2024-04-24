import { useState, useRef } from "react";
// import { Link } from "react-router-dom";
import LandingIntro from "./LandingIntro";
// import ErrorText from "../../components/Typography/ErrorText";
// import InputText from "../../components/Input/InputText";
import { FaEyeSlash, FaEye } from "react-icons/fa";

function Login() {
  const INITIAL_LOGIN_OBJ = {
    password: "",
    emailId: "",
  };

  //   const [loading, setLoading] = useState(false);
  //   const [errorMessage, setErrorMessage] = useState("");
  //   const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
  const [showPassword, setShowPassword] = useState(false);

  //   const submitForm = (e) => {
  //     e.preventDefault();
  //     setErrorMessage("");

  //     if (loginObj.emailId.trim() === "")
  //       return setErrorMessage("Email Id is required! (use any value)");
  //     if (loginObj.password.trim() === "")
  //       return setErrorMessage("Password is required! (use any value)");
  //     else {
  //       setLoading(true);
  //       // Call API to check user credentials and save token in localstorage
  //       localStorage.setItem("token", "DumyTokenHere");
  //       setLoading(false);
  //       window.location.href = "/app/welcome";
  //     }
  //   };

  //   const updateFormValue = ({ updateType, value }) => {
  //     setErrorMessage("");
  //     setLoginObj({ ...loginObj, [updateType]: value });
  //   };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1   rounded-xl">
          <div className="">
            <LandingIntro />
          </div>

          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="lg:text-5xl md:text-4xl text-4xl font-bold mb-4">
                Admin Login
              </h1>
            </div>
            <div className="card flex-shrink-0 lg:w-[500px] md:w-[400px] w-[400px] mt-6 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered w-full"
                      required
                    />
                    <span
                      className="absolute top-3 right-4 w-[]"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary font-bold">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
