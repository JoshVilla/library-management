"use client";

import { getBorrowedBooks } from "@/app/service/api";
import TitlePage from "@/components/titlePage/titlePage";
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
import StatusBadge from "@/components/statusBadge/page";
import EmptyData from "@/components/empty-data/emptyData";
import LoadingComp from "@/components/loading/loadingComp";
import { renderDate } from "@/utils/helpers";
import SearchForm from "@/components/searchForm/searchForm";
import { searchProps } from "./searchProps";
import Link from "next/link";
import PaginationComponent from "@/components/pagination/Pagination";
const Page = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageState, setPageState] = useState({
    currentPage: 1,
    totalPage: 0,
  });
  const tableHeaders = [
    "Student",
    "USN",
    "Status",
    "Borrow Duration",
    "Requested Last",
    "Actions",
  ];
  const fetchData = async (params = {}) => {
    try {
      const res = await getBorrowedBooks(params);
      if (res) {
        setData(res.data);
        setPageState({
          currentPage: res.currentPage,
          totalPage: res.totalPages,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderDateRange = (from, to) => {
    const newFrom = new Date(from);
    const newTo = new Date(to);
    const formattedFromDate = format(newFrom, "MMM dd, yyyy");
    const formattedToDate = format(newTo, "MMM dd, yyyy");

    return <div>{`${formattedFromDate} - ${formattedToDate}`}</div>;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TitlePage title="Borrowed Books" />
      <SearchForm api={fetchData} result={setData} searchProps={searchProps} />
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableHead key={header} className="uppercase text-center">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((dataTable) => (
              <TableRow key={dataTable._id}>
                <TableCell className="text-center">
                  {dataTable.studentName}
                </TableCell>
                <TableCell className="text-center">{dataTable.usn}</TableCell>
                <TableCell className="text-center">
                  <StatusBadge status={dataTable.isApproved} />
                </TableCell>
                <TableCell className="text-center">
                  {renderDateRange(dataTable.toDate, dataTable.fromDate)}
                </TableCell>
                <TableCell className="text-center">
                  {renderDate(dataTable.createdAt)}
                </TableCell>
                <TableCell className="text-center">
                  <Link href={`studentRequest/${dataTable._id}`}>View</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {isLoading && <LoadingComp />}
        {data.length === 0 && !isLoading && <EmptyData />}

        <div className="mt-10">
          <PaginationComponent
            pageState={pageState}
            onChangePage={(page) => {
              fetchData({ page });
              setPageState((prev) => ({ ...prev, currentPage: page }));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
