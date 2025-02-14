"use client";
import React from "react";
import { TrendingUp } from "lucide-react";
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

const chartData = [
  {
    browser: "onGoingRequest",
    visitors: 300,
    fill: "var(--color-onGoingRequest)",
  },
  { browser: "cancelled", visitors: 200, fill: "var(--color-cancelled)" },
  { browser: "approved", visitors: 187, fill: "var(--color-approved)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  onGoingRequest: {
    label: "On Going Request",
    color: "hsl(var(--chart-1))",
  },
  cancelled: {
    label: "Cancelled",
    color: "hsl(var(--chart-2))",
  },
  approved: {
    label: "Approved",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};
const Graphs = () => {
  return (
    <div>
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Pie Chart - Label</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey="visitors"
                label
                nameKey="browser"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            <p className="text-gray-500">
              Graph showing the number of students who borrowed, returned, had
              expired, or canceled transactions.
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Graphs;
