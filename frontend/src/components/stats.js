import React from "react";

const Stat = ({ title, number, icon, color, textColor , category , range }) => {
    return (
      <div className="shadow p-5 rounded-xl bg-white space-y-6">
        <h1 className="font-semibold">{title}</h1>
        <div className="flex justify-between">
          <p className="font-semibold text-xl">{number}</p>
          <div className={`p-3 rounded-full text-white ${color}`}>
            {icon}
          </div>{" "}
        </div>
        <p className="text-xs text-gray-400">
          Total {category} <span className={`${textColor}`}>{number}</span> {range}
        </p>
      </div>
    );
  };
  
  export default Stat;
  