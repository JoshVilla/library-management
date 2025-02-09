import Image from "next/image";
import React from "react";

const EmptyData = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="text-center">
        <Image
          src={"/assets/empty-folder.png"}
          width={100}
          height={100}
          alt="empty"
        />
        <div className="text-gray-400 font-bold">No Data</div>
      </div>
    </div>
  );
};

export default EmptyData;
