"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const TitlePage = ({ title, hasBack = false }) => {
  const router = useRouter();
  return (
    <div>
      {hasBack ? (
        <div className="flex gap-10 items-center">
          <ArrowLeft
            className="cursor-pointer hover:opacity-75 transition duration-200"
            onClick={() => router.back()}
          />
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      ) : (
        <h1 className="text-2xl font-bold">{title}</h1>
      )}
    </div>
  );
};

export default TitlePage;
