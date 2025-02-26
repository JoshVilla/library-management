import React from "react";
import { Skeleton } from "../ui/skeleton";
const PieGraphSkeleton = () => {
  return (
    <div className="p-4 flex justify-center flex-col items-center">
      <Skeleton className="p-2 w-28" />
      <Skeleton className="rounded-full w-40 h-40 my-4" />
      <Skeleton className="p-2 w-full" />
    </div>
  );
};

export default PieGraphSkeleton;
