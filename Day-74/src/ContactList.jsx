import React, { useState } from "react";

const ContactList = () => {
  const [title, settitle] = useState("");
  const [allUsers, setallUsers] = useState([]);
  function submitHandler(e) {
    e.preventDefault();
    console.log(allUsers);
    const NewAllUsers = [...allUsers];
    NewAllUsers.push(title);
    setallUsers(NewAllUsers);

    settitle("");
  }
  return (
    <div className="h-screen w-full bg-gray-900 p-12">
      <form
        className="bg-gray-700 p-6 flex gap-6"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          onChange={(e) => {
            settitle(e.target.value);
          }}
          type="text"
          placeholder="Enter Your Name"
          required
          value={title}
          className="p-3 outline-0 border-2 border-blue-500 rounded-full"
        />
        <button className="px-5 py-2 bg-blue-400 rounded-full">Submit</button>
      </form>
      {allUsers.map(function (val, idx) {
        return <h1 key={idx}>{val}</h1>;
      })}
    </div>
  );
};

export default ContactList;
