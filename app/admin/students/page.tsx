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
  editStudent,
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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
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

  const handleStatusChange = async (usn: string, status: string) => {
    try {
      const formData = new FormData();
      formData.append("usn", usn);
      formData.append("status", status !== "active" ? "active" : "inactive");
      const response = await editStudent(formData, true);
      if (response.error) {
        throw new Error(response.error); // Handle API error messages
      }
      fetchData();
    } catch (error: any) {
      console.error("Failed to change status:", error);
      toast({
        title: "Failed to change status",
        description: error.message || "Something went wrong.",
        className: "bg-red-500 text-white",
      });
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
          <Button
            variant="outline"
            className=" bg-black dark:bg-white text-white dark:text-black text-sm px-4 py-2 rounded-lg mt-6"
          >
            <Plus /> Add Student
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Student</DialogTitle>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) =>
                  handleSubmit(data as IStudent)
                )}
                className="space-y-4"
              >
                {formFields.map((fieldName: any) => (
                  <FormField
                    key={fieldName.name}
                    control={form.control}
                    name={fieldName.name}
                    rules={fieldName.rules?.pattern}
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
            {["Name", "USN", "Status", "Account Status", "Actions"].map(
              (heading) => (
                <TableHead key={heading} className="uppercase text-center">
                  {heading}
                </TableHead>
              )
            )}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((student: IStudent) => (
            <TableRow key={student._id}>
              <TableCell className="text-center">{`${student.firstname} ${student.middleinitial} ${student.lastname}`}</TableCell>

              <TableCell className="text-center">{student.usn}</TableCell>

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
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Label>
                    {student.status === "active" ? "Active" : "Inactive"}
                  </Label>
                  <Switch
                    checked={student.status === "active"}
                    onCheckedChange={() => {
                      handleStatusChange(student.usn, student.status);
                    }}
                  />
                </div>
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

                <Button variant="ghost">
                  <Link href={`/admin/students/${student._id}`}>
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
