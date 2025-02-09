"use client";
import { getStudents } from "@/app/service/api";
import TitlePage from "@/components/titlePage/titlePage";
import { AvatarFallback, Avatar, AvatarImage } from "@/components/ui/avatar";
import { Table, TableHeader, TableRow, TableHead } from "@/components/ui/table";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  const router = useRouter();
  const [studentInfo, setStudentInfo] = useState(null);

  const fetchData = async () => {
    try {
      const res = await getStudents({ id: params.id });

      if (res.data) {
        setStudentInfo(res.data[0]);
      }
    } catch (error) {
      console.error("Failed to fetch student:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {" "}
      <TitlePage title="Student Information" hasBack />
      <div className="mt-10">
        {studentInfo && (
          <div className="flex flex-row gap-6 items-center">
            <Avatar>
              <AvatarImage
                src="/assets/defaultProfile.jpg"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <AvatarFallback>
                {studentInfo.firstname.slice(0, 1)}
              </AvatarFallback>
            </Avatar>
            <div>
              Name:{" "}
              <span className="text-gray-700 font-semibold">{`${studentInfo?.firstname} ${studentInfo?.middleinitial} ${studentInfo?.lastname}`}</span>
            </div>
            <div>
              USN:{" "}
              <span className="text-gray-700 font-semibold">
                {studentInfo?.usn}
              </span>
            </div>
          </div>
        )}
        <div className="mt-10 flex gap-10">
          <div className="flex-1">
            <Table>
              <TableHeader>
                <TableRow>
                  {[
                    "Name of Book",
                    "Book Borrowed",
                    "Book Returned",
                    "Completed",
                  ].map((heading) => (
                    <TableHead key={heading} className="uppercase text-center">
                      {heading}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
            </Table>
          </div>
          {/* <div className="flex-1">
            <div className="text-lg font-semibold mb-6">Student`s Request</div>
            <Table>
              <TableHeader>
                <TableRow>
                  {[
                    "Name of Book",
                    "Book Borrowed",
                    "Book Returned",
                    "Completed",
                  ].map((heading) => (
                    <TableHead key={heading} className="uppercase text-center">
                      {heading}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
            </Table>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default page;
