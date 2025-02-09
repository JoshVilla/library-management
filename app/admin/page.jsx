"use client";

import DashCard from "@/components/dashCard/dashCard";
import TitlePage from "@/components/titlePage/titlePage";
import { Users } from "lucide-react";
import { useEffect, useState } from "react";
import { dashboard } from "@/app/service/api";
import DashCardSkeleton from "@/components/skeleton/dashCardSkeleton";
import Captcha from "@/components/captcha/captcha";
import RequestTable from "./requestTable";
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

        const result = Object.entries(res).map(([key, value]) => ({
          name: formatKey(key),
          value,
        }));
        setData(result);
        console.log(result);
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
      <TitlePage title="Dashboard" />
      {}
      <div className="flex items-center flex-wrap gap-10 my-10">
        {data.length === 0
          ? skeleteonArr.map((_, idx) => <DashCardSkeleton key={idx} />)
          : data.map((data) => (
              <DashCard
                key={data.name}
                icon={<Users width={30} height={30} />}
                title={data.name}
                data={data.value}
              />
            ))}
      </div>
      <div>
        <div className="text-xl font-semibold">Student`s Request</div>
        <RequestTable />
      </div>
    </div>
  );
}
