"use client";
import React, { useEffect, useState } from "react";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getMonthlyBorrowedBooksStats } from "../service/api";

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
  const fetchDataGraphs = async () => {
    try {
      const res = await getMonthlyBorrowedBooksStats();
      if (res) {
        setGraphs(res.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataGraphs();
  }, []);
  return (
    <div>
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Pie Chart - Label</CardTitle>
          <CardDescription>{graphs.monthYear}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
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
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            <p className="text-gray-500 text-center">
              Graph showing the number of students who borrowed, returned, had
              expired, or cancelled transactions.
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Graphs;
