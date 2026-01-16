import React from "react";
import Left from "../Components/Footer/Left";
import Right from "../Components/Footer/Right";
import Middle from "../Components/Footer/Middle.jsx";
const Footer = () => {
  return (
    <div className="max-h-screen grid grid-cols-3 gap-4 p-10 w-full">
      <Left />
      <Middle />
      <Right />
    </div>
  );
};

export default Footer;
