"use client";
import React, { useEffect, useState, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import PaginationComponent from "@/components/pagination/Pagination";
import { Eye, Trash } from "lucide-react";
import { formFields } from "./formFields";
import Link from "next/link";
import { addStudents, deleteStudent, getStudents } from "@/app/service/api";
import SearchForm from "@/components/searchForm/searchForm";
import { searchProps } from "./searchProps";
import EmptyData from "@/components/empty-data/emptyData";
import Image from "next/image";
import LoadingComp from "@/components/loading/loadingComp";
import { Badge } from "@/components/ui/badge";

const Page = () => {
  const form = useForm({
    defaultValues: { firstname: "", middleinitial: "", lastname: "", usn: "" },
  });
  const searchForm = useForm({
    defaultValues: { usn: "" },
  });
  const { toast } = useToast();
  const [students, setStudents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [pageState, setPageState] = useState({ currentPage: 1, totalPage: 0 });
  const [loadingState, setLoadingState] = useState({
    delete: false,
    add: false,
    init: false,
  });
  const [studentId, setStudentId] = useState(null);

  // Fetch data based on page change
  const fetchData = async (params = {}) => {
    try {
      const response = await getStudents(params);
      if (response.data) {
        setStudents(response.data);
        setPageState((prev) => ({
          ...prev,
          currentPage: response.pagination.currentPage,
          totalPage: response.pagination.totalPages,
        }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData({ page: pageState.currentPage });
  }, []);

  // Handle form submission
  const handleSubmit = async (data) => {
    try {
      setLoadingState((prev) => ({ ...prev, add: true }));
      const response = await addStudents(data);

      if (response.error) {
        throw new Error(response.error); // Handle API error messages
      }

      fetchData();
      setOpenDialog(false);
      form.reset(); // Reset form after submission
      toast({
        title: "Added Successfully",
        className: "bg-black text-white",
      });
    } catch (error) {
      console.error("Failed to add student:", error);
      toast({
        title: "Failed to add student",
        description: error.message || "Something went wrong.",
        className: "bg-red-500 text-white",
      });
    } finally {
      setLoadingState((prev) => ({ ...prev, add: false }));
    }
  };

  const handleDelete = async (id) => {
    try {
      setStudentId(id);
      setLoadingState({ delete: true });
      const response = await deleteStudent({ id });
      if (response.error) {
        throw new Error(response.error); // Handle API error messages
      }

      fetchData({ page: 1 });

      toast({
        title: "Deleted Successfully",
        className: "bg-black text-white",
      });
    } catch (error) {
      toast({
        title: "Failed to delete student",
        description: error.message || "Something went wrong.",
        className: "bg-red-500 text-white",
      });
    } finally {
      setLoadingState({ delete: false });
      setStudentId(null);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">List of Students</h1>

      <div className="mt-6">
        <SearchForm
          api={fetchData}
          searchProps={searchProps}
          result={setStudents}
        />
      </div>

      {/* Add Student Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger className="bg-black text-white text-sm px-4 py-2 rounded-lg mt-6">
          Add Student
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Student</DialogTitle>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                {formFields.map((fieldName) => (
                  <FormField
                    key={fieldName.name}
                    control={form.control}
                    name={fieldName.name}
                    rules={fieldName.rules.pattern}
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>{fieldName.label}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={`Input ${fieldName.label}`}
                              {...field}
                              value={field.value || ""}
                              onChange={(e) => {
                                const value = e.target.value.replace(
                                  fieldName.regex,
                                  ""
                                );
                                field.onChange(value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                ))}

                <Button type="submit" className="mt-6">
                  {loadingState.add ? "Adding..." : "Submit"}
                </Button>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Table Display */}
      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            {[
              "Name",
              "USN",
              "No. of Books Borrowed",
              "Total of Books Borrowed",
              "Status",
              "Actions",
            ].map((heading) => (
              <TableHead key={heading} className="uppercase text-center">
                {heading}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student._id}>
              <TableCell className="text-center">{`${student.firstname} ${student.middleinitial} ${student.lastname}`}</TableCell>
              <TableCell className="text-center">{student.usn}</TableCell>
              <TableCell className="text-center">
                {student.numberOfBooksBorrowed}
              </TableCell>
              <TableCell className="text-center">
                {student.totalOfBooksBorrowed}
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  className={
                    student.isRegistered
                      ? "bg-green-600 text-white"
                      : "bg-gray-500"
                  }
                >
                  {student.isRegistered ? "Registered" : "Not Registered"}
                </Badge>
              </TableCell>
              <TableCell className="text-center flex items-center justify-center">
                {loadingState.delete && student._id === studentId ? (
                  <Image
                    src="/assets/Loading.gif"
                    width={15}
                    height={15}
                    alt="loading"
                  />
                ) : (
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Trash width={15} fill="currentColor" />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the student's account and remove it from the
                          database.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction
                          onClick={() => handleDelete(student._id)}
                        >
                          Yes
                        </AlertDialogAction>
                        <AlertDialogCancel>
                          No, I changed my mind
                        </AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
                <Button variant="icon">
                  <Link href={`/admin//students/${student._id}`}>
                    <Eye />
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {students.length === 0 && loadingState.init && <EmptyData />}
      {loadingState.init && <LoadingComp />}
      {/* Pagination */}
      <div className="mt-10">
        <PaginationComponent
          pageState={pageState}
          onChangePage={(page) => {
            fetchData({ page });
            setPageState((prev) => ({ currentPage: page, ...prev }));
          }}
        />
      </div>
    </div>
  );
};

export default Page;
