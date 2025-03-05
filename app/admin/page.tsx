"use client";

import DashCard from "@/components/dashCard/dashCard";
import TitlePage from "@/components/titlePage/titlePage";
import { Users, BookOpen } from "lucide-react"; // Import relevant icons
import { useEffect, useRef, useState } from "react";
import { dashboard, updateMonthlyBorrowedBooksStats } from "@/app/service/api";
import DashCardSkeleton from "@/components/skeleton/dashCardSkeleton";
import RequestTable from "./requestTable";
import Graphs from "./graphs";
import { getBooks } from "@/app/service/api";
import { IBook } from "../service/types";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
interface DashboardData {
  name: string;
  value: number;
  icon: React.ReactNode;
}

export default function Home() {
  const [data, setData] = useState<DashboardData[]>([]);
  const [featuredBooks, setFeaturedBooks] = useState<IBook[]>([]);
  const skeletonArr = new Array(4).fill("skel");
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const fetchData = async () => {
    try {
      const [res, res2] = await Promise.all([
        dashboard(),
        getBooks({ featured: true }),
      ]);
      if (res2) {
        setFeaturedBooks(res2.data || []);
      }
      if (res) {
        const formatKey = (key) =>
          key
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .replace(/\b\w/g, (char) => char.toUpperCase());

        const getIcon = (key) => {
          switch (key) {
            case "totalBooks":
              return <BookOpen width={30} height={30} />;
            case "totalStudents":
              return <Users width={30} height={30} />;
            default:
              return <Users width={30} height={30} />; // Default icon
          }
        };

        const result = Object.entries(res).map(([key, value]) => ({
          name: formatKey(key),
          value,
          icon: getIcon(key),
        }));
        console.log(result, "result");
        setData(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateMonthlyBorrowedBooks = async () => {
    try {
      const res = await updateMonthlyBorrowedBooksStats({});
      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    updateMonthlyBorrowedBooks();
  }, []);

  return (
    <div>
      <TitlePage title="Dashboard" />
      <div className="flex flex-wrap">
        <div className="flex-1 p-6">
          <div className="flex items-center flex-wrap gap-10 my-4">
            {data.length === 0
              ? skeletonArr.map((_, idx) => <DashCardSkeleton key={idx} />)
              : data.map((item) => (
                  <DashCard
                    key={item.name}
                    icon={item.icon}
                    title={item.name}
                    data={item.value}
                  />
                ))}
          </div>
          <div>
            <div className="text-xl font-semibold">Student's Request</div>
            <RequestTable />
          </div>
        </div>
        <div className="md:w-1/4 flex flex-col gap-4 justify-center items-center">
          <Graphs />
          <div>
            <div className="text-xl font-semibold my-10">Featured Books</div>
            <Carousel
              plugins={[plugin.current]}
              className="w-[270px] flex justify-center items-center "
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="flex items-center">
                {featuredBooks.map((book) => (
                  <CarouselItem key={book._id}>
                    <div className="p-1 flex flex-col items-center justify-center h-full">
                      <div className="relative">
                        <Image
                          src={
                            book.pictureUrl ?? "/assets/book-placeholder.png"
                          }
                          alt={book.title}
                          className="object-cover rounded-lg"
                          width={96}
                          height={96}
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
          </div>
        </div>
      </div>
    </div>
  );
}
