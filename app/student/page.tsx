"use client";
import TitlePage from "@/components/titlePage/titlePage";
import React, { useEffect, useState } from "react";
import { getAnnouncement, studentDashboard } from "../service/api";
import { format } from "date-fns";
import { IAnnouncement, IStudent, StudentDashboard } from "../service/types";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import StatusCount from "./components/StatusCount";

const Page = () => {
  const state = useSelector((state: RootState) => state.user.userInfo) as IStudent;
  const [announcement, setAnnouncement] = useState<IAnnouncement | null>(null);
  const [studentDashboardState, setStudentDashboardState] = useState<StudentDashboard | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchAnnouncement = async () => {
    try {
      const response = await getAnnouncement({ isPinned: true });
      if (response.data) {
        setAnnouncement(response.data[0]);
      }
    } catch (error) { 
      console.log(error);
    }
  };

  const renderDate = (date: string) => {
    return date ? format(new Date(date), "MMM dd, yyyy") : "";
  };

  const fetchStudentDashboard = async () => {
    try {
      setIsLoading(true);
      const response = await studentDashboard({ studentId: state._id });
      if (response.data) {
        setStudentDashboardState(response.data);
        console.log(response.data.countStatus);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };  

  useEffect(() => {
    fetchAnnouncement();
    fetchStudentDashboard();
  }, []);

  return (
    <div>
      <TitlePage title="Dashboard" />
      {/* Annoucement */}
      {announcement && (
        <div className=" dark:bg-green-600 bg-green-100 p-4 my-4 rounded-lg">
          <div className="flex justify-between">
            <div className="text-lg font-semibold">Announcement!!</div>
            <div className="text-sm text-gray-500 dark:text-white">
              Posted last:{renderDate(announcement.createdAt)}
            </div>
          </div>
          <div className="mt-2">{announcement.announcement}</div>
        </div>
      )}
      {studentDashboardState && (
        <StatusCount count={studentDashboardState.countStatus} isLoading={isLoading} />
      )}
    </div>
  );
};

export default Page;
