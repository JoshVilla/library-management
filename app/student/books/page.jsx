"use client";
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

import { getBooks } from "@/app/service/api";
import { Badge } from "@/components/ui/badge";
import { Hand } from "lucide-react";
import { useRouter } from "next/navigation";
import SearchForm from "@/components/searchForm/searchForm";
import { searchProps } from "./searchBooksProps";
import Image from "next/image";
import PaginationComponent from "@/components/pagination/Pagination";
import EmptyData from "@/components/empty-data/emptyData";
import LoadingComp from "@/components/loading/loadingComp";
const Page = () => {
  const [dataBooks, setDataBooks] = useState([]);
  const [pageState, setPageState] = useState({
    currentPage: 1,
    totalPage: 0,
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const fetchData = async (params = {}) => {
    try {
      const res = await getBooks(params);
      if (res) {
        setDataBooks(res.data);
        setPageState({
          currentPage: res.pagination.currentPage,
          totalPage: res.pagination.totalPages,
        });
      }
    } catch (error) {
      console.log(res);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TitlePage title="List of Books" />
      {/* <SearchForm
        api={fetchData}
        result={setDataBooks}
        searchProps={searchProps}
      /> */}
      <Table className="mt-6">
        <TableHeader>
          <TableRow>
            {[
              "Book Cover",
              "Title",
              "Author",
              "Category",
              "Quantity",
              "Actions",
            ].map((heading) => (
              <TableHead key={heading} className="uppercase text-center">
                {heading}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataBooks.map((book) => (
            <TableRow key={book._id}>
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
              <TableCell className="text-center">
                {" "}
                <Badge variant="outline">{book.category}</Badge>
              </TableCell>
              <TableCell className="text-center">{book.quantity}</TableCell>
              <TableCell className="flex justify-center gap-6 items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger
                      onClick={() => router.push(`/student/books/${book._id}`)}
                    >
                      <Hand width={15} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Borrow Book</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!loading && dataBooks.length === 0 && <EmptyData />}
      {loading && <LoadingComp />}
      {dataBooks.length > 1 && (
        <div className="mt-10">
          <PaginationComponent
            pageState={pageState}
            onChangePage={(page) => {
              fetchData({ page });
              setPageState((prev) => ({ currentPage: page, ...prev }));
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
