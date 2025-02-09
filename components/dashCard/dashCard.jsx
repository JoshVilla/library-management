import React from "react";

const DashCard = ({ icon, title, data }) => {
  return (
    <div className="p-4 rounded-lg border w-72 flex gap-4">
      <div className="border rounded-full flex items-center justify-center w-14 h-14">
        {icon}
      </div>
      <div>
        <div className="text-sm font-bold">{title}</div>
        <div className="text-xl font-bold">{data.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default DashCard;
