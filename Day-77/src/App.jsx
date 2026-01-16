import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [allData, setallData] = useState([])

  const GetData=async()=>{
    const response = await axios.get("https://picsum.photos/v2/list");
    setallData(response.data);
  }
  return (
    <div className="p-20">
      <button onClick={GetData} className="px-5 py-3 bg-emerald-300 rounded-xl">Get Data</button>
      {allData.map(function(val,idx){
        return <h1 key={idx}>{val.author}</h1>
      })}
    </div>
  );
};

export default App; 
