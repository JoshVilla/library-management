import { weeklyBookStats } from "@/app/service/api";
import { DatePickerWithRange } from "@/components/dateRangePicker/dateRangePicker";
import { useParams } from "next/navigation";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Graph = () => {
  const params = useParams();
  const [dataChart, setDataChart] = useState([]);
  const [date, setDate] = useState({ to: "", from: "" });

  const chartConfig = {
    returned: {
      label: "Returned",
      color: "#000000",
    },
    notReturned: {
      label: "Not Returned",
      color: "#9c9898",
    },
    borrowing: {
      label: "Borrowing",
      color: "#99a100",
    },
  };

  const fetchData = async () => {
    try {
      const res = await weeklyBookStats({ bookId: params.id, ...date });
      const formattedData = res.map((item) => {
        return {
          week: `${item.day} ${item.week}`,
          returned: item.returned,
          notReturned: item.notReturned,
          borrowing: item.borrowing,
        };
      });
      setDataChart(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  return (
    <div className="mt-8 p-6">
      <div className="text-lg font-bold mb-6">Weekly Graph</div>
      <div>
        <div className="flex gap-3 items-center">
          <DatePickerWithRange
            onDateChange={(date) => setDate({ to: date.to, from: date.from })}
            initialValue={{
              from: "2025-02-11",
              to: "2025-02-18",
            }}
          />
          <Button size="sm" onClick={fetchData}>
            Search
          </Button>
        </div>
        <div className="mt-4">
          <ChartContainer config={chartConfig} className="h-80">
            <LineChart
              accessibilityLayer
              data={dataChart}
              margin={{
                top: 40,
                left: 40,
                right: 40,
              }}
            >
              <CartesianGrid
                vertical={false}
                strokeWidth={2}
                // stroke="#999696"
              />
              <XAxis
                dataKey="week"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                interval={0} // Ensures all ticks are shown
                tickFormatter={(value) => value} // Keeps original labels intact
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="returned"
                type="monotone"
                stroke="#000000"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="notReturned"
                type="monotone"
                stroke="#9c9898"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="borrowing"
                type="monotone"
                stroke="#99a100"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default Graph;
