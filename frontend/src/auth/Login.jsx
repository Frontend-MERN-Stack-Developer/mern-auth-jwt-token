import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const userData = {
    email: "",
    password: "",
  };
  // const token = JSON.parse(localStorage.setItem("token"));

  const [user, setUser] = useState(userData);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(name, value);
    console.log(userData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:2100/api/login",
        user
      );

      console.log("User registered", response.data);
      setUser(response.data);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/dashboard");
    } catch (error) {
      console.error(
        "Error while submitting form:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="auth-screen h-screen flex items-center justify-center bg-gray-100">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
        className="left-bg"
      >
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="25%" stopColor="#f9d423" />
            <stop offset="75%" stopColor="#f83600" />
          </linearGradient>
        </defs>
        <path
          d="M208.09,0.00 C152.70,67.10 262.02,75.98 200.80,150.00 L0.00,150.00 L0.00,0.00 Z"
          style={{ stroke: "none", fill: "url('#myGradient')" }}
        ></path>
      </svg>
      <div className="absolute top-0 p-8 flex justify-between  w-full items-center">
        <h1 className="text-3xl uppercase font-bold text-shadow-2xs">
          Tasawar
          <br />
          Mahmood
        </h1>
        <button
          onClick={() => navigate("/register")}
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
          Register
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="main-form bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-1 text-center">Login</h2>
        <h4 className="text-sx text-gray-500 mb-7 text-center">
          Welcome back! Please login
        </h4>
        <div className="flex items-center border rounded mb-3 px-2">
          <FiMail className="text-red-400" />
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Email"
            className="w-full p-2 outline-none"
          />
        </div>
        <div className="flex items-center border rounded mb-3 px-2">
          <TbLockPassword className="text-red-400" />
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Password"
            className="w-full p-2 outline-none"
          />
        </div>
        <button type="submit" className="w-full text-white p-2 rounded app-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
