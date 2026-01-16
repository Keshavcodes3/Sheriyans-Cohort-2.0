import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-end absolute w-full bottom-0 p-5 bg-green-200">
      <h2 className="font-bold text-2xl text-green-600">Footer</h2>
      <button
        onClick={() => {
          navigate("/Courses");
        }}
        className="px-4 py-2 bg-green-300 rounded-xl"
      >
        Explore Courses
      </button>
    </div>
  );
};

export default Footer;
