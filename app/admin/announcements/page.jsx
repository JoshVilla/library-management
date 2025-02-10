"use client";
import TitlePage from "@/components/titlePage/titlePage";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import AddAnnouncement from "./addAnnouncement";
import { getAnnouncement } from "@/app/service/api";

const Page = () => {
  const [announcements, setAnnouncements] = useState([]);
  const fetchData = async () => {
    try {
      const res = await getAnnouncement();
      console.log(res);
      if (res.announcements) {
        setAnnouncements(res.announcements);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TitlePage title="Announcements" />
      <Separator className="mt-4" />
      <div className="p-2 border flex">
        <div className="flex-1">
          <AddAnnouncement callAfterSuccess={fetchData} />
        </div>
        <div className="flex-1">
          {announcements.map((announce, idx) => (
            <div key={idx}>{announce.announcement}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
