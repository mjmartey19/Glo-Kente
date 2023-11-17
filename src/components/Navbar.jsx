import React from "react";
import logo from "../assets/logo.jpg";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full  flex fixed left-0 right-0 top-0 justify-between items-center py-5 px-10 bg-white/20 z-10">
      <img src={logo} className="w-20" />
      <div className="flex gap-2">
        <Link
          to="/login"
          className={` border-2 px-5 font-semibold py-1 text-white rounded-3xl hover:bg-white hover:text-black`}
        >
          Log In
        </Link>
        <Link
          to="/register"
          className={` border-2 bg-white px-5 font-semibold py-1 text-black rounded-3xl hover:opacity-90`}
        >
          Sign Up
        </Link>
       
      </div>
    </div>
  );
};

export default Navbar;
