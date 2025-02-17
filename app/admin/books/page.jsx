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

import { deleteBook, getBooks } from "@/app/service/api";
import { Badge } from "@/components/ui/badge";
import PaginationComponent from "@/components/pagination/Pagination";
import { Eye, Trash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import EmptyData from "@/components/empty-data/emptyData";
import LoadingComp from "@/components/loading/loadingComp";
import Link from "next/link";
import { searchProps } from "./searchBookProps";
import SearchForm from "@/components/searchForm/searchForm";

const Page = () => {
  const { toast } = useToast();
  const [books, setBooks] = useState([]);
  const [loadingState, setLoadingState] = useState({
    initLoading: true,
    deleteLoading: false,
  });
  const [pageState, setPageState] = useState({
    currentPage: 1,
    totalPage: 0,
  });
  const [bookId, setBookId] = useState(null);

  const fetchData = async (params = {}) => {
    try {
      const res = await getBooks(params);

      if (res) {
        setBooks(res.data);
        setPageState({
          currentPage: res.pagination.currentPage,
          totalPage: res.pagination.totalPages,
        });
      }

      return res;
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingState((prev) => ({ ...prev, initLoading: false }));
    }
  };

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
    } catch (error) {
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TitlePage title="List of Books" />
      <AddBooks
        successfulAdd={() => fetchData({ page: pageState.currentPage })}
      />
      <SearchForm api={fetchData} result={setBooks} searchProps={searchProps} />
      <Table className="mt-10">
        <TableHeader>
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
        <TableBody>
          {books.map((book, idx) => (
            <TableRow key={idx}>
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
              <TableCell className="text-center">{book.title}</TableCell>
              <TableCell className="text-center">{book.author}</TableCell>
              <TableCell className="text-center">{book.bookCode}</TableCell>
              <TableCell className="text-center">
                <Badge variant="outline">{book.category}</Badge>
              </TableCell>
              <TableCell className="text-center">{book.quantity}</TableCell>
              <TableCell className="text-center">{book.available}</TableCell>
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
                    <AlertDialogTrigger>
                      <Trash width={15} fill="currentColor" />
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
                <Button variant="icon">
                  <Link href={`/admin/books/${book._id}`}>
                    <Eye />
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {books.length === 0 && !loadingState.initLoading && <EmptyData />}
      {loadingState.initLoading && <LoadingComp />}
      <div className="mt-10">
        <PaginationComponent
          pageState={pageState}
          onChangePage={(page) => {
            fetchData({ page });
            setPageState((prev) => ({ currentPage: page, ...prev }));
          }}
        />
      </div>
    </div>
  );
};

export default Page;
