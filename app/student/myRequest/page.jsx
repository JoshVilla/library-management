"use client";

import { getBorrowedBooks } from "@/app/service/api";
import TitlePage from "@/components/titlePage/titlePage";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { STATUS } from "@/utils/constant";
import { format } from "date-fns";
import { Ban } from "lucide-react";
const Page = () => {
  const state = useSelector((state) => state.user.userInfo);
  const [dataRequest, setDataRequest] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getBorrowedBooks({ studentId: state._id });
      console.log(res.data);
      if (res.data) {
        setDataRequest(res.data);
      }
    } catch (error) {}
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

  const renderDateRange = (from, to) => {
    const newFrom = new Date(from);
    const newTo = new Date(to);
    const formattedFromDate = format(newFrom, "MMM dd, yyyy");
    const formattedToDate = format(newTo, "MMM dd, yyyy");

    return <div>{`${formattedFromDate} - ${formattedToDate}`}</div>;
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
    <div>
      <TitlePage title="My Request" />
      <div>
        <Table className="mt-10">
          <TableHeader>
            <TableRow>
              {[
                "Title",
                "Author",
                "Status",
                "Date to Borrow",
                "Created At",
                "Actions",
              ].map((heading) => (
                <TableHead key={heading} className="uppercase text-center">
                  {heading}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataRequest.map((request) => (
              <TableRow key={request._id}>
                <TableCell className="text-center">
                  {request.titleBook}
                </TableCell>
                <TableCell className="text-center">
                  {request.authorBook}
                </TableCell>
                <TableCell className="text-center">
                  {renderStatus(request.isApproved)}
                </TableCell>
                <TableCell className="text-center">
                  {renderDateRange(request.fromDate, request.toDate)}
                </TableCell>
                <TableCell className="text-center">
                  {renderDate(request.createdAt)}
                </TableCell>
                <TableCell className="flex justify-center gap-6 items-center">
                  {request.isApproved === STATUS.APPROVED ||
                  request.isApproved === STATUS.CANCELLED ? null : (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Ban width={15} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Cancel Borrow</p>
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
    </div>
  );
};

export default Page;
