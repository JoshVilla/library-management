"use client";
import { weeklyBookStats } from "@/app/service/api";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Graph = () => {
  const params = useParams();
  const fetchData = async () => {
    try {
      const res = await weeklyBookStats({ bookId: params.id });
      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [params]);

  return <div></div>;
};

export default Graph;
