import React from "react";
import BallImg from "../../assets/balls.png";
const Right = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div
        className="h-full flex-1 w-full  flex flex-col items-start justify-between p-10 rounded-3xl"
        style={{
          backgroundImage: `url(${BallImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button className="px-5 py-2 bg-gray-300 text-lg  rounded-full">
          Court Access
        </button>
        <h1 className="text-lg text-white font-semibold max-w-50">
          Hourly Court Rental
        </h1>
      </div>
      <div className="h-[30%] px-2 mt-3 max-w-89.5">
        <h1 className="text-lg font-semibold">Step into a space built for players- to grow , compete and thrive</h1>
      </div>
    </div>
  );
};

export default Right;
