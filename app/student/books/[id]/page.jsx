"use client";
import { getBooks, requestBook } from "@/app/service/api";
import TitlePage from "@/components/titlePage/titlePage";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useSelector } from "react-redux";
import { useToast } from "@/hooks/use-toast";

const Page = () => {
  const { toast } = useToast();
  const params = useParams();
  const state = useSelector((state) => state.user.userInfo);
  const form = useForm({
    defaultValues: {
      reason: "",
      fromDate: new Date(),
      toDate: new Date(),
    },
  });
  const [bookInfo, setBookInfo] = useState({});
  const [loadingState, setLoadingState] = useState({
    init: true,
    borrowing: false,
  });

  const fetchBook = async () => {
    try {
      setLoadingState({ init: true });
      const res = await getBooks({ id: params.id });
      setBookInfo(res.data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingState({ init: false });
    }
  };

  useEffect(() => {
    fetchBook();
    console.log(state);
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoadingState((prev) => ({ ...prev, borrowing: true }));
      const borrowParams = {
        ...data,
        bookId: params.id,
        usn: state.usn,
        studentId: state._id,
        studentName: `${state.firstname} ${state.middleinitial} ${state.lastname}`,
        titleBook: bookInfo.title,
        authorBook: bookInfo.author,
      };

      const res = await requestBook(borrowParams);
      console.log(res);
      if (res) {
        toast({
          title: res.message,
          className: "bg-black text-white",
        });
        form.reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingState((prev) => ({ ...prev, borrowing: false }));
    }
  };

  return (
    <div>
      <TitlePage title="Borrow Book" hasBack />
      {loadingState.init ? (
        <div className="mt-28 w-full flex justify-center items-center">
          <div className="flex justify-center flex-col items-center">
            <Image
              src={"/assets/Loading.gif"}
              width={50}
              height={50}
              alt="loading"
            />
            <div className="mt-6">Fetching Book Data...</div>
          </div>
        </div>
      ) : (
        <div className="mt-10 w-full flex gap-10 flex-row">
          <div className="flex-1">
            <div className="text-xl font-semibold mb-10">Book Information</div>
            <div className="flex">
              <Image
                src={
                  bookInfo?.pictureUrl
                    ? bookInfo?.pictureUrl
                    : "/assets/book-placeholder.png"
                }
                width={200}
                height={200}
                alt="book-cover"
              />
              <div className="flex flex-col gap-4 p-2 ml-10">
                <div>
                  <Badge>{bookInfo?.category}</Badge>
                </div>
                <div className="text-2xl font-bold">{bookInfo?.title}</div>
                <div className="text-lg font-semibold">
                  By: {bookInfo?.author}
                </div>
                <div className="max-w-[500px] text-sm text-gray-500">
                  {bookInfo?.description}
                </div>
                <div className="text-sm">
                  Item Available: {bookInfo?.quantity}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-8">
              <div className="text-xl font-semibold">Borrow this Book?</div>
              <div className="text-sm text-gray-500">
                We need some information why you want to borrow this book.
              </div>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex justify-center flex-col gap-4"
              >
                <FormField
                  control={form.control}
                  name="fromDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>From Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value
                              ? format(field.value, "PPP")
                              : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="toDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>To Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value
                              ? format(field.value, "PPP")
                              : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="reason"
                  rules={{ required: "Reason is required" }}
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>Reason</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Input your reason"
                          value={value || ""}
                          onChange={(e) => onChange(e.target.value)}
                        />
                      </FormControl>
                      {form.formState.errors.reason && (
                        <p className="text-red-500 text-sm">
                          {form.formState.errors.reason.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                <div className="text-sm text-gray-500">
                  Note:
                  <ul>
                    <li>
                      Your request must be approved by the librarian before you
                      can collect the book.
                    </li>
                    <li>
                      Your request will automatically expire if it is earlier
                      than today's date.
                    </li>
                  </ul>
                </div>

                <Button type="submit" className="mt-4">
                  {loadingState.borrowing
                    ? "Submitting Request..."
                    : "Submit Borrow Request"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
