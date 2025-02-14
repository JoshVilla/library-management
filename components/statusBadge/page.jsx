import React from "react";
import { Badge } from "@/components/ui/badge";
import { STATUS } from "@/utils/constant";
const StatusBadge = ({ status }) => {
  let text = "";
  let className = "";
  if (status === STATUS.INPROGRESS) {
    (text = "I Borrowing in Progress"),
      (className = "bg-yellow-600 text-white");
  }
  if (status === STATUS.PENDING) {
    text = "Pending";
    className = "bg-white text-black";
  }
  if (status === STATUS.APPROVED) {
    text = "Aprroved";
    className = "bg-green-700 text-white";
  }
  if (status === STATUS.CANCELLED) {
    (text = "Cancelled"), (className = "bg-black text-white");
  }
  return <Badge className={className}>{text}</Badge>;
};

export default StatusBadge;
