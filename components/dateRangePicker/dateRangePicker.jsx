"use client";
import * as React from "react";
import { addDays, format, differenceInCalendarDays, parse } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({ className, onDateChange, initialValue }) {
  const [date, setDate] = React.useState(() => {
    if (initialValue?.from && initialValue?.to) {
      return {
        from:
          typeof initialValue.from === "string"
            ? parse(initialValue.from, "yyyy-MM-dd", new Date())
            : initialValue.from,
        to:
          typeof initialValue.to === "string"
            ? parse(initialValue.to, "yyyy-MM-dd", new Date())
            : initialValue.to,
      };
    }
    return {
      from: new Date(),
      to: addDays(new Date(), 6),
    };
  });

  const handleSelect = (range) => {
    if (range?.from && range?.to) {
      const daysDifference = differenceInCalendarDays(range.to, range.from);
      if (daysDifference <= 7) {
        setDate(range);
        if (onDateChange) {
          onDateChange({
            from: format(range.from, "yyyy-MM-dd"),
            to: format(range.to, "yyyy-MM-dd"),
          });
        }
      } else {
        alert("Please select a date range of 7 days or less.");
      }
    } else {
      setDate(range);
      if (onDateChange && range?.from) {
        onDateChange({ from: format(range.from, "yyyy-MM-dd"), to: null });
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
