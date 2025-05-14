import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { MdOutlineAccountBox } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const userData = {
    name: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(userData);
  const [loading, setLoading] = useState(false);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:2100/api/register",
  //       user
  //     );
  //     setUser(response);
  //     // setUser("");
  //     navigate("/");
  //   } catch (error) {
  //     console.log("Error while submited form", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2100/api/register",
        user
      );
      toast("User register successfully");
      console.log("User registered:", response.data);
      setUser(response.data);
      navigate("/register");
    } catch (error) {
      toast("User register failed");
      console.error("Error while submitting form:", error);
    } finally {
      setLoading(false);
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
          onClick={() => navigate("/login")}
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
          Login
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="main-form bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-1 text-center">Create Account</h2>
        <h4 className="text-sx text-gray-500 mb-7 text-center">
          Join Tasawar's App — it only takes a minute!
        </h4>
        <div className="flex items-center border rounded mb-3 px-2 input-holder">
          <MdOutlineAccountBox className="text-red-400" />
          <input
            type="text"
            name="username"
            id="name"
            value={user.username}
            onChange={inputHandler}
            placeholder="Name"
            className="w-full p-2 outline-none"
          />
        </div>
        <div className="flex items-center border rounded mb-3 px-2 input-holder">
          <FiMail className="text-red-400" />
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={inputHandler}
            placeholder="Email"
            className="w-full p-2 outline-none"
          />
          {/* <p className="text-red-500 text-sm mt-1">Email is required</p> */}
        </div>
        <div className="flex items-center border rounded mb-3 px-2 input-holder">
          <TbLockPassword className="text-red-400" />
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={inputHandler}
            placeholder="Password"
            className="w-full p-2 outline-none"
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="disabled:opacity-70 w-full text-white p-2 rounded app-btn"
        >
          {loading ? "Register..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
