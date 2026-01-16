import React from "react";

const Bottom = () => {
  return (
    <div className=" max-h-screen w-full flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl text-gray-400">
          A few More Facts about us in numbers
        </h1>
      </div>
      <div className="flex gap-50 items-center mt-7">
        <div className="flex justify-around items-center  ">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-gray-700">12000+</h1>
            <p className="text-lg font-medium text-gray-500">Hours of play anuualy</p>
          </div>
        </div>
        <div className="flex justify-around items-center  ">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-gray-700">89%</h1>
            <p className="text-lg font-medium text-gray-500">Play Retention Rate</p>
          </div>
        </div>
        <div className="flex justify-around items-center ">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-gray-700">1200+</h1>
            <p className="text-lg font-medium text-gray-500">Active Members</p>
          </div>
        </div>
        <div className="flex justify-around items-center ">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-gray-700">125+</h1>
            <p className="text-lg font-medium text-gray-500">Annual Tournaments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
