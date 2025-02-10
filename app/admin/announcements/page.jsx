"use client";
import TitlePage from "@/components/titlePage/titlePage";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState, useMemo } from "react";
import AddAnnouncement from "./addAnnouncement";
import {
  deleteAnnouncement,
  getAnnouncement,
  updateAnnouncement,
} from "@/app/service/api";
import { format } from "date-fns";
import { Pin, PinOff, Trash } from "lucide-react";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useToast } from "@/hooks/use-toast";

const Page = () => {
  const { toast } = useToast();
  const [announcements, setAnnouncements] = useState([]);

  const unPinnedAnnouncement = useMemo(() => {
    return announcements.filter((o) => !o.isPinned);
  }, [announcements]);

  const pinnedAnnouncement = useMemo(() => {
    return announcements.find((o) => o.isPinned) || null;
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

      if (res?.message) {
        setAnnouncements((prev) => prev.filter((a) => a._id !== id));

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

  const handleUnpin = async (id) => {
    try {
      const res = await updateAnnouncement({ id, isPinned: false });
      if (res) {
        fetchData();
        toast({
          title: res.message,
          className: "bg-black text-white",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderDate = (date) =>
    date ? format(new Date(date), "MMM dd, yyyy") : "";

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <TitlePage title="Announcements" />
      <Separator className="mt-4" />

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Left Section - Pinned & Add Announcement */}
        <div className="flex-1">
          <AddAnnouncement callAfterSuccess={fetchData} />
          <div className="mt-10">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Pin size={20} />
              <span>Pinned Announcement</span>
            </div>
            {pinnedAnnouncement ? (
              <div className="p-4 bg-gray-100 rounded-lg mt-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    Posted: {renderDate(pinnedAnnouncement.createdAt)}
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger
                        onClick={() => handleUnpin(pinnedAnnouncement._id)}
                      >
                        {" "}
                        <PinOff size={15} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Unpin</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="break-words text-sm">
                  {pinnedAnnouncement.announcement}
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-500 mt-2">
                No Pinned Announcement
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Unpinned Announcements */}
        <div className="flex-1">
          <div className="space-y-4">
            {unPinnedAnnouncement.map((announce) => (
              <div
                key={announce._id}
                className="bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <div className="text-sm break-words flex-1">
                    {announce.announcement}
                  </div>
                  <div className="text-xs text-gray-500">
                    {renderDate(announce.createdAt)}
                  </div>
                </div>

                <div className="flex justify-end mt-3">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Trash size={18} className=" cursor-pointer " />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. The announcement will be
                          permanently removed.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(announce._id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
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
