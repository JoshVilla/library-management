"use client";
import { getBooks, getBorrowedBooks } from "@/app/service/api";
import TitlePage from "@/components/titlePage/titlePage";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const request = () => {
  const params = useParams();
  const [requestDetails, setRequestDetails] = useState({});

  const fethData = async () => {
    try {
      const res = await getBorrowedBooks({ id: params.id });
      if (res.data) {
        setRequestDetails(res.data[0]);
        // fetchBookDetails();
        console.log(res.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBookDetails = async () => {
    try {
      const res = await getBooks({ id: request.bookId });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fethData();
  }, []);

  return (
    <div>
      <TitlePage title="Student`s Request Details" hasBack />
      <div className="mt-10 flex flex-col gap-4">
        <div>
          <div className="text-2xl font-semibold mb-4">Requested Book</div>
          <div className="flex items-center gap-2">
            <div className="text-lg font-semibold">
              {requestDetails.titleBook}
            </div>
            <Link
              className="text-sm text-blue-500"
              href={`/admin/books/${requestDetails.bookId}`}
            >
              View Book Details
            </Link>
          </div>
          <div className="text-md font-semibold">
            By: {requestDetails.authorBook}
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default request;
