import React from "react";
import MiddleImg from "../../assets/Middle.png";
const Card2 = () => {
  return (
    <div
      className="h-75 w-100 flex justify-center items-center bg-red-300 rounded-3xl"
      style={{
        backgroundImage: `url(${MiddleImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <button className="py-3 px-5 bg-gray-400 text-white font-semibold rounded-full">Private and Group Lesson</button>
    </div>
  );
};

export default Card2;
