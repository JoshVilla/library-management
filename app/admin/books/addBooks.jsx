"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formFields } from "./addBooksProps";
import { useForm } from "react-hook-form";
import { addBook } from "@/app/service/api";
import { useToast } from "@/hooks/use-toast";

const AddBooksForm = ({ successfulAdd }) => {
  const form = useForm();
  const { toast } = useToast();
  const [openDialog, setOpenDialog] = useState(false);
  const [uploading, setUploading] = useState(false);

  const validateImageFile = (file) => {
    // Check if file exists
    if (!file) return false;

    // Check file type
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please select a JPG or PNG image",
        className: "bg-red-500 text-white",
      });
      return false;
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image under 5MB",
        className: "bg-red-500 text-white",
      });
      return false;
    }

    return true;
  };

  const handleCloseDialog = (val) => {
    setOpenDialog(val);
    form.reset();
  };

  const handleAddBook = async (data) => {
    try {
      if (data.picture && !validateImageFile(data.picture)) {
        return;
      }

      setUploading(true);
      const formData = new FormData();

      if (data.picture) {
        formData.append("picture", data.picture);
      }

      Object.keys(data).forEach((key) => {
        if (key !== "picture" && data[key]) {
          formData.append(key, data[key]);
        }
      });

      const res = await addBook(formData, true);

      if (res.error) {
        throw new Error(res.error);
      }

      successfulAdd();
      setOpenDialog(false);
      form.reset();
      toast({
        title: "Book Added Successfully",
        className: "bg-black text-white",
      });
    } catch (error) {
      console.error("Failed to add book:", error);
      toast({
        title: "Failed to add book",
        description: error.message || "Something went wrong.",
        className: "bg-red-500 text-white",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <Dialog open={openDialog} onOpenChange={handleCloseDialog}>
        <DialogTrigger className="bg-black text-white text-sm px-4 py-2 rounded-lg mt-6">
          Add Books
        </DialogTrigger>
        <DialogContent className={"overflow-y-scroll max-h-[80%]"}>
          <DialogHeader>
            <DialogTitle>Add Book</DialogTitle>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleAddBook)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="picture"
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>Picture</FormLabel>
                      <FormControl>
                        <div className="space-y-2">
                          <Input
                            {...fieldProps}
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            onChange={(event) => {
                              const file = event.target.files?.[0];
                              if (file && validateImageFile(file)) {
                                onChange(file);
                              } else {
                                // Reset the input if validation fails
                                event.target.value = "";
                              }
                            }}
                          />
                          <p className="text-sm text-gray-500">
                            Accepted formats: JPG, PNG (Max 5MB)
                          </p>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {formFields.map((fieldName) =>
                  fieldName.type === "input" ? (
                    <FormField
                      key={fieldName.name}
                      control={form.control}
                      name={fieldName.name}
                      rules={fieldName.rules || null}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{fieldName.label}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={`Input ${fieldName.label}`}
                              {...field}
                              value={field.value || ""}
                              onChange={(e) => {
                                let value = e.target.value;
                                if (fieldName.regex) {
                                  value = value.replace(fieldName.regex, "");
                                }
                                field.onChange(value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ) : (
                    <FormField
                      key="category"
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Categories</SelectLabel>
                                  {fieldName.categories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                      {category}
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )
                )}
                <Button type="submit" className="mt-6" disabled={uploading}>
                  {uploading ? "Adding Book..." : "Submit"}
                </Button>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddBooksForm;
