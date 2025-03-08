"use client";
import TitlePage from "@/components/titlePage/titlePage";
import React, { useEffect, useState, useCallback } from "react";
import AddBooks from "./addBooks";
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
import { Button } from "@/components/ui/button";

import { deleteBook, getBooks, updateBook } from "@/app/service/api";
import { Badge } from "@/components/ui/badge";
import PaginationComponent from "@/components/pagination/Pagination";
import { Eye, Settings, Trash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import EmptyData from "@/components/empty-data/emptyData";
import LoadingComp from "@/components/loading/loadingComp";
import Link from "next/link";
import { searchProps } from "./searchBookProps";
import SearchForm from "@/components/searchForm/searchForm";
import useFetchDataTable from "@/hooks/useFetchDataTable";
import { IBook } from "@/app/service/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormLabel,
  FormControl,
  FormField,
  FormDescription,
} from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
const Page = () => {
  const form = useForm();
  const { toast } = useToast();
  const { data, setData, loading, pageState, setPageState, fetchData } =
    useFetchDataTable({ apiFunction: getBooks });
  const [loadingState, setLoadingState] = useState({
    initLoading: true,
    deleteLoading: false,
    updateLoading: false,
  });

  const [bookId, setBookId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDelete = async (records) => {
    try {
      setLoadingState((prev) => ({ ...prev, deleteLoading: true }));
      const { _id, pictureUrl } = records;
      setBookId(_id);
      const response = await deleteBook({ id: _id, pictureUrl });
      if (response.error) {
        throw new Error(response.error); // Handle API error messages
      }
      fetchData({ page: 1 });
      toast({
        title: "Deleted Successfully",
        className: "bg-black text-white",
      });
    } catch (error: any) {
      toast({
        title: "Failed to delete student",
        description: error.message || "Something went wrong.",
        className: "bg-red-500 text-white",
      });
    } finally {
      setLoadingState((prev) => ({ ...prev, deleteLoading: false }));
      setBookId(null);
    }
  };

  const handleSave = async (data: any, id: string) => {
    try {
      setLoadingState((prev) => ({ ...prev, updateLoading: true }));
      const formData = new FormData();
      formData.append("id", id);
      formData.append("featured", data.featured);
      const response = await updateBook(formData, true);
      if (response.error) {
        throw new Error(response.error); // Handle API error messages
      }
      fetchData({ page: 1 });
      setOpenDialog(false);
      toast({
        title: "Updated Successfully",
        className: "bg-black text-white",
      });
    } catch (error: any) {
      toast({
        title: "Failed to update book",
        description: error.message || "Something went wrong.",
      });
    } finally {
      setLoadingState((prev) => ({ ...prev, updateLoading: false }));
    }
  };

  return (
    <div>
      <TitlePage title="List of Books" />
      <SearchForm api={fetchData} result={setData} searchProps={searchProps} />
      <AddBooks
        successfulAdd={() => fetchData({ page: pageState.currentPage })}
      />
      {/* @ts-ignore */}
      <Table className="mt-10">
        {/* @ts-ignore */}
        <TableHeader>
          {/* @ts-ignore */}
          <TableRow>
            {[
              "Cover",
              "Title",
              "Author",
              "Book Code",
              "Category",
              "Quantity",
              "Available",
              "Action",
            ].map((heading) => (
              <TableHead key={heading} className="uppercase text-center">
                {heading}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        {/* @ts-ignore */}
        <TableBody>
          {data.map((book: IBook, idx) => (
            <TableRow key={idx}>
              {/* @ts-ignore */}
              <TableCell className="text-center">
                <div className="flex justify-center">
                  <Image
                    src={
                      book.pictureUrl
                        ? book.pictureUrl
                        : "/assets/book-placeholder.png"
                    }
                    width={50} // Adjust as needed
                    height={50}
                    alt="Book Cover"
                    className="max-w-[50px] max-h-[30px] object-contain"
                  />
                </div>
              </TableCell>
              {/* @ts-ignore */}
              <TableCell className="text-center">{book.title}</TableCell>
              {/* @ts-ignore */}
              <TableCell className="text-center">{book.author}</TableCell>
              {/* @ts-ignore */}
              <TableCell className="text-center">{book.bookCode}</TableCell>
              {/* @ts-ignore */}
              <TableCell className="text-center">
                {/* @ts-ignore */}
                <Badge variant="outline">{book.category}</Badge>
              </TableCell>
              {/* @ts-ignore */}
              <TableCell className="text-center">{book.quantity}</TableCell>
              {/* @ts-ignore */}
              <TableCell className="text-center">{book.available}</TableCell>
              {/* @ts-ignore */}
              <TableCell className="text-center flex items-center justify-center">
                {loadingState.deleteLoading && book._id === bookId ? (
                  <Image
                    src="/assets/Loading.gif"
                    width={15}
                    height={15}
                    alt="loading"
                  />
                ) : (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost">
                        <Trash width={15} fill="currentColor" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the book item and remove it from the database.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction onClick={() => handleDelete(book)}>
                          Yes
                        </AlertDialogAction>
                        <AlertDialogCancel>
                          No, I changed my mind
                        </AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
                <Button variant="ghost">
                  <Link href={`/admin/books/${book._id}`}>
                    <Eye />
                  </Link>
                </Button>
                <Dialog
                  onOpenChange={(open) => {
                    if (open) {
                      form.setValue("featured", book.featured);
                    }
                  }}
                >
                  <DialogTrigger asChild>
                    <Button variant="ghost">
                      <Settings />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Settings</DialogTitle>
                      <DialogDescription asChild>
                        <Form {...form}>
                          <form
                            onSubmit={form.handleSubmit((data) =>
                              handleSave(data, book._id)
                            )}
                          >
                            <FormField
                              control={form.control}
                              name="featured"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <div className="space-y-1 leading-none">
                                    <FormLabel>
                                      Add to featured books?
                                    </FormLabel>
                                    <FormDescription>
                                      Featured books will be displayed on the
                                      home page of the student`s portal.
                                    </FormDescription>
                                  </div>
                                </FormItem>
                              )}
                            />
                            <Button type="submit" size="sm">
                              {loadingState.updateLoading ? (
                                <Image
                                  src="/assets/Loading.gif"
                                  width={15}
                                  height={15}
                                  alt="loading"
                                />
                              ) : (
                                "Save"
                              )}
                            </Button>
                          </form>
                        </Form>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
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
            fetchData({ page });
            setPageState((prev) => ({ ...prev, currentPage: page }));
          }}
        />
      </div>
    </div>
  );
};

export default Page;
