import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading } from "../redux/userSlice";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State for "Forgot Password" mode
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false); // Reset forgot password state when switching between login and signup
  };

  const forgotPasswordHandler = () => {
    setIsForgotPassword(true); // Switch to forgot password mode
    setIsLogin(false); // Hide login/signup form fields
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    if (isForgotPassword) {
      // Handle forgot password logic (you can add your backend logic here)
      const user = { email };
      try {
        const res = await axios.post(`${API_END_POINT}/forgot-password`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.data.success) {
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    } else if (isLogin) {
      // Login logic
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setUser(res.data.user));
          navigate("/browser");
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      // Signup logic
      dispatch(setLoading(true));
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setFullName("");
        setEmail("");
        setPassword("");
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh] object-cover "
          src="https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp"
          alt="background-image"
        />
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={getInputData}
          className="flex flex-col w-full sm:w-8/12 md:w-6/12 lg:w-4/12 py-8 px-6 mx-auto mt-20 sm:mt-32 bg-black bg-opacity-80 rounded-md absolute"
        >
          <h1 className="text-3xl text-white mb-5 font-bold text-center">
            {isForgotPassword ? "Reset Password" : isLogin ? "Login" : "SingUp"}
          </h1>
          <div className="flex flex-col">
            {!isLogin && !isForgotPassword && (
              <input
                value={fullName}
                type="text"
                placeholder="Full Name"
                className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
                onChange={(e) => setFullName(e.target.value)}
              />
            )}

            <input
              value={email}
              type="email"
              placeholder="Your Email"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
              onChange={(e) => setEmail(e.target.value)}
            />

            {!isForgotPassword && (
              <input
                value={password}
                type="password"
                placeholder="Password"
                className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
                onChange={(e) => setPassword(e.target.value)}
              />
            )}

            <button className="bg-red-600 mt-6 p-2 text-white rounded-sm font-medium">
              {`${
                isLoading
                  ? "Loading..."
                  : isForgotPassword
                  ? "Reset Password"
                  : isLogin
                  ? "Login"
                  : "SingUp"
              }`}
            </button>
            <div className="flex flex-row">
              {isForgotPassword ? (
                <p className="text-white mt-3 text-center">
                  <span
                    onClick={() => setIsForgotPassword(false)}
                    className="text-blue-400 cursor-pointer"
                  >
                    Back to SingUp
                  </span>
                </p>
              ) : (
                <p className="text-white mt-3">
                  {isLogin ? "New to Netflix?" : "Already have an account?"}
                  <span
                    onClick={loginHandler}
                    className="ml-1 text-blue-400 cursor-pointer"
                  >
                    {isLogin ? "SingUp" : "Login"}
                  </span>
                </p>
              )}

              {isLogin && !isForgotPassword && (
                <p className="text-white mt-3 ml-20">
                  <span
                    onClick={forgotPasswordHandler}
                    className="text-blue-400 cursor-pointer "
                  >
                    Forgot Password?
                  </span>
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
