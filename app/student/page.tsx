"use client";
import TitlePage from "@/components/titlePage/titlePage";
import React, { useEffect, useState, useRef } from "react";
import { getAnnouncement, studentDashboard, getBooks } from "../service/api";
import { format } from "date-fns";
import {
  IAnnouncement,
  IStudent,
  StudentDashboard,
  IBook,
} from "../service/types";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import StatusCount from "./components/StatusCount";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import DashCardSkeleton from "@/components/skeleton/dashCardSkeleton";
import CarouselSkeleton from "@/components/skeleton/carousel";
const Page = () => {
  const router = useRouter();
  const state = useSelector(
    (state: RootState) => state.user.userInfo
  ) as IStudent;
  const [announcement, setAnnouncement] = useState<IAnnouncement | null>(null);
  const [studentDashboardState, setStudentDashboardState] =
    useState<StudentDashboard | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [featuredBooks, setFeaturedBooks] = useState<IBook[]>([]);
  const [arrSkeleton, setArrSkeleton] = useState<string[]>(
    new Array(6).fill("card")
  );
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const fetchAnnouncement = async () => {
    try {
      const response = await getAnnouncement({ isPinned: true });
      if (response.data) {
        setAnnouncement(response.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderDate = (date: string) => {
    return date ? format(new Date(date), "MMM dd, yyyy") : "";
  };

  const fetchStudentDashboard = async () => {
    try {
      setIsLoading(true);
      const [res, res2] = await Promise.all([
        studentDashboard({ studentId: state._id }),
        getBooks({ featured: true }),
      ]);
      if (res) {
        setStudentDashboardState(res.data);
      }
      if (res2) {
        setFeaturedBooks(res2.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncement();
    fetchStudentDashboard();
  }, []);

  return (
    <div>
      <TitlePage title="Dashboard" />
      {/* Annoucement */}
      {announcement && (
        <div className=" dark:bg-green-600 bg-green-100 p-4 my-4 rounded-lg">
          <div className="flex justify-between">
            <div className="text-lg font-semibold">Announcement!!</div>
            <div className="text-sm text-gray-500 dark:text-white">
              Posted last: {renderDate(announcement.createdAt)}
            </div>
          </div>
          <div className="mt-2">{announcement.announcement}</div>
        </div>
      )}
      <div className="flex gap-4">
        <div className="w-full">
          {studentDashboardState?.countStatus && !isLoading ? (
            <StatusCount
              count={studentDashboardState?.countStatus}
              isLoading={isLoading}
            />
          ) : (
            <div className="flex gap-4">
              {arrSkeleton.map((item, key: number) => (
                <DashCardSkeleton key={`${item}-${key}`} />
              ))}
            </div>
          )}
        </div>
        <div className="md:w-1/4 p-4">
          <div className="text-xl font-semibold">Featured Books</div>
          {isLoading ? (
            <CarouselSkeleton />
          ) : featuredBooks.length === 0 ? (
            <div className=" text-sm text-gray-500 mt-10">
              No featured books found
            </div>
          ) : (
            <Carousel
              plugins={[plugin.current]}
              className="w-[270px] flex justify-center items-center my-6"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="flex items-center">
                {featuredBooks.map((book) => (
                  <CarouselItem key={book._id}>
                    <div
                      className="p-1 flex flex-col items-center justify-center h-full cursor-pointer"
                      onClick={() => router.push(`/student/books/${book._id}`)}
                    >
                      <div className="relative">
                        <Image
                          src={
                            book.pictureUrl ?? "/assets/book-placeholder.png"
                          }
                          alt={book.title}
                          className="object-cover rounded-lg"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <div className="text-xs font-semibold ">
                          {book.title}
                        </div>
                        <div className="text-xs text-gray-500 ">
                          {book.author}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {featuredBooks.length > 1 && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
