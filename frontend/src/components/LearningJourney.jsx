// MERN Stack Learning Template - Started January

import React from "react";

const LearningJourney = () => {
  return (
    // <div className="min-h-screen bg-gray-100 py-10">
    //   <div className="max-w-5xl mx-auto">
    //     <h1 className="text-3xl font-bold text-center text-gradient bg-gradient-to-r from-[#f83600] to-[#f9d423] text-transparent bg-clip-text">
    //       My MERN Stack Learning Journey
    //     </h1>
    //     <p className="mt-4 text-gray-700 text-center">
    //       Started in <strong>January</strong>, this project tracks everything
    //       I’ve learned in the MERN Stack using <strong>ReactJS</strong> and{" "}
    //       <strong>Tailwind CSS</strong>.
    //     </p>
    //   </div>

    //   <div className="max-w-5xl mx-auto">
    //     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    //       <section className="bg-white shadow-lg rounded-lg p-6">
    //         <h2 className="text-xl font-semibold text-[#f83600]">
    //           ✅ January – ReactJS Basics
    //         </h2>
    //         <ul className="list-disc pl-6 text-gray-700">
    //           <li>JSX, Components, Props, and State</li>
    //           <li>React Hooks: useState, useEffect</li>
    //           <li>Creating responsive UI with Tailwind CSS</li>
    //           <li>First mini project: Todo App</li>
    //         </ul>
    //       </section>

    //       <section className="bg-white shadow-lg rounded-lg p-6">
    //         <h2 className="text-xl font-semibold text-[#f83600]">
    //           ✅ February – Backend + MongoDB
    //         </h2>
    //         <ul className="list-disc pl-6 text-gray-700">
    //           <li>Node.js & Express basics</li>
    //           <li>MongoDB & Mongoose CRUD operations</li>
    //           <li>Connecting frontend with backend using Axios</li>
    //           <li>User Management System (CRUD App)</li>
    //         </ul>
    //       </section>

    //       <section className="bg-white shadow-lg rounded-lg p-6">
    //         <h2 className="text-xl font-semibold text-[#f83600]">
    //           ✅ March – Authentication
    //         </h2>
    //         <ul className="list-disc pl-6 text-gray-700">
    //           <li>JWT Authentication & Authorization</li>
    //           <li>Login/Signup UI with Tailwind</li>
    //           <li>Protected Routes and Role-based Access</li>
    //           <li>Full Auth Project Deployment</li>
    //         </ul>
    //       </section>

    //       <section className="bg-white shadow-lg rounded-lg p-6">
    //         <h2 className="text-xl font-semibold text-[#f83600]">
    //           🛠️ Ongoing – Real Projects
    //         </h2>
    //         <ul className="list-disc pl-6 text-gray-700">
    //           <li>Note App with CRUD</li>
    //           <li>Dashboard with Admin/User roles</li>
    //           <li>Real Estate MERN App (Planned)</li>
    //         </ul>
    //       </section>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-white -mt-1">
      {/* Banner Wave Divider */}
      <svg
        className="w-full"
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="myGradient">
            <stop offset="25%" stopColor="#f9d423" />
            <stop offset="75%" stopColor="#f83600" />
          </linearGradient>
        </defs>
        <path
          style={{ stroke: "none", fill: "url('#myGradient')" }}
          d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Intro Text */}
      <div className="text-center py-10 px-4">
        <h2 className="text-3xl font-bold text-orange-500">
          🚀 My MERN Stack Learning Journey
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Started in <strong>January</strong>, this timeline tracks everything
          I’ve learned in the MERN Stack using <strong>ReactJS</strong> and{" "}
          <strong>Tailwind CSS</strong>.
        </p>
      </div>

      {/* Learning Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 pb-12 max-w-6xl mx-auto">
        {/* January */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-green-600 flex items-center gap-2">
            ✅ January – ReactJS Basics
          </h3>
          <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm leading-relaxed">
            <li>JSX, Components, Props, and State</li>
            <li>React Hooks: useState, useEffect</li>
            <li>Creating responsive UI with Tailwind CSS</li>
            <li>First mini project: Todo App</li>
          </ul>
        </div>

        {/* February */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-red-600 flex items-center gap-2">
            ✅ February – Backend + MongoDB
          </h3>
          <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm leading-relaxed">
            <li>Node.js & Express basics</li>
            <li>MongoDB & Mongoose CRUD operations</li>
            <li>Connecting frontend with backend using Axios</li>
            <li>User Management System (CRUD App)</li>
          </ul>
        </div>

        {/* March */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 flex items-center gap-2">
            🔐 March – Authentication
          </h3>
          <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm leading-relaxed">
            <li>JWT Authentication & Authorization</li>
            <li>Login/Signup UI with Tailwind</li>
            <li>Protected Routes and Role-based Access</li>
            <li>Full Auth Project Deployment</li>
          </ul>
        </div>

        {/* Ongoing */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-pink-600 flex items-center gap-2">
            🧠 Ongoing – Real Projects
          </h3>
          <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm leading-relaxed">
            <li>Note App with CRUD</li>
            <li>Dashboard with Admin/User roles</li>
            <li>Real Estate MERN App (Planned)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
