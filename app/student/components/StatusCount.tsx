import DashCard from "@/components/dashCard/dashCard";
import React from "react";
import { Ban, Check, CircleCheck, CircleDashed, CircleX, Loader } from "lucide-react";
const StatusCount = ({ count, isLoading }) => {
  const { pending, returned, canceled, approved, borrowing, failed } = count;
  return (
    <div className="my-6">

      <div className="flex items-center flex-wrap gap-4">
        <DashCard title="Pending" data={pending} icon={<CircleDashed className="text-yellow-500" />} />
        <DashCard title="Approved" data={approved} icon={<Check className="text-green-500" />} />
        <DashCard title="Borrowing" data={borrowing} icon={<Loader className="text-blue-500" />} />
        <DashCard title="Returned" data={returned} icon={<CircleCheck className="text-emerald-500" />} />
        <DashCard title="Canceled" data={canceled} icon={<Ban className="text-red-500" />} />
        <DashCard title="Failed" data={failed} icon={<CircleX className="text-orange-500" />} />
      </div>

    </div>
  );
};

export default StatusCount;
