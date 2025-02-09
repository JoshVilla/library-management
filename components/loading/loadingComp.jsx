import Image from "next/image";
import React from "react";

const LoadingComp = () => {
  return (
    <div className="w-fill flex justify-center py-6">
      <Image src={"/assets/loading.gif"} height={50} width={50} alt="loading" />
    </div>
  );
};

export default LoadingComp;
