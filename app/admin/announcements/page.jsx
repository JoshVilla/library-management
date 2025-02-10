"use client";
import TitlePage from "@/components/titlePage/titlePage";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState, useMemo } from "react";
import AddAnnouncement from "./addAnnouncement";
import { deleteAnnouncement, getAnnouncement } from "@/app/service/api";
import { format } from "date-fns";
import { Trash } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";

const Page = () => {
  const { toast } = useToast();
  const [announcements, setAnnouncements] = useState([]);

  const unPinnedAnnouncement = useMemo(() => {
    return announcements.filter((o) => !o.isPinned);
  }, [announcements]);

  const pinnedAnnouncement = useMemo(() => {
    return announcements.filter((o) => o.isPinned);
  }, [announcements]);

  const fetchData = async () => {
    try {
      const res = await getAnnouncement();
      if (res.announcements) {
        setAnnouncements(res.announcements);
      } else {
        toast({
          title: "Failed to load announcements",
          description: res.message || "An unexpected error occurred.",
          className: "bg-red-500 text-white",
        });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast({
        title: "Error fetching announcements",
        description: error.message || "Please try again later.",
        className: "bg-red-500 text-white",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteAnnouncement({ id });

      if (res && res.message) {
        // Optimistically update state instead of refetching
        setAnnouncements((prev) =>
          prev.filter((announcement) => announcement._id !== id)
        );

        toast({
          title: res.message,
          className: "bg-black text-white",
        });
      } else {
        toast({
          title: "Failed to delete",
          description: res?.message || "Something went wrong.",
          className: "bg-red-500 text-white",
        });
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast({
        title: "Error deleting announcement",
        description: error.message || "Please try again later.",
        className: "bg-red-500 text-white",
      });
    }
  };

  const renderDate = (date) => {
    if (!date) return "";
    return format(new Date(date), "MMM dd, yyyy");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TitlePage title="Announcements" />
      <Separator className="mt-4" />
      <div className="p-2 border flex">
        <div className="flex-1">
          <AddAnnouncement callAfterSuccess={fetchData} />
        </div>
        <div className="flex-1 p-8">
          <div className="space-y-3">
            {unPinnedAnnouncement.map((announce, idx) => (
              <div key={idx} className="bg-gray-100 p-4">
                {/* {announce.isPinned && <PinIcon size={15} />} */}
                <div className="flex justify-end mb-4">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Trash size={15} />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the announcement and remove it data from the
                          database.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(announce._id)}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
                <div className="flex justify-between ">
                  <div className="text-gray-700 max-w-[550px] break-words text-sm">
                    {announce.announcement}
                  </div>

                  <div className="text-xs text-gray-500">
                    {renderDate(announce.createdAt)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
