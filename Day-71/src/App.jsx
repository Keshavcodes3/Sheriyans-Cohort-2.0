import React from "react";
import Card from "./Component/Card";
const App = () => {
  const jobCards = [
    {
      companyName: "Google",
      saved:true,
      logo: "../public/Google.jpg",
      role: "Frontend Engineer",
      workType: "Full-time",
      level: "Senior",
      locationType: "Remote",
      salary: "$120,000 / year",
    },
    {
      companyName: "Microsoft",
      saved:false,
      logo: "../public/Microsoft.jpg",
      role: "Software Developer",
      workType: "Full-time",
      level: "Mid-level",
      locationType: "In-Office",
      salary: "$105,000 / year",
    },
    {
      companyName: "Amazon",
      saved:true,
      logo: "../public/Amazon.jpg",
      role: "Backend Engineer",
      workType: "Full-time",
      level: "Senior",
      locationType: "Hybrid",
      salary: "$130,000 / year",
    },
    {
      companyName: "Netflix",
      saved:false,
      logo:"../public/Netflix.jpg",
      role: "UI Engineer",
      workType: "Full-time",
      level: "Senior",
      locationType: "Remote",
      salary: "$140,000 / year",
    },
    {
      companyName: "Meta",
      saved:true,
      logo: "../public/Meta.jpg",
      role: "React Developer",
      workType: "Part-time",
      level: "Mid-level",
      locationType: "Remote",
      salary: "$60 / hour",
    },
    {
      companyName: "Apple",
      saved:false,
      logo: "../public/Apple.jpg",
      role: "iOS Developer",
      workType: "Full-time",
      level: "Senior",
      locationType: "In-Office",
      salary: "$135,000 / year",
    },
  ];

  return (
    <div className="p-12 h-screen w-full flex flex-wrap gap-12 items-center bg-gray-400">
      {jobCards.map(function (elem) {
        return <Card prop={elem} />;
      })}
    </div>
  );
};

export default App;
