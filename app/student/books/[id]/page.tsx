"use client";
import {
  addFavorites,
  getBooks,
  myFavorites,
  removeFavorites,
  requestBook,
} from "@/app/service/api";
import {
  IBook as IBaseBook,
  IRequestBookParams,
  IApiResponse,
  IStudent,
  IMyFavoritesParams,
  IBook,
} from "@/app/service/types";
import TitlePage from "@/components/titlePage/titlePage";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, HeartIcon } from "lucide-react";

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
import { RootState } from "@/app/redux/store";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

// Extend IBook to include additional fields needed for the page

interface FormValues {
  reason: string;
  fromDate: Date;
  toDate: Date;
}

const Page = () => {
  const { toast } = useToast();
  const params = useParams();
  const state = useSelector(
    (state: RootState) => state.user.userInfo
  ) as IStudent;
  const [isFavorite, setIsFavorite] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      reason: "",
      fromDate: new Date(),
      toDate: new Date(),
    },
  });
  const [bookInfo, setBookInfo] = useState<IBook | null>(null);
  const [loadingState, setLoadingState] = useState({
    init: true,
    borrowing: false,
  });

  const fetchBook = async () => {
    try {
      setLoadingState({ init: true, borrowing: false });
      const res = (await getBooks({ id: params.id })) as IApiResponse<IBook[]>;
      if (res.data?.[0]) {
        setBookInfo(res.data[0]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingState({ init: false, borrowing: false });
    }
  };

  const checkFavorite = async () => {
    try {
      const res = (await myFavorites({
        bookId: params.id as string,
        userId: state._id,
      })) as IApiResponse<IMyFavoritesParams[]>;
      if (res.data?.[0]) {
        setIsFavorite(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddFavorite = async () => {
    try {
      if (!bookInfo) return;
      const res = await addFavorites({
        userId: state._id,
        bookId: params.id as string,
        title: bookInfo.title,
        author: bookInfo.author,
        pictureUrl: bookInfo.pictureUrl,
      });
      if (res) {
        setIsFavorite(true);
        toast({
          title: res.message,
          className: "bg-black text-white",
        });
      }
    } catch (error: any) {
      console.log(error);
      toast({
        title: error.message,
        className: "bg-black text-white",
      });
    }
  };

  const handleRemoveFavorite = async () => {
    try {
      const res = await removeFavorites({
        userId: state._id,
        bookId: params.id as string,
      });
      if (res) {
        setIsFavorite(false);
        toast({
          title: res.message,
          className: "bg-black text-white",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBook();
    checkFavorite();
  }, []);

  const onSubmit = async (data: FormValues) => {
    if (!bookInfo) return;

    try {
      setLoadingState((prev) => ({ ...prev, borrowing: true }));
      const borrowParams: IRequestBookParams = {
        bookId: params.id as string,
        usn: state.usn,
        studentId: state._id,
        studentName: `${state.firstname} ${state.middleinitial} ${state.lastname}`,
        titleBook: bookInfo.title,
        authorBook: bookInfo.author,
        bookCode: bookInfo.bookCode,
        fromDate: data.fromDate.toISOString(),
        toDate: data.toDate.toISOString(),
        reason: data.reason,
      };

      const res = await requestBook(borrowParams);
      if (res.error) {
        toast({
          title: res.error,
          className: "bg-black text-white",
        });
      }
      if (res) {
        toast({
          title: res.message,
          className: "bg-black text-white",
        });
        form.reset();
      }
    } catch (error: any) {
      console.log(error);
      toast({
        title: error.message,
        className: "bg-black text-white",
      });
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
                    ? bookInfo.pictureUrl
                    : "/assets/book-placeholder.png"
                }
                width={200}
                height={200}
                alt="book-cover"
              />
              <div className="flex flex-col gap-4 p-2 ml-10">
                <div>
                  <Badge
                    variant="secondary"
                    className="bg-gray-200 dark:bg-gray-900"
                  >
                    {bookInfo?.category}
                  </Badge>
                </div>
                <div className="text-2xl font-bold">{bookInfo?.title}</div>
                <div className="text-lg font-semibold">
                  By: {bookInfo?.author}
                </div>
                <div className="max-w-[500px] text-sm text-gray-500">
                  {bookInfo?.description}
                </div>
                <div className="text-sm">
                  Item Available: {bookInfo?.available}
                </div>
                <div className="flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HeartIcon
                          className="w-4 h-4"
                          color={isFavorite ? "red" : "gray"}
                          onClick={
                            isFavorite
                              ? handleRemoveFavorite
                              : handleAddFavorite
                          }
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        {isFavorite
                          ? "Remove from Favorites"
                          : "Add to Favorites"}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
                          <FormControl>
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
                          </FormControl>
                        </PopoverTrigger>
                        {/*@ts-ignore */}
                        <PopoverContent
                          align="start"
                          className="w-auto p-0 bg-white"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                            className="rounded-md border"
                            classNames={{
                              day_selected:
                                "bg-black text-white hover:bg-gray-900",
                              day_today: "bg-gray-100 text-gray-900",
                            }}
                            showOutsideDays={false}
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
                        {/*@ts-ignore */}
                        <PopoverContent className="w-auto p-0 bg-white z-50">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                            className="rounded-md border"
                            classNames={{
                              day_selected:
                                "bg-black text-white hover:bg-gray-900",
                              day_today: "bg-gray-100 text-gray-900",
                            }}
                            showOutsideDays={false}
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
                          onChange={(
                            e: React.ChangeEvent<HTMLTextAreaElement>
                          ) => onChange(e.target.value)}
                          className="resize-none"
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

                <Button
                  type="submit"
                  className="mt-4"
                  disabled={!bookInfo?.available}
                >
                  {!bookInfo?.available
                    ? "Item not available"
                    : loadingState.borrowing
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
