"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { addAnnouncement } from "@/app/service/api";
import { useToast } from "@/hooks/use-toast";

const AddAnnouncement = ({ callAfterSuccess }) => {
  const form = useForm({
    defaultValues: {
      announcement: "", // Ensure an empty string as default
      isPinned: false, // Default to false
    },
  });

  const { toast } = useToast();

  const handleAdd = async (data) => {
    try {
      const res = await addAnnouncement(data);
      console.log(res);

      if (res?.message) {
        form.reset(); // Reset the form only if the request is successful
        callAfterSuccess();
        toast({
          title: res.message,
          className: "bg-black text-white",
        });
      } else {
        toast({
          title: "Failed to add announcement",
          className: "bg-red-500 text-white",
        });
      }
    } catch (error) {
      console.error("Error adding announcement:", error);
      toast({
        title: "An error occurred. Please try again.",
        className: "bg-red-500 text-white",
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleAdd)} className="space-y-4">
          {/* Announcement Input */}
          <FormField
            control={form.control}
            name="announcement"
            rules={{ required: "Announcement is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Announcement</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter your announcement..."
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Pin Announcement Checkbox */}
          <FormField
            control={form.control}
            name="isPinned"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked)}
                  />
                </FormControl>
                <FormLabel>Pin announcement</FormLabel>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" size="sm">
            Add Announcement
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddAnnouncement;
