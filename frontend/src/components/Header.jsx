import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="shadow-lg px-3 py-2">
      <nav className="flex justify-between items-center">
        <h1 className="logoName text-3xl font-bold">Tasawar Mahmood</h1>

        <ul className="flex gap-6 ml-auto  mr-6">
          <li className="relative group">
            <a
              href="#"
              className="text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#f9d423] after:to-[#f83600] after:transition-all after:duration-300 group-hover:after:w-full"
            >
              Home
            </a>
          </li>

          <li className="relative group">
            <Link
              to="/register"
              className="text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#f9d423] after:to-[#f83600] after:transition-all after:duration-300 group-hover:after:w-full"
            >
              Register
            </Link>
          </li>
        </ul>

        <button
          onClick={() => navigate("/login")}
          type="button"
          className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#f83600] to-[#f9d423] border-1 border-[#f83600] font-bold text-white px-5 py-2 rounded-full"
        >
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
