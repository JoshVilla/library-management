import { STATUS } from "@/utils/constant";
import React from "react";

const Status = ({ status }) => {
  let style = {};
  let text = "";

  if (status === STATUS.PENDING) {
    text = "Pending";
    style.backgroundColor = "gray";
  }
  if (status === STATUS.APPROVED) {
    text = "Approved";
    style.backgroundColor = "green";
  }
  if (status === STATUS.CANCELLED) {
    text = "Cancelled";
    style.backgroundColor = "red";
  }

  return (
    <div className="flex items-center gap-2">
      <div
        style={{
          ...style,
          height: "7px",
          width: "7px",
          borderRadius: "50%",
        }}
      />
      <div className="text-sm">{text}</div>
    </div>
  );
};

export default Status;
