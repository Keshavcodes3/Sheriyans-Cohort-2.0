import React from "react";

const Button = ({ text }) => {
  return (
    <button className="px-4 py-1 bg-gray-200 rounded-xl text-gray-900 text-xl font-semibold">
      {text}
    </button>
  );
};

export default Button;
