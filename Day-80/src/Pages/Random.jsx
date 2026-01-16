import React from "react";
import { useParams } from "react-router-dom";

const Random = () => {
  const param=useParams();
  return (
    <div>
      <h1 className="text-4xl text-blue-600 font-bold absolute top-1/2 left-1/2 -translate-1/2">
        ${param} Page
      </h1>
    </div>
  );
};

export default Random;
