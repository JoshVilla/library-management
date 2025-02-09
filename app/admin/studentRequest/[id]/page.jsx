"use client";
import { getBorrowedBooks } from "@/app/service/api";
import Status from "@/components/status/status";
import TitlePage from "@/components/titlePage/titlePage";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
const request = () => {
  const form = useForm();
  const params = useParams();
  const [requestDetails, setRequestDetails] = useState({});

  const fethData = async () => {
    try {
      const res = await getBorrowedBooks({ id: params.id });
      if (res.data) {
        setRequestDetails(res.data[0]);
        console.log(res.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderDate = (date = "") => {
    if (!date) return "";
    const newDate = new Date(date);
    return format(newDate, "MMM dd, yyyy");
  };

  const renderDateRange = (from = "", to = "") => {
    if (!from && !to) return "";
    const newFrom = new Date(from);
    const newTo = new Date(to);
    const formattedFromDate = format(newFrom, "MMM dd, yyyy");
    const formattedToDate = format(newTo, "MMM dd, yyyy");

    return `${formattedFromDate} - ${formattedToDate}`;
  };

  useEffect(() => {
    fethData();
  }, []);

  return (
    <div>
      <TitlePage title="Student`s Request Details" hasBack />
      <div className="mt-10 flex flex-col gap-4 w-full">
        <div className="w-full">
          <div className=" mb-4 flex items-center w-full justify-between">
            <div className="text-2xl font-semibold">Requested Book</div>
            <div className="flex items-center gap-2">
              <Status status={requestDetails.isApproved} />
              {requestDetails.isApproved !== 1 && (
                <Dialog>
                  <DialogTrigger className="text-xs text-blue-500 hover:underline">
                    Change Status
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Change Status</DialogTitle>
                      <Separator />
                      <Form {...form}>
                        <form>
                          <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                              <FormItem className="space-y-3 mt-4">
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={requestDetails.isApproved}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value={2} />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Pending
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value={1} />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Approve
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value={0} />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Cancel
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </form>
                      </Form>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              )}
            </div>
            <div className="text-gray-500 text-sm">
              Requested last: {renderDate(requestDetails.createdAt)}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-lg font-semibold">
              {requestDetails.titleBook}
            </div>
            <Link
              className="text-xs text-blue-500"
              href={`/admin/books/${requestDetails.bookId}`}
            >
              View Book Details
            </Link>
          </div>
          <div className="text-md font-semibold">
            By: {requestDetails.authorBook}
          </div>
        </div>
        <Separator />
        <div className="text-sm">
          Request by:{" "}
          <span className="text-gray-500">{requestDetails.studentName}</span>
        </div>
        <div className="text-sm">
          USN: <span className="text-gray-500">{requestDetails.usn}</span>
        </div>
        <div className="text-sm">
          Reason to borrow:{" "}
          <span className="text-gray-500">{requestDetails.reason}</span>
        </div>
        <div className="text-sm">
          Borrow Date Duration:{" "}
          <span className="text-gray-500">
            {renderDateRange(requestDetails.fromDate, requestDetails.toDate)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default request;
