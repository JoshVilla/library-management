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
const Page = () => {
  const [dataBooks, setDataBooks] = useState([]);
  const router = useRouter();
  const fetchData = async (params = {}) => {
    try {
      const res = await getBooks(params);
      if (res) {
        setDataBooks(res.data);
      }
    } catch (error) {
      console.log(res);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TitlePage title="List of Books" />
      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            {["Title", "Author", "Category", "Quantity", "Actions"].map(
              (heading) => (
                <TableHead key={heading} className="uppercase text-center">
                  {heading}
                </TableHead>
              )
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataBooks.map((book) => (
            <TableRow key={book._id}>
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
    </div>
  );
};

export default Page;
