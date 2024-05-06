// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
// import Contact from "../models/Contact";

const Navbar = () => {
  return (
    <div className="fixed w-full text-white  z-20">

        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-dark2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to= "/">
              <h1 className=" text-2xl font-bold tracking-wider ">FitnessCheck.</h1>
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <NavLink to="/" className=" hover:text-hoverColor transition-all cursor-pointer">
              Home
            </NavLink>

            <NavLink to="/about" className=" hover:text-hoverColor transition-all cursor-pointer">
              About Us
            </NavLink>

            <NavLink to="/services" className=" hover:text-hoverColor transition-all cursor-pointer">
              Services
            </NavLink>

            <NavLink to="/doctors" className=" hover:text-hoverColor transition-all cursor-pointer">
              Doctors
            </NavLink>
            
            <NavLink to="/contact" className=" hover:text-hoverColor transition-all cursor-pointer">
              Contact
            </NavLink>
              
          </nav>

          <div className="hidden md:flex lg:flex rounded-lg gap-5">
            <NavLink to="/login"
              className=" shadow-md font-semibold bg-lime-600 border-2 border-lime-700 hover:border-zinc-600 text-white px-4 py-2 rounded-md hover:bg-lime-500 transition duration-300 ease-in-out"
            >
              Login
            </NavLink>
            <button
              className=" shadow-md font-semibold bg-lime-600 border-2 border-lime-700 hover:border-zinc-600 text-white px-4 py-2 rounded-md hover:bg-lime-500 transition duration-300 ease-in-out"
            >
              Book an Appointment
            </button>
          </div>
        </div>
    </div>
  );
};

export default Navbar