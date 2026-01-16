import React from "react";

const Nav = () => {
  return (
    <div className="h-16 w-full bg-white fixed top-0 left-0 flex justify-between items-center p-6">
      <h1 className="text-2xl font-semibold">Horizon Courts</h1>
      <ul className="hidden sm:flex gap-5">
        <li className="text-md cursor-pointer font-medium transition-all duration-300 hover:text-blue-500">
          About
        </li>
        <li className="text-md cursor-pointer font-medium transition-all duration-300 hover:text-blue-500">
          Services
        </li>
        <li className="text-md cursor-pointer font-medium transition-all duration-300 hover:text-blue-500">
          Coaches
        </li>
        <li className="text-md cursor-pointer font-medium transition-all duration-300 hover:text-blue-500">
          Events
        </li>
        <li className="text-md cursor-pointer font-medium transition-all duration-300 hover:text-blue-500">
          Contact
        </li>
      </ul>
      <button className="px-3.5 py-2.5 rounded-full bg-black text-white text-lg">
        Book Now
      </button>
    </div>
  );
};

export default Nav;
