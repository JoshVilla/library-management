"use client";

import { getBooks, updateBook } from "@/app/service/api";
import LoadingComp from "@/components/loading/loadingComp";
import TitlePage from "@/components/titlePage/titlePage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { bookCategories } from "@/utils/constant";
import Captcha from "@/components/captcha/captcha";

const Page = () => {
  const params = useParams();
  const { toast } = useToast();
  const form = useForm();
  const [bookData, setBookData] = useState(null);
  const [isModify, setIsModify] = useState(false);
  const [loading, setLoading] = useState(false);
  const [infoState, setInfoState] = useState({});
  const [openCaptcha, setOpenCaptcha] = useState(false);

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

  const fetchBook = async () => {
    try {
      const res = await getBooks({ id: params.id });
      if (res?.data?.length) {
        setBookData(res.data[0]);
        setInfoState(res.data[0]);
      }
    } catch (error) {
      console.error("Failed to fetch book:", error);
    }
  };

  const handleModify = async () => {
    try {
      setLoading(true);
      const cleanedData = Object.fromEntries(
        Object.entries({ ...form.getValues(), id: params.id }).filter(
          ([_, value]) => value !== undefined
        )
      );
      console.log(cleanedData, "cleanedData");
      const formData = new FormData();

      if (cleanedData.picture) {
        formData.append("picture", cleanedData.picture);
      }

      Object.keys(cleanedData).forEach((key) => {
        if (key !== "picture" && cleanedData[key]) {
          formData.append(key, cleanedData[key]);
        }
      });
      const res = await updateBook(formData, true);
      if (res.status === 200) {
        toast({
          title: res.message,
          className: "bg-black text-white",
        });
        setIsModify(false);
        fetchBook();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchBook();
    }
  }, [params.id]);

  if (!bookData)
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingComp />
      </div>
    );

  return (
    <div>
      <TitlePage title="Book Information" hasBack />
      <Separator className="my-6" />

      <div className="text-right mb-4">
        {isModify && (
          <Button variant="outline" onClick={() => setIsModify(false)}>
            Cancel
          </Button>
        )}
        <Button
          className="ml-4"
          type={isModify ? "submit" : "button"}
          onClick={() => {
            if (isModify) {
              handleModify();
            } else {
              setOpenCaptcha(true);
            }
          }}
        >
          {isModify ? (loading ? "Saving..." : "Save") : "Modify"}
        </Button>
        <Captcha
          onVerified={(isMatch) => isMatch && setIsModify(!isModify)}
          open={openCaptcha}
          setOpen={setOpenCaptcha}
        />
      </div>

      {isModify ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleModify)}>
            <div className="flex gap-4">
              <div>
                <Image
                  src={bookData.pictureUrl || "/assets/book-placeholder.png"}
                  width={400}
                  height={400}
                  className="max-w-[200px] max-h-[200px] object-contain"
                  alt="Book Cover"
                />
                <FormField
                  control={form.control}
                  name="picture"
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
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
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between items-center gap-10">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field: { onChange, ...fieldProps } }) => (
                        <FormItem className="w-full">
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input
                              className="w-full"
                              placeholder="Input Title"
                              {...fieldProps}
                              value={fieldProps.value || infoState.title || ""}
                              onChange={(event) => {
                                setInfoState((prev) => ({
                                  ...prev,
                                  title: event.target.value,
                                }));
                                onChange(event.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="available"
                      render={({ field: { onChange, ...fieldProps } }) => (
                        <FormItem className="w-full">
                          <FormLabel>Available</FormLabel>
                          <FormControl>
                            <Input
                              className="w-40"
                              placeholder="Input Available"
                              {...fieldProps}
                              value={
                                fieldProps.value || infoState.available || ""
                              }
                              onChange={(event) => {
                                setInfoState((prev) => ({
                                  ...prev,
                                  available: event.target.value,
                                }));
                                onChange(event.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  key="category"
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value); // Update form state
                            setInfoState((prev) => ({
                              ...prev,
                              category: value, // Also update local state to reflect the change
                            }));
                          }}
                          value={field.value || infoState.category || ""} // Set the value to the form or local state
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Categories</SelectLabel>
                              {bookCategories.map((category) => (
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

                <div className="flex justify-between gap-10">
                  <FormField
                    control={form.control}
                    name="author"
                    render={({ field: { onChange, ...fieldProps } }) => (
                      <FormItem className="w-full">
                        <FormLabel>Author</FormLabel>
                        <FormControl>
                          <Input
                            className="w-full"
                            placeholder="Input Author"
                            {...fieldProps}
                            value={fieldProps.value || infoState.author || ""}
                            onChange={(event) => {
                              setInfoState((prev) => ({
                                ...prev,
                                author: event.target.value,
                              }));
                              onChange(event.target.value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bookCode"
                    render={({ field: { onChange, ...fieldProps } }) => (
                      <FormItem className="w-full">
                        <FormLabel>Book Code</FormLabel>
                        <FormControl>
                          <Input
                            className="w-full"
                            placeholder="Input Book Code"
                            {...fieldProps}
                            value={fieldProps.value || infoState.bookCode || ""}
                            onChange={(event) => {
                              setInfoState((prev) => ({
                                ...prev,
                                bookCode: event.target.value,
                              }));
                              onChange(event.target.value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field: { onChange, ...fieldProps } }) => (
                    <FormItem className="w-full">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          className="w-full"
                          placeholder="Input Description"
                          {...fieldProps}
                          value={
                            fieldProps.value || infoState.description || ""
                          }
                          onChange={(event) => {
                            setInfoState((prev) => ({
                              ...prev,
                              description: event.target.value,
                            }));
                            onChange(event.target.value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </form>
        </Form>
      ) : (
        <div className="flex gap-4">
          <Image
            src={bookData.pictureUrl || "/assets/book-placeholder.png"}
            width={400}
            height={400}
            className="max-w-[200px] max-h-[200px] object-contain"
            alt="Book Cover"
          />
          <div className="flex flex-col gap-4 w-full">
            <div>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">{bookData.title}</div>
                <div>Available: {bookData.available}</div>
              </div>
              <Badge className="mt-4">{bookData.category}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold">
                Author: {bookData.author}
              </div>
              <div>Code: {bookData.bookCode}</div>
            </div>

            <div>{bookData.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
