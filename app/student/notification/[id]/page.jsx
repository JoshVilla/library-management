"use client";
import { notificationItem } from "@/app/service/api";
import LoadingComp from "@/components/loading/loadingComp";
import TitlePage from "@/components/titlePage/titlePage";
import { Separator } from "@/components/ui/separator";
import { renderDate } from "@/utils/helpers";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const res = await notificationItem({ id: params.id });
      if (res) {
        setData(res.notification);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  console.log(data);
  return (
    <div>
      <TitlePage title="Notification Details" hasBack />
      <Separator className="mt-4" />
      {isLoading ? (
        <div className="flex items-center flex-col justify-center">
          <LoadingComp />
          <div>Loading Notification...</div>
        </div>
      ) : (
        <div className="mt-10">
          <div className="text-xl">{data?.message}</div>
          <div className="text-sm">
            Notified last: {renderDate(data?.createdAt)}
          </div>
          <div className="my-10">Reason of aprrove: {data?.reason}</div>
          <div className="space-y-4">
            <div className="text-lg font-semibold">Request Details</div>
            <div className="text-sm">Book Title: {data?.titleBook}</div>
            <div className="text-sm">Book Author: {data?.authorBook}</div>
            <div className="text-sm">
              Dueation of Borrowing: {data?.borrowDuration}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
