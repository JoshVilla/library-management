"use client";

import * as React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface PageState {
  currentPage: number;
  totalPage: number;
}

interface PaginationComponentProps {
  pageState: PageState;
  onChangePage: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ pageState, onChangePage }) => {
  const { currentPage, totalPage } = pageState;

  if (totalPage < 2) return null; // Hide pagination if only one page

  // Function to update the current page
  const handlePageChange = (newPage: number) => onChangePage(newPage);

  // Generate page numbers dynamically
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full">
      <Pagination className="mx-auto flex w-full justify-center">
        <ul className="flex flex-row items-center gap-1">
          {/* Previous Button */}
          <li className="list-none">
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              className={cn(
                "gap-1 pl-2.5",
                currentPage === 1 && "pointer-events-none opacity-50"
              )}
            />
          </li>

          {/* Page Numbers */}
          {pageNumbers.map((num) => (
            <li key={num} className="list-none">
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(num);
                }}
                isActive={currentPage === num}
                className={cn(
                  "hover:bg-accent hover:text-accent-foreground",
                  currentPage === num && "bg-accent text-accent-foreground"
                )}
              >
                {num}
              </PaginationLink>
            </li>
          ))}

          {/* Next Button */}
          <li className="list-none">
            <PaginationNext
              href="#"
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPage))
              }
              className={cn(
                "gap-1 pr-2.5",
                currentPage === totalPage && "pointer-events-none opacity-50"
              )}
            />
          </li>
        </ul>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
