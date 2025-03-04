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
import { format } from "date-fns";
import { STATUS } from "@/utils/constant";
import { Bolt, View } from "lucide-react";
import { useRouter } from "next/navigation";
import EmptyData from "@/components/empty-data/emptyData";
import LoadingComp from "@/components/loading/loadingComp";
import PaginationComponent from "@/components/pagination/Pagination";
import StatusBadge from "@/components/statusBadge/page";
import useFetchDataTable from "@/hooks/useFetchDataTable";
import { BorrowedBook, IBookRequest } from "../service/types";
import { getBorrowedBooks } from "../service/api";
const RequestTable = () => {
  const router = useRouter();
  const { data, setData, loading, pageState, setPageState, fetchData } = useFetchDataTable({
    apiFunction: getBorrowedBooks,
    params: { isApproved: 2 }
  });
  const tableHeaders = [
    "Name",
    "Usn",
    "Book Title",
    "Requested Last",
    "Status",
    "Actions",
  ];

  const renderDate = (date) => {
    const newDate = new Date(date);
    const formattedDate = format(newDate, "MMM dd, yyyy");

    return <div>{formattedDate}</div>;
  };

  return (
    <div className="w-full mt-10">
      {/*@ts-ignore */}
      <Table>
         {/*@ts-ignore */}
        <TableHeader>
          {/*@ts-ignore */}
          <TableRow>
            {tableHeaders.map((heading) => (
                <TableHead key={heading} className="uppercase text-center">
                {heading}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        {/*@ts-ignore */}
        <TableBody>
          {data.map((request: BorrowedBook) => (

             <TableRow key={request._id}>
              {/*@ts-ignore */}
              <TableCell className="text-center">
                {request.studentName}
              </TableCell>
              {/*@ts-ignore */}
              <TableCell className="text-center">{request.usn}</TableCell>
              {/*@ts-ignore */}
              <TableCell className="text-center">{request.titleBook}</TableCell>
              {/*@ts-ignore */}
              <TableCell className="text-center">
                {renderDate(request.createdAt)}
              </TableCell>
              {/*@ts-ignore */}
                  <TableCell className="text-center">
                <StatusBadge status={request.isApproved} />
              </TableCell>
              {/*@ts-ignore */}
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
                    {/*@ts-ignore */}
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
                      {/*@ts-ignore */}
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
      {loading && <LoadingComp />}
      {data.length === 0 && !loading && <EmptyData />}
      {renderDate.length > 0 && (
        <PaginationComponent
          pageState={pageState}
          onChangePage={(page) => {
            setPageState((prev) => ({ ...prev, currentPage: page }));
            fetchData({ page });
          }}
        />
      )}
    </div>
  );
};

export default RequestTable;
