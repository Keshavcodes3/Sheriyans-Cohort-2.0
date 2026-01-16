import React from "react";

const Top = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-6">
      <div className="">
        <h1 className="text-lg p-2 border-2 rounded-full">About Horizon</h1>
      </div>
      <div className="w-[40%] sm:flex sm:justify-center">
        <h1 className="text-xl font-semibold text-black">
          At Horizon , We don't just Play Tennis -we live it. Since 2021 , Our
          Club has been home for players of all levels , from eager beginners to
          to seasoned pros.
        </h1>
      </div>
    </div>
  );
};

export default Top;
