import React from "react";
import { Skeleton } from "../ui/skeleton";

const DashCardSkeleton = () => {
  return (
    <Skeleton className="p-4 rounded-lg border w-72 flex gap-4">
      <Skeleton className="border rounded-full flex items-center justify-center w-14 h-14"></Skeleton>
      <div className="w-24 flex flex-col gap-2 items-center">
        <Skeleton className="text-sm font-bold p-2 w-full" />
        <Skeleton className="text-xl font-bold p-2 w-full" />
      </div>
    </Skeleton>
  );
};

export default DashCardSkeleton;
