"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getBorrowedBooks } from "../service/api";
import { format } from "date-fns";
import { STATUS } from "@/utils/constant";
import { Badge } from "@/components/ui/badge";
import { Bolt, View } from "lucide-react";
import { useRouter } from "next/navigation";

const RequestTable = () => {
  const router = useRouter();
  const [requestData, setRequestData] = useState([]);

  const tableHeaders = [
    "Name",
    "Usn",
    "Book Title",
    "Requested Last",
    "Status",
    "Actions",
  ];
  const fetchData = async () => {
    try {
      const res = await getBorrowedBooks();
      if (res.data) {
        setRequestData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderStatus = (val) => {
    let text = "";
    let className = "";
    if (val === STATUS.PENDING) {
      text = "Pending";
      className = "bg-white text-black";
    }
    if (val === STATUS.APPROVED) {
      text = "Aprroved";
      className = "bg-green-700 text-white";
    }
    if (val === STATUS.CANCELLED) {
      (text = "Cancelled"), (className = "bg-black text-white");
    }
    return <Badge className={className}>{text}</Badge>;
  };

  const renderDate = (date) => {
    const newDate = new Date(date);
    const formattedDate = format(newDate, "MMM dd, yyyy");

    return <div>{formattedDate}</div>;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full mt-10">
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeaders.map((heading) => (
              <TableHead key={heading} className="uppercase text-center">
                {heading}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {requestData.map((request) => (
            <TableRow key={request._id}>
              <TableCell className="text-center">
                {request.studentName}
              </TableCell>
              <TableCell className="text-center">{request.usn}</TableCell>
              <TableCell className="text-center">{request.titleBook}</TableCell>
              <TableCell className="text-center">
                {renderDate(request.createdAt)}
              </TableCell>
              <TableCell className="text-center">
                {renderStatus(request.isApproved)}
              </TableCell>
              <TableCell className="flex justify-center items-center gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <View
                        size={15}
                        onClick={() =>
                          router.push(`/admin/studentRequest/${request._id}`)
                        }
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Details</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                {request.isApproved === STATUS.APPROVED ||
                request.isApproved === STATUS.CANCELLED ? null : (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Bolt size={15} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Update Status</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RequestTable;
