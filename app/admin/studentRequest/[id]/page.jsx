"use client";
import {
  addNotification,
  getBorrowedBooks,
  updateBook,
  updateQuantity,
  updateRequestBook,
} from "@/app/service/api";
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { isExpired } from "@/utils/helpers";
import { Badge } from "@/components/ui/badge";
import { STATUS } from "@/utils/constant";

const Request = () => {
  const { toast } = useToast();
  const params = useParams();
  const [requestDetails, setRequestDetails] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      isApproved: requestDetails.isApproved,
      reasonToChangeStatus: "",
    },
  });
  const fetchData = async () => {
    try {
      const res = await getBorrowedBooks({ id: params.id });
      if (res.data) {
        setRequestDetails(res.data[0]);
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

  const handleUpdate = async (data) => {
    try {
      setLoading(true);
      const res = await updateRequestBook({ id: params.id, ...data });
      await handleAddNotification(data);
      if (res) {
        fetchData();
        setOpenModal(false);
        toast({
          title: res.message,
          className: "bg-black text-white",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (value) => {
    try {
      const res = await updateRequestBook({ id: params.id, isApproved: value });
      if (res) {
        if (value === STATUS.INPROGRESS) {
          await updateQuantity({ bookCode: requestDetails.bookCode });
        }
        await fetchData();
        toast({
          title: res.message,
          className: "bg-black text-white",
        });
        if (value === 0 || value === -1 || value === 4) {
          await handleAddNotification({
            isApproved: value,
            reasonToChangeStatus: messageOfUpdatingStatus(value),
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddNotification = async (data) => {
    try {
      const { titleBook, authorBook, studentId, toDate, fromDate } =
        requestDetails;
      await addNotification({
        message: messageOfUpdatingStatus(data.isApproved),
        studentId,
        titleBook,
        authorBook,
        borrowDuration: `${renderDate(fromDate)}-${renderDate(toDate)}`,
        reason: data.reasonToChangeStatus,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const messageOfUpdatingStatus = (status) => {
    let message;

    if (status === STATUS.APPROVED) {
      message = "The Librarian approved your request.";
    } else if (status === STATUS.CANCELLED) {
      message = "The Librarian cancelled your request.";
    } else if (status === STATUS.RETURNED) {
      message = "You have successfully returned the book!";
    } else if (status === STATUS.FAILED) {
      message = "You have failed to return the book on time.";
    }

    return message;
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  return (
    <div>
      <TitlePage title="Student`s Request Details" hasBack />
      <div className="mt-10 flex flex-col gap-4 w-full">
        <div className="w-full">
          <div className=" mb-4 flex items-center w-full justify-between">
            <div className="text-2xl font-semibold">Requested Book</div>
            {/* {isExpired(requestDetails.fromDate) ? (
              <Badge variant="destructive">Expired</Badge>
            ) : ( */}

            <div>
              <div className="flex items-center gap-2">
                <Status status={requestDetails.isApproved} />
                {requestDetails.isApproved === 2 && (
                  <Dialog open={openModal} onOpenChange={setOpenModal}>
                    <DialogTrigger className="text-xs text-blue-500 hover:underline">
                      Change Status
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Change Status</DialogTitle>
                        <Separator />
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(handleUpdate)}>
                            <FormField
                              control={form.control}
                              name="isApproved"
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
                            <FormField
                              key="reasonToChangeStatus"
                              control={form.control}
                              name="reasonToChangeStatus"
                              render={({
                                field: { onChange, value, ...fieldProps },
                              }) => (
                                <FormItem className="mt-6">
                                  <FormLabel>Reason</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      onChange={(e) => onChange(e.target.value)}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                            <DialogFooter>
                              <Button type="submit" className="mt-4">
                                {loading ? "Saving..." : "Save changes"}
                              </Button>
                            </DialogFooter>
                          </form>
                        </Form>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
              {requestDetails.isApproved === 1 && (
                <div className="space-y-1 mt-2">
                  <div className="text-xs text-gray-500">
                    Once the student get the book, change the status to
                    Borrworing in Progress
                  </div>
                  <div className="space-x-6">
                    <span
                      onClick={() => handleUpdateStatus(3)}
                      className="text-xs text-blue-500 hover:underline cursor-pointer"
                    >
                      Change Status
                    </span>
                    <span
                      onClick={() => handleUpdateStatus(0)}
                      className="text-xs text-blue-500 hover:underline cursor-pointer"
                    >
                      Cancel
                    </span>
                  </div>
                </div>
              )}
              {requestDetails.isApproved === 3 && (
                <div className="space-y-1 mt-2">
                  <div className="text-xs text-gray-500">
                    Update the status depending on whether the student
                    successfully returned the book.
                  </div>
                  <div className="space-x-6">
                    <span
                      onClick={() => handleUpdateStatus(4)}
                      className="text-xs text-blue-500 hover:underline cursor-pointer"
                    >
                      Successfully returned the book
                    </span>
                    <span
                      onClick={() => handleUpdateStatus(-1)}
                      className="text-xs text-blue-500 hover:underline cursor-pointer"
                    >
                      Failed to returned the book
                    </span>
                  </div>
                </div>
              )}
            </div>
            {/* // )} */}
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

export default Request;
