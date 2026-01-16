import React, { useState } from "react";
const App = () => {
  const [userName, setuserName] = useState("");
  const [Role, setRole] = useState("");
  const [URL, setURL] = useState("");
  const [tag, settag] = useState("");
  const localData = JSON.parse(localStorage.getItem("All-users")) || [];
  const [AllUsers, setAllUsers] = useState(localData);

  const submitHandler = (e) => {
    e.preventDefault();
    const oldUser = [...AllUsers];
    oldUser.push({ userName, Role, URL, tag });
    localStorage.setItem('All-users',JSON.stringify(oldUser))
    setAllUsers(oldUser);
    setuserName("");
    setRole("");
    setURL("");
    settag("");
  };
  const DeleteHandler = (idx) => {
    console.log("Deleted");
    const copyUser = [...AllUsers];
    copyUser.splice(idx, 1);
    setAllUsers(copyUser);
    localStorage.setItem("All-users", JSON.stringify(copyUser));
    console.log(copyUser);
  };
  return (
    <div className="h-screen w-full bg-black text-white p-12">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col relative"
      >
        <input
          className="border text-xl font-bold px-5 py-2 rounded-xl m-2 w-80"
          type="text"
          placeholder="Enter your Name : "
          id="text"
          required
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Tag"
          value={tag}
          required
          onChange={(e) => settag(e.target.value)}
          className="border text-xl font-bold px-5 py-2 rounded-xl m-2 w-80"
        />
        <input
          className="border text-xl font-bold px-5 py-2 rounded-xl m-2 w-80"
          type="text"
          placeholder="Enter your Role : "
          id="text"
          required
          value={Role}
          onChange={(e) => setRole(e.target.value)}
        />

        <input
          className="border text-xl font-bold px-5 py-2 rounded-xl m-2 w-80"
          type="text"
          placeholder="Enter your Profile URL: "
          id="text"
          required
          value={URL}
          onChange={(e) => setURL(e.target.value)}
        />

        <button className="px-3 py-2 bg-blue-400 rounded-xl transition-all duration-200 w-80 hover:bg-blue-600">
          Create User
        </button>
      </form>
      <div className="flex gap-2 flex-wrap  ">
        {AllUsers.map(function (val, idx) {
          return (
            <div
              key={idx}
              className="w-80 bg-white rounded-xl shadow-lg p-6 hover:-translate-y-1 transition-all flex justify-center items-center flex-col"
            >
              <img src={val.URL} alt="" className="h-20 w-20 rounded-full" />
              <h2 className="text-xl font-bold text-gray-800">
                {val.userName}
              </h2>

              <p className="text-gray-500 mt-1">{val.Role}</p>

              <span className="inline-block mt-3 px-3 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
                {tag}
              </span>
              <button
                onClick={() => {
                  DeleteHandler(idx);
                }}
                href={val.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 text-red-600 px-3 py-2 bg-red-200 rounded-2xl font-semibold hover:underline"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
