import React from "react";
import BatImg from '../../assets/Bat.png';

const Middle = () => {
  return (
    <div className="h-full w-full  flex flex-col items-start justify-between p-10 rounded-3xl"
      style={{
        backgroundImage: `url(${BatImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button className="px-5 py-2 bg-gray-300 text-lg  rounded-full">Training Programs</button>
      <h1 className="text-lg text-white font-semibold max-w-50">Programs Designed for all ages and Capabilities</h1>
    </div>
  );
};

export default Middle;
