"use client";
import React, { useEffect, useState } from "react";

import { Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getMonthlyBorrowedBooksStats } from "../service/api";
import PieGraphSkeleton from "@/components/skeleton/pieGraphSkeleton";

const transformDataForChart = (data) => {
  return [
    {
      stats: "onGoingRequest",
      counts: data.totalPending,
      fill: "#495057",
    },
    {
      stats: "cancelled",
      counts: data.totalCancelled,
      fill: "#343a40",
    },
    {
      stats: "approved",
      counts: data.totalApproved,
      fill: "#adb5bd",
    },
    {
      stats: "failed",
      counts: data.totalFailed,
      fill: "#212529",
    },
    {
      stats: "returned",
      counts: data.totalReturned,
      fill: "#dee2e6",
    },
    {
      stats: "borrowing",
      counts: data.totalBorrowingInProgress,
      fill: "#6c757d",
    },
  ];
};

const chartConfig = {
  onGoingRequest: {
    label: "Pending",
  },
  cancelled: {
    label: "Cancelled",
    color: "hsl(var(--chart-1))",
  },
  approved: {
    label: "Approved",
    color: "hsl(var(--chart-2))",
  },
  failed: {
    label: "Failed to Return",
    color: "hsl(var(--chart-3))",
  },
  returned: {
    label: "Returned",
    color: "hsl(var(--chart-4))",
  },
  borrowing: {
    label: "Borrowing in Progress",
    color: "hsl(var(--chart-5))",
  },
};

const Graphs = () => {
  const [graphs, setGraphs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchDataGraphs = async () => {
    try {
      const res = await getMonthlyBorrowedBooksStats();
      if (res) {
        setGraphs(res.data[0]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  function hasNonZeroValue(obj) {
    return Object.entries(obj)
      .filter(([key]) => !["_id", "__v", "monthYear"].includes(key)) // Exclude specific keys
      .some(([_, value]) => value !== 0);
  }

  useEffect(() => {
    fetchDataGraphs();
  }, []);
  return (
    <div>
      {isLoading ? (
        <PieGraphSkeleton />
      ) : (
        <div className="flex flex-col">
          <div className="text-center">
            <div className="font-semibold">{graphs.monthYear}</div>
          </div>
          {hasNonZeroValue(graphs) ? (
            <div className="flex-1 pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
              >
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={transformDataForChart(graphs)}
                    dataKey="counts"
                    label
                    nameKey="stats"
                  />
                </PieChart>
              </ChartContainer>
            </div>
          ) : (
            <div className="flex items-center justify-center h-40">
              <div className="text-gray-500 font-semibold">No Data</div>
            </div>
          )}

          <div className="flex-col gap-2 text-sm justify-center">
            <p className="text-gray-500 text-center">
              Monthly borrowing books data graph
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Graphs;
