import React, { useState } from "react";

const App = () => {
  const [val, setval] = useState(0);
  function Increase() {
    setval(val + 1);
  }
  function Decrease() {
    setval(val-1)
  }
  const message=val===10?'Maximum Reached':val===0?'Minimum Reached':'';
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-700">
      <div className="w-150 h-80 bg-blue-500 rounded-2xl flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">{val}</h1>
        <div className="flex mt-5 gap-6">
          <button disabled={val>=10}
            onClick={Increase}
            className="px-4 py-2 bg-red-400 rounded-2xl cursor-pointer"
          >
            Increase
          </button>
          <button disabled={val<=0}
            onClick={Decrease}
            className="px-4 py-2 bg-red-400 rounded-2xl curpoi"
          >
            Decrease
          </button>
        </div>
        <p className="text-lg font-semibold text-black">{message}</p>
      </div>
    </div>
  );
};

export default App;
