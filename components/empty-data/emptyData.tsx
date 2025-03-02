import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

const EmptyData = () => {
  const theme = useTheme();
  const themeMode = theme.theme;
  return (
    <div className="w-full flex justify-center py-10">
      <div className="text-center">
        <Image
          src={themeMode === "dark" ? "/assets/empty-folder-dark.png" : "/assets/empty-folder-light.png"}
          width={100}
          height={100}
          alt="empty"
        />
        <div className="text-gray-400 font-bold mt-4">No Data</div>
      </div>
    </div>
  );
};

export default EmptyData;
