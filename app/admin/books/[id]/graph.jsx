import { DatePickerWithRange } from "@/components/dateRangePicker/dateRangePicker";
import React from "react";

const Graph = () => {
  return (
    <div className="mt-10 p-6">
      <div className="text-lg font-bold mb-6">Weekly Graph</div>
      <div>
        <DatePickerWithRange onDateChange={(date) => console.log(date)} />
      </div>
    </div>
  );
};

export default Graph;
