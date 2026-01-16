import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full left-0 top-0 bg-blue-300 flex justify-between items-center px-6 py-3">
      <h1 className="text-3xl font-bold">Navbar</h1>
      <div className="flex gap-3">
        <NavLink
          to={"/"}
          style={({ isActive }) => ({ color: isActive ? "white" : "blue" })}
        >
          Home
        </NavLink>
        <NavLink
          to={"/contact"}
          style={({ isActive }) => ({ color: isActive ? "white" : "blue" })}
        >
          Contact
        </NavLink>
        <NavLink
          to={"/About"}
          style={({ isActive }) => ({ color: isActive ? "white" : "blue" })}
        >
          About us
        </NavLink>
        <NavLink
          to={"/courses"}
          style={({ isActive }) => ({ color: isActive ? "white" : "blue" })}
        >
          Courses
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
