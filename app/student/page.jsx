"use client";
import TitlePage from "@/components/titlePage/titlePage";
import React, { useEffect, useState } from "react";
import { getAnnouncement } from "../service/api";
import { format } from "date-fns";

const Page = () => {
  const [announcement, setAnnouncement] = useState(null);
  const fetchAnnouncement = async () => {
    try {
      const response = await getAnnouncement({ isPinned: true });
      if (response.announcements) {
        setAnnouncement(response.announcements[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderDate = (date) => {
    return date ? format(new Date(date), "MMM dd, yyyy") : "";
  };

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  return (
    <div>
      <TitlePage title="Dashboard" />
      {/* Annoucement */}
      {announcement && (
        <div className="bg-green-100 p-4 my-4">
          <div className="flex justify-between">
            <div className="text-lg font-semibold">Announcement!!</div>
            <div className="text-sm text-gray-500">
              Posted last:{renderDate(announcement.createdAt)}
            </div>
          </div>
          <div className="mt-2">{announcement.announcement}</div>
        </div>
      )}
    </div>
  );
};

export default Page;
