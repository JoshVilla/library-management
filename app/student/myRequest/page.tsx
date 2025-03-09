"use client";

import { getBorrowedBooks, updateRequestBook } from "@/app/service/api";
import TitlePage from "@/components/titlePage/titlePage";
import React, { useEffect } from "react";
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
import { RootState } from "@/app/redux/store";
import { STATUS } from "@/utils/constant";
import { format } from "date-fns";
import { Ban } from "lucide-react";
import EmptyData from "@/components/empty-data/emptyData";
import LoadingComp from "@/components/loading/loadingComp";
import { useToast } from "@/hooks/use-toast";
import { isExpired } from "@/utils/helpers";
import SearchForm from "@/components/searchForm/searchForm";
import { searchProps } from "./searchProps";
import StatusBadge from "@/components/statusBadge/page";
import useFetchDataTable from "@/hooks/useFetchDataTable";
import {
  IStudent,
  IBookRequest,
  IUpdateRequestParams,
} from "@/app/service/types";
import PaginationComponent from "@/components/pagination/Pagination";

const Page: React.FC = () => {
  const { toast } = useToast();
  const state = useSelector(
    (state: RootState) => state.user.userInfo
  ) as IStudent;

  const { data, loading, fetchData, setData, pageState, setPageState } =
    useFetchDataTable({
      apiFunction: getBorrowedBooks,
      params: { studentId: state._id },
    });

  const renderDateRange = (from: string, to: string): JSX.Element => {
    const newFrom = new Date(from);
    const newTo = new Date(to);
    const formattedFromDate = format(newFrom, "MMM dd, yyyy");
    const formattedToDate = format(newTo, "MMM dd, yyyy");

    return <div>{`${formattedFromDate} - ${formattedToDate}`}</div>;
  };

  const renderDate = (date: string): JSX.Element => {
    const newDate = new Date(date);
    const formattedDate = format(newDate, "MMM dd, yyyy");

    return <div>{formattedDate}</div>;
  };

  const handleCancelRequest = async (id: string): Promise<void> => {
    try {
      const params: IUpdateRequestParams = { id, isApproved: 0 };
      const res = await updateRequestBook(params);
      if (res.message) {
        await fetchData();
        toast({
          title: res.message,
          description: "Request cancelled successfully",
        });
      } else {
        toast({
          title: res.error,
          description: "Failed to cancel request",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error cancelling request:", error);
      toast({
        title: "Error",
        description: "Failed to cancel request",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <TitlePage title="My Request" />
      <div>
        <SearchForm
          searchProps={searchProps}
          api={fetchData}
          result={setData}
        />
        <div className="mt-6 ">
          <Table>
            <TableHeader>
              <TableRow>
                {[
                  "Title",
                  "Author",
                  "Status",
                  "Date to Borrow",
                  "Created At",
                  "Actions",
                ].map((heading: string) => (
                  <TableHead key={heading} className="uppercase text-center">
                    {heading}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            {/* @ts-ignore */}
            <TableBody>
              {data.map((request: IBookRequest) => (
                <TableRow key={request._id}>
                  {/* @ts-ignore */}
                  <TableCell className="text-center min-w-[200px]">
                    {request.titleBook}
                  </TableCell>
                  {/* @ts-ignore */}
                  <TableCell className="text-center min-w-[200px]">
                    {request.authorBook}
                  </TableCell>
                  {/* @ts-ignore */}
                  <TableCell className="text-center">
                    <StatusBadge status={request.isApproved} />
                  </TableCell>
                  {/* @ts-ignore */}
                  <TableCell className="text-center min-w-[200px]">
                    {renderDateRange(request.fromDate, request.toDate)}
                  </TableCell>
                  {/* @ts-ignore */}
                  <TableCell className="text-center min-w-[200px]">
                    {renderDate(request.createdAt)}
                  </TableCell>
                  {/* @ts-ignore */}
                  <TableCell className="flex justify-center gap-6 items-center">
                    {isExpired(request.fromDate) ||
                    request.isApproved === STATUS.APPROVED ||
                    request.isApproved === STATUS.INPROGRESS ||
                    request.isApproved === STATUS.RETURNED ||
                    request.isApproved === STATUS.REJECTED ||
                    request.isApproved === STATUS.CANCELLED ? null : (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button
                            type="button"
                            className="hover:opacity-70 transition-opacity"
                          >
                            <Ban width={15} />
                          </button>
                        </AlertDialogTrigger>
                        {/* @ts-ignore */}
                        <AlertDialogContent>
                          {/* @ts-ignore */}
                          <AlertDialogHeader>
                            {/* @ts-ignore */}
                            <AlertDialogTitle>
                              Are you absolutely sure you want to cancel your
                              request?
                            </AlertDialogTitle>
                            {/* @ts-ignore */}
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently cancel your request.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          {/* @ts-ignore */}
                          <AlertDialogFooter>
                            {/* @ts-ignore */}
                            <AlertDialogAction
                              onClick={() => handleCancelRequest(request._id)}
                            >
                              Yes
                            </AlertDialogAction>
                            {/* @ts-ignore */}
                            <AlertDialogCancel>
                              No, I changed my mind
                            </AlertDialogCancel>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {data.length === 0 && !loading && <EmptyData />}
          {loading && <LoadingComp />}
          <div className="mt-10">
            <PaginationComponent
              pageState={pageState}
              onChangePage={(page) => {
                setData([]);
                fetchData({ page });
                setPageState((prev) => ({ ...prev, currentPage: page }));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
