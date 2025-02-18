"use client";

import * as React from "react";
import { addDays, formatISO, differenceInCalendarDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({ className, onDateChange }) {
  const [date, setDate] = React.useState({
    from: new Date(),
    to: addDays(new Date(), 6), // Default to a 7-day range
  });

  const handleSelect = (range) => {
    if (range?.from && range?.to) {
      const daysDifference = differenceInCalendarDays(range.to, range.from);

      if (daysDifference <= 7) {
        setDate(range);
        if (onDateChange) {
          onDateChange({
            from: formatISO(range.from), // Convert to ISO format
            to: formatISO(range.to),
          });
        }
      } else {
        alert("Please select a date range of 7 days or less.");
      }
    } else {
      setDate(range);
      if (onDateChange && range?.from) {
        onDateChange({ from: formatISO(range.from), to: null }); // Single date selection
      }
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date?.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
