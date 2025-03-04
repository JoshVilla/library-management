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
import PaginationComponent from "@/components/pagination/Pagination";
import LoadingComp from "@/components/loading/loadingComp";
import { IAnnouncement } from "@/app/service/types";

type PageState = {
  currentPage: number;
  totalPage: number;
};

const Page = () => {
  const { toast } = useToast();
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [pageState, setPageState] = useState<PageState>({
    currentPage: 1,
    totalPage: 0,
  });
  const [loadingState, setLoadingState] = useState({
    init: true,
    delete: false,
    pin: false,
  });

  const unPinnedAnnouncement: IAnnouncement[] = useMemo(() => {
    return announcements.filter((o:IAnnouncement) => !o.isPinned);
  }, [announcements]);

  const pinnedAnnouncement: IAnnouncement | null = useMemo(() => {
    return announcements.find((o:IAnnouncement) => o.isPinned) || null;
  }, [announcements]);

  const fetchData = async (params = {}) => {
    setLoadingState((prev) => ({ ...prev, init: true }));
    try {
      const res = await getAnnouncement(params);
      if (res.data) {
        setAnnouncements(res.data);
        setPageState({
          currentPage: res.page ?? 1,
          totalPage: res.totalPages ?? 0,
        });
      } else {
        toast({
          title: "Failed to load announcements",
          description: res.message || "An unexpected error occurred.",
          className: "bg-red-500 text-white",
        });
      }
    } catch (error: any) {
      console.error("Fetch error:", error);
      toast({
        title: "Error fetching announcements",
        description: error.message || "Please try again later.",
        className: "bg-red-500 text-white",
      });
    } finally {
      setLoadingState((prev) => ({ ...prev, init: false }));
    }
  };

  const handleDelete = async (id) => {
    setLoadingState((prev) => ({ ...prev, delete: true }));
    try {
      const res = await deleteAnnouncement({ id });

      if (res?.message) {
        await fetchData();
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
    } catch (error: any) {
      console.error("Delete error:", error);
      toast({
        title: "Error deleting announcement",
        description: error.message || "Please try again later.",
        className: "bg-red-500 text-white",
      });
    } finally {
      setLoadingState((prev) => ({ ...prev, delete: false }));
    }
  };

  const handleUnpin = async (id: string) => {
    setLoadingState((prev) => ({ ...prev, pin: true }));
    try {
      const res = await updateAnnouncement({ id, isPinned: false });
      if (res) {
        await fetchData();
        toast({
          title: res.message,
          className: "bg-black text-white",
        });
      }
    } catch (error: any) {
      console.error("Unpin error:", error);
      toast({
        title: "Error unpinning announcement",
        description: error.message || "Please try again later.",
        className: "bg-red-500 text-white",
      });
    } finally {
      setLoadingState((prev) => ({ ...prev, pin: false }));
    }
  };

  const handlePin = async (id) => {
    setLoadingState((prev) => ({ ...prev, pin: true }));
    try {
      const res = await updateAnnouncement({ id, isPinned: true });
      if (res) {
        await fetchData();
        toast({
          title: res.message,
          className: "bg-black text-white",
        });
      }
    } catch (error: any) {
      console.error("Pin error:", error);
      toast({
        title: "Error pinning announcement",
        description: error.message || "Please try again later.",
        className: "bg-red-500 text-white",
      });
    } finally {
      setLoadingState((prev) => ({ ...prev, pin: false }));
    }
  };

  const renderDate = (date) =>
    date ? format(new Date(date), "MMM dd, yyyy") : "";

  useEffect(() => {
    fetchData();
  }, []);

  if (loadingState.init) {
    return (
      <div className="p-4 sm:p-6 md:p-4">
        <TitlePage title="Announcements" />
        <Separator className="mt-4" />
        <LoadingComp />
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-4">
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
              <div className="p-4 dark:bg-gray-800 bg-gray-100 rounded-lg mt-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    Posted: {renderDate(pinnedAnnouncement.createdAt)}
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger
                        disabled={loadingState.pin}
                        onClick={() => handleUnpin(pinnedAnnouncement._id)}
                      >
                        <PinOff size={15} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Unpin</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="break-words text-sm max-w-[400px]">
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
            {unPinnedAnnouncement.length === 0 && (
              <div className="text-sm text-gray-500">No Announcements</div>
            )}
            {unPinnedAnnouncement.map((announce: IAnnouncement) => (
              <div
                key={announce._id}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <div className="text-sm break-words flex-1 max-w-[400px]">
                    {announce.announcement}
                  </div>
                  <div className="text-xs text-gray-500">
                    {renderDate(announce.createdAt)}
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-3">
                  <AlertDialog>
                    <AlertDialogTrigger disabled={loadingState.pin}>
                      <Pin size={18} className="cursor-pointer" />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This announcement will
                          be pinned.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handlePin(announce._id)}
                        >
                          Pin
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <AlertDialog>
                    <AlertDialogTrigger disabled={loadingState.delete}>
                      <Trash size={18} className="cursor-pointer" />
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
          {announcements.length > 0 && (
            <div className="mt-10">
              <PaginationComponent
                pageState={pageState}
                onChangePage={(page) => {
                  fetchData({ page });
                  setPageState((prev) => ({ ...prev, currentPage: page }));
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
