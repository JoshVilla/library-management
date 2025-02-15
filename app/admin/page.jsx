"use client";

import DashCard from "@/components/dashCard/dashCard";
import TitlePage from "@/components/titlePage/titlePage";
import { Users, BookOpen } from "lucide-react"; // Import relevant icons
import { useEffect, useState } from "react";
import { dashboard, updateMonthlyBorrowedBooksStats } from "@/app/service/api";
import DashCardSkeleton from "@/components/skeleton/dashCardSkeleton";
import Captcha from "@/components/captcha/captcha";
import RequestTable from "./requestTable";
import Graphs from "./graphs";

export default function Home() {
  const [data, setData] = useState([]);
  const skeleteonArr = new Array(4).fill("skel");

  const fetchData = async () => {
    try {
      const res = await dashboard();
      if (res) {
        const formatKey = (key) =>
          key
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .replace(/\b\w/g, (char) => char.toUpperCase());

        const getIcon = (key) => {
          switch (key) {
            case "totalBooks":
              return <BookOpen width={30} height={30} />;
            case "totalStudents":
              return <Users width={30} height={30} />;
            default:
              return <Users width={30} height={30} />; // Default icon
          }
        };

        const result = Object.entries(res).map(([key, value]) => ({
          name: formatKey(key),
          value,
          icon: getIcon(key),
        }));
        setData(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateMonthlyBorrowedBooks = async () => {
    try {
      await updateMonthlyBorrowedBooksStats();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    updateMonthlyBorrowedBooks();
  }, []);

  return (
    <div>
      <TitlePage title="Dashboard" />
      <div className="flex flex-wrap">
        <div className="flex-1 p-6">
          <div className="flex items-center flex-wrap gap-10 my-4">
            {data.length === 0
              ? skeleteonArr.map((_, idx) => <DashCardSkeleton key={idx} />)
              : data.map((item) => (
                  <DashCard
                    key={item.name}
                    icon={item.icon}
                    title={item.name}
                    data={item.value}
                  />
                ))}
          </div>
          <div>
            <div className="text-xl font-semibold">Student's Request</div>
            <RequestTable />
          </div>
        </div>
        <div className="md:w-1/4">
          <Graphs />
        </div>
      </div>
    </div>
  );
}
