"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const PaginationComponent = ({ pageState, onChangePage }) => {
  const { currentPage, totalPage } = pageState;

  if (totalPage < 2) return null; // Hide pagination if only one page

  // Function to update the current page
  const handlePageChange = (newPage) => onChangePage(newPage);

  // Generate page numbers dynamically
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent className="flex justify-center space-x-2">
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            className={cn(
              currentPage === 1 && "pointer-events-none opacity-50"
            )}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {pageNumbers.map((num) => (
          <PaginationItem key={num}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(num);
              }}
              isActive={currentPage === num}
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPage))
            }
            className={cn(
              currentPage === totalPage && "pointer-events-none opacity-50"
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
