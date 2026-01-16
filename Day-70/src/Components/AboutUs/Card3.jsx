import React from "react";

const Card3 = () => {
  return (
    <div className="h-75 w-100 bg-red-300 rounded-3xl p-6">
      <h1 className="text-5xl text-gray-600 font-bold pl-1">100+</h1>
      <h2 className="text-2xl text-gray-500 font-bold pl-3 mt-2">
        Pro Coaches
      </h2>
      <h3 className="text-lg text-gray-700 pl-3">
        Certified Professionals ready to boost your game from first serve to
        tournament level
      </h3>
      <div className="flex flex-col gap-2 p-3">
        <div className="flex justify-between">
          <h1 className="text-lg text-black">Beginner</h1>
          <div className="flex gap-2 justify-center items-center">
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
          </div>
          <h1>55</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-lg text-black">InterMediate</h1>
          <div className="flex gap-2 justify-end items-center">
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
          </div>
          <h1>40</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-lg text-black">Beginner</h1>
          <div className="flex gap-2">
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
          </div>
          <h1>30</h1>
        </div>
      </div>
    </div>
  );
};

export default Card3;
