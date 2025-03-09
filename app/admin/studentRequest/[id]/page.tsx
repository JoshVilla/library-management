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
import { useCallback, useEffect, useMemo, useState } from "react";
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define types
interface RequestDetails {
  id?: string;
  titleBook?: string;
  authorBook?: string;
  studentName?: string;
  usn?: string;
  reason?: string;
  fromDate?: string;
  toDate?: string;
  createdAt?: string;
  isApproved?: number;
  bookId?: string;
  bookCode?: string;
  studentId?: string;
}

// Form schema
const formSchema = z.object({
  isApproved: z.string(),
  reasonToChangeStatus: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

const Request = () => {
  const { toast } = useToast();
  const params = useParams();
  const [requestDetails, setRequestDetails] = useState<RequestDetails>({});
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isApproved: requestDetails.isApproved?.toString() || "0",
      reasonToChangeStatus: "",
    },
  });

  const fetchData = useCallback(async () => {
    try {
      const res = await getBorrowedBooks({ id: params.id });
      if (res.data) {
        setRequestDetails(res.data[0]);
      }
    } catch (error) {
      toast({
        title: "Error fetching request details",
        description: "Please try again later",
        variant: "destructive",
      });
      console.error("Error fetching request details:", error);
    }
  }, [params.id, toast]);

  const renderDate = useCallback((date = "") => {
    if (!date) return "";
    const newDate = new Date(date);
    return format(newDate, "MMM dd, yyyy");
  }, []);

  const renderDateRange = useCallback((from = "", to = "") => {
    if (!from && !to) return "";
    const newFrom = new Date(from);
    const newTo = new Date(to);
    return `${format(newFrom, "MMM dd, yyyy")} - ${format(
      newTo,
      "MMM dd, yyyy"
    )}`;
  }, []);

  const messageOfUpdatingStatus = useCallback((status: number | string) => {
    const messages = {
      [STATUS.APPROVED]: "The Librarian approved your request.",
      [STATUS.CANCELLED]: "The Librarian cancelled your request.",
      [STATUS.RETURNED]: "You have successfully returned the book!",
      [STATUS.FAILED]: "You have failed to return the book on time.",
    };
    return messages[status] || "";
  }, []);

  const handleAddNotification = useCallback(
    async (data: FormValues) => {
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
        console.error("Error adding notification:", error);
        throw error;
      }
    },
    [requestDetails, messageOfUpdatingStatus, renderDate]
  );

  const handleUpdate = async (data: FormValues) => {
    try {
      setLoading(true);
      const res = await updateRequestBook({
        id: params.id as string,
        ...data,
      });
      await handleAddNotification(data);

      if (res) {
        await fetchData();
        setOpenModal(false);
        toast({
          title: res.message,
          className: "bg-black text-white",
        });
      }
    } catch (error) {
      toast({
        title: "Error updating request",
        description: "Please try again later",
        variant: "destructive",
      });
      console.error("Error updating request:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (value: number) => {
    try {
      setLoading(true);
      const res = await updateRequestBook({
        id: params.id as string,
        isApproved: value,
      });

      if (res) {
        if (value === STATUS.INPROGRESS) {
          await updateQuantity({
            bookCode: requestDetails.bookCode as string,
            quantity: 1,
            action: "reduce",
          });
        }
        if (value === STATUS.RETURNED) {
          await updateQuantity({
            bookCode: requestDetails.bookCode as string,
            quantity: 1,
            action: "add",
          });
        }

        await fetchData();
        toast({
          title: res.message,
          className: "bg-black text-white",
        });

        if (
          [STATUS.CANCELLED, STATUS.FAILED, STATUS.RETURNED].includes(value)
        ) {
          await handleAddNotification({
            isApproved: value.toString(),
            reasonToChangeStatus: messageOfUpdatingStatus(value),
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error updating status",
        description: "Please try again later",
        variant: "destructive",
      });
      console.error("Error updating status:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const statusActions = useMemo(
    () => ({
      [STATUS.APPROVED]: (
        <div className="space-y-1 mt-2">
          <div className="text-xs text-gray-500">
            Once the student gets the book, change the status to Borrowing in
            Progress
          </div>
          <div className="space-x-6">
            <Button
              variant="link"
              className="text-xs text-blue-500 p-0 h-auto"
              onClick={() => handleUpdateStatus(STATUS.INPROGRESS)}
              disabled={loading}
            >
              Change Status
            </Button>
            <Button
              variant="link"
              className="text-xs text-blue-500 p-0 h-auto"
              onClick={() => handleUpdateStatus(STATUS.CANCELLED)}
              disabled={loading}
            >
              Cancel
            </Button>
          </div>
        </div>
      ),
      [STATUS.INPROGRESS]: (
        <div className="space-y-1 mt-2">
          <div className="text-xs text-gray-500">
            Update the status depending on whether the student successfully
            returned the book.
          </div>
          <div className="space-x-6">
            <Button
              variant="link"
              className="text-xs text-blue-500 p-0 h-auto"
              onClick={() => handleUpdateStatus(STATUS.RETURNED)}
              disabled={loading}
            >
              Successfully returned the book
            </Button>
            <Button
              variant="link"
              className="text-xs text-blue-500 p-0 h-auto"
              onClick={() => handleUpdateStatus(STATUS.FAILED)}
              disabled={loading}
            >
              Failed to return the book
            </Button>
          </div>
        </div>
      ),
    }),
    [handleUpdateStatus, loading]
  );

  return (
    <div>
      <TitlePage title="Student's Request Details" hasBack />
      <div className="mt-10 flex flex-col gap-4 w-full">
        <div className="w-full">
          <div className="mb-4 flex items-center w-full justify-between">
            <div className="text-2xl font-semibold">Requested Book</div>
            <div>
              <div className="flex items-center gap-2">
                <Status status={requestDetails.isApproved} />
                {requestDetails.isApproved === STATUS.PENDING && (
                  <Dialog open={openModal} onOpenChange={setOpenModal}>
                    <DialogTrigger className="text-xs text-blue-500 hover:underline">
                      Change Status
                    </DialogTrigger>
                    {/*@ts-ignore */}
                    <DialogContent>
                      {/*@ts-ignore */}
                      <DialogHeader>
                        {/*@ts-ignore */}
                        <DialogTitle>Change Status</DialogTitle>
                        <Separator />
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(handleUpdate)}>
                            <FormField
                              control={form.control}
                              name="isApproved"
                              render={({ field }) => (
                                <FormItem className="space-y-3 mt-4">
                                  {/*@ts-ignore */}
                                  <FormControl>
                                    {/*@ts-ignore */}
                                    <RadioGroup
                                      onValueChange={field.onChange}
                                      defaultValue={requestDetails.isApproved?.toString()}
                                      className="flex flex-col space-y-1"
                                    >
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value={"1"} />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Approve
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value={"0"} />
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
                              control={form.control}
                              name="reasonToChangeStatus"
                              render={({ field }) => (
                                <FormItem className="mt-6">
                                  <FormLabel>Reason</FormLabel>
                                  <FormControl>
                                    <Textarea {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            {/*@ts-ignore */}
                            <DialogFooter>
                              <Button
                                type="submit"
                                disabled={loading}
                                className="mt-4"
                              >
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
              {
                statusActions[
                  requestDetails.isApproved as keyof typeof statusActions
                ]
              }
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

export default Request;
