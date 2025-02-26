import React from "react";
import { Badge } from "@/components/ui/badge";
import { STATUS } from "@/utils/constant";
const StatusBadge = ({ status }) => {
  let text = "";
  let className = "";
  if (status === STATUS.INPROGRESS) {
    (text = "Borrowing in Progress"), (className = "bg-yellow-600 text-white");
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
    (text = "Cancelled"), (className = "bg-red-700 text-white");
  }
  if (status === STATUS.RETURNED) {
    (text = "Returned"), (className = "bg-sky-600 text-white");
  }
  if (status === STATUS.FAILED) {
    (text = "Failed to return"), (className = "bg-gray-800 text-white");
  }
  return <Badge className={className}>{text}</Badge>;
};

export default StatusBadge;
