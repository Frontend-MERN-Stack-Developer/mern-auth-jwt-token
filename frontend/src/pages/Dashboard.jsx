import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const token = JSON.parse(localStorage.getItem("token"));

  const fetchData = () => {
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://localhost:2100/api/profile", {}, header)
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
        console.log("User data fetched", res);
      })
      .catch((err) => {
        console.log("Error while fetch data", err);
        setLoading(false);
      });
  };

  console.log("data", data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p className="text-center font-semibold mt-3">
        {loading && "Data is loading..."}
      </p>
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Name : {data.name}
          </h2>
          <p className="text-gray-700 text-base mb-2">Email: {data.email}</p>
          <p className="text-gray-700 text-base">ID: {data.id}</p>
          <button
            onClick={handleLogout}
            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
