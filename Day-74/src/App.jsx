import React, { useState } from "react";

const App = () => {
  const [UserName, setUserName] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    setUserName('');
  }
  return (
    <div className="h-screen bg-gray-950">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="p-12 flex gap-6 bg-gray-500"
      >
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text"
          required
          value={UserName}
          className="p-2 rounded-3xl outline-0 border-2 border-blue-600"
          placeholder="Enter Your Name"
        />
        <button className="cursor-pointer p-3 bg-emerald-400 rounded-2xl transition duration-300 active:scale-95">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
