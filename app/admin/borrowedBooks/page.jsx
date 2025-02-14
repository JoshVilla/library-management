"use client";

import { getBorrowedBooks } from "@/app/service/api";
import TitlePage from "@/components/titlePage/titlePage";
import React, { useEffect, useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getBorrowedBooks();
      if (res) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const borrowStatus = useMemo(() => {
    const statusGroups = {
      pending: [],
      approved: [],
      inProgress: [],
      returned: [],
      cancelled: [],
    };

    data.forEach((status) => {
      if (status.isApproved === 0) statusGroups.cancelled.push(status);
      else if (status.isApproved === 1) statusGroups.approved.push(status);
      else if (status.isApproved === 2) statusGroups.pending.push(status);
      else if (status.isApproved === 3) statusGroups.inProgress.push(status);
      else if (status.isApproved === 4) statusGroups.returned.push(status);
    });

    return statusGroups;
  }, [data]);

  const options = [
    { value: 1, label: "One" },
    { value: 2, label: "Two" },
    { value: 3, label: "Three" },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TitlePage title="Borrowed Books" />
    </div>
  );
};

export default Page;
