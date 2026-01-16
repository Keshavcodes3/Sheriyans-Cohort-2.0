import React from "react";
import HomeImg from "../assets/Home.png";
const Middle = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${HomeImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <h1 className="text-xl sm:text-3xl md:text-5xl text-white font-bold">
          Unleash Your Inner Champion Today .
        </h1>
        <h1 className="text-xl md:text-5xl text-white font-bold mt-2">All in One Place</h1>
        <div className="max-w-210">
          <p className="mt-2 text-lg md:text-2xl text-white font-bold">
            Join the ultimate Tennis Experience - Where Passion Meets Perfomance
            , and every swings brings you closer to Victory
          </p>
        </div>
      </div>
      <button className="px-3 py-3 bg-black text-white font-semibold text-xl rounded-full mt-8">Start Your Own Journey</button>
    </div>
  );
};

export default Middle;
