"use client";

import { Skeleton } from "../ui/skeleton";

const CarouselSkeleton = () => {
  return (
    <div className="w-[270px] flex flex-col items-center">
      <Skeleton className="w-24 h-24 rounded-lg" />
      <div className="mt-4 space-y-2">
        <Skeleton className="w-32 h-3" />
        <Skeleton className="w-24 h-3" />
      </div>
    </div>
  );
};

export default CarouselSkeleton;
