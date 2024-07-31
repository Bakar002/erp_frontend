import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <div>
      <nav className=" md:flex justify-between p-3 overflow-hidden bg-gradient-to-r from-blue-400 to-green-500">
        <div className="flex items-center justify-between w-full md:w-1/4">
          <img src={logo} className="w-[11rem] h-[4rem]" alt="" />
          <div className="md:hidden">
            <button
              className="text-3xl"
              onClick={() => setshowMenu(!showMenu)}
            >
              {showMenu ? (
                <RxCross2 className="text-white" />
              ) : (
                <IoMenuSharp className="text-white" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:flex items-center md:w-full justify-between ${showMenu ? "block" : "hidden md:flex"}`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:w-3/4">
            <ul className="flex flex-col md:flex-row md:justify-center gap-5 items-center w-full">
              <li className="nav-item mt-1 md:mt-0">
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li className="nav-item mt-1 md:mt-0">
              <Link to="servicesSection" className="text-white">Services</Link>
              </li>
              <li className="nav-item mt-1 md:mt-0">
                <a href="https://example.com" className="text-white">About Us</a>
              </li>
              <li className="nav-item mt-1 md:mt-0">
                <a href="https://example.com" className="text-white">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:w-1/4">
            <ul className="flex flex-col md:flex-row md:justify-end md:items-center w-full mt-2 md:mt-0 gap-3">
              <li className="mt-2 md:mt-0 md:ml-4">
                <Link
                  to="/admin-login"
                  className="bg-blue-700 block px-6 md:px-4 py-1 rounded-md font-bold border-2 border-blue-700 text-white hover:bg-blue-900 hover:text-white text-center"
                >
                  Login
                </Link>
              </li>
              <li className="mt-2 md:mt-0 ">
                <Link
                  to="/admin-signup"
                  className="bg-green-700 block px-6 md:px-4 py-1 rounded-md font-bold border-2 border-green-700 text-white hover:bg-green-900 hover:text-white text-center"
                >
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
