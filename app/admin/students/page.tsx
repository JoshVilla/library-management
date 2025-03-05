"use client";
import React, { useState } from "react";
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
import { Eye, Plus, Trash } from "lucide-react";
import { formFields } from "./formFields";
import Link from "next/link";
import {
  addStudents,
  deleteStudent,
  getStudents,
  importStudent,
} from "@/app/service/api";
import SearchForm from "@/components/searchForm/searchForm";
import { searchProps } from "./searchProps";
import EmptyData from "@/components/empty-data/emptyData";
import Image from "next/image";
import LoadingComp from "@/components/loading/loadingComp";
import { Badge } from "@/components/ui/badge";
import useFetchDataTable from "@/hooks/useFetchDataTable";
import ImportButton from "@/components/import/importButton";
import { IStudent } from "@/app/service/types";
const Page = () => {
  const form = useForm({
    defaultValues: { firstname: "", middleinitial: "", lastname: "", usn: "" },
  });
  const {
    data,
    setData,
    loading,
    pageState,
    setPageState,
    fetchData,
    refetch,
  } = useFetchDataTable({ apiFunction: getStudents });
  const { toast } = useToast();
  const [openDialog, setOpenDialog] = useState(false);
  const [loadingState, setLoadingState] = useState({
    delete: false,
    add: false,
    init: false,
  });
  const [studentId, setStudentId] = useState(null);

  // Handle form submission
  const handleSubmit = async (data: IStudent) => {
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
    } catch (error: any) {
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
      setLoadingState((prev) => ({ ...prev, delete: true }));
      const response = await deleteStudent({ id });
      if (response.error) {
        throw new Error(response.error); // Handle API error messages
      }

      fetchData({ page: 1 });

      toast({
        title: "Deleted Successfully",
        className: "bg-black text-white",
      });
    } catch (error: any) {
      toast({
        title: "Failed to delete student",
        description: error.message || "Something went wrong.",
        className: "bg-red-500 text-white",
      });
    } finally {
      setLoadingState((prev) => ({ ...prev, delete: false }));
      setStudentId(null);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">List of Students</h1>

      <div className="mt-6 flex items-center gap-4">
        <SearchForm
          api={fetchData}
          searchProps={searchProps}
          result={setData}
        />
        <ImportButton api={importStudent} refresh={refetch} />
      </div>

      {/* Add Student Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button variant="outline"  className=" bg-black dark:bg-white text-white dark:text-black text-sm px-4 py-2 rounded-lg mt-6">
          <Plus /> Add Student
          </Button>
        </DialogTrigger>
        {/*@ts-ignore */}
        <DialogContent>
          {/*@ts-ignore */}
          <DialogHeader>
            {/*@ts-ignore */}
            <DialogTitle>Add Student</DialogTitle>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => handleSubmit(data as IStudent))}
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
      {/*@ts-ignore */}
      <Table className="mt-10">
        {/*@ts-ignore */}
        <TableHeader>
          {/*@ts-ignore */}
          <TableRow>
            {["Name", "USN", "Status", "Actions"].map((heading) => (
              <TableHead key={heading} className="uppercase text-center">
                {heading}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        {/*@ts-ignore */}
        <TableBody>
          {data.map((student: IStudent) => (
            <TableRow key={student._id}>
              {/*@ts-ignore */}
              <TableCell className="text-center">{`${student.firstname} ${student.middleinitial} ${student.lastname}`}</TableCell>
              {/*@ts-ignore */}
              <TableCell className="text-center">{student.usn}</TableCell>
              {/*@ts-ignore */}
              <TableCell className="text-center">
                {/*@ts-ignore */}
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
              {/*@ts-ignore */}
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
                    {/*@ts-ignore */}
                    <AlertDialogContent>
                      {/*@ts-ignore */}
                      <AlertDialogHeader>
                        {/*@ts-ignore */}
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        {/*@ts-ignore */}
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the student's account and remove it from the
                          database.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      {/*@ts-ignore */}
                      <AlertDialogFooter>
                        {/*@ts-ignore */}
                        <AlertDialogAction
                          onClick={() => handleDelete(student._id)}
                        >
                          Yes
                        </AlertDialogAction>
                        {/*@ts-ignore */}
                        <AlertDialogCancel>
                          No, I changed my mind
                        </AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
                {/*@ts-ignore */}
                <Button variant="icon">
                  {/*@ts-ignore */}
                  <Link href={`/admin//students/${student._id}`}>
                    {/*@ts-ignore */}
                    <Eye />
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {data.length === 0 && loading && <EmptyData />}
      {loading && <LoadingComp />}
      {/* Pagination */}
      <div className="mt-10">
        <PaginationComponent
          pageState={pageState}
          onChangePage={(page) => {
            fetchData({ page });
            setPageState((prev) => ({ ...prev, currentPage: page }));
          }}
        />
      </div>
    </div>
  );
};

export default Page;
