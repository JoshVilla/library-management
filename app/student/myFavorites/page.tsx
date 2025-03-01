"use client";

import { RootState } from "@/app/redux/store";
import { myFavorites } from "@/app/service/api";
import { IMyFavoritesParams } from "@/app/service/types";
import TitlePage from "@/components/titlePage/titlePage";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
const MyFavorites = () => {
  const router = useRouter();
  const state = useSelector((state: RootState) => state.user.userInfo);
  const [favorites, setFavorites] = useState<IMyFavoritesParams[]>([]);
  const fetchFavorites = async () => {
   try {
    if (!state || !('_id' in state)) {
      return;
    }
    const response = await myFavorites({ userId: state._id });
    if (response?.data) {
        setFavorites(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
   }
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  return <div>
    <TitlePage title="My Favorites" />
    <div className="mt-10">
      <div className="flex flex-wrap items-center gap-4 px-4">
        {favorites.map((favorite) => (
          <div className=" w-1/6" key={favorite.pictureUrl}>
        <Image src={favorite.pictureUrl ? favorite.pictureUrl : "/assets/book-placeholder.png"} alt="book" width={150} height={150} />
        <div className="flex flex-col mt-4 gap-2">
          <div className="hover:underline cursor-pointer" onClick={() => router.push(`/student/books/${favorite.bookId}`)}>{favorite.title}</div>
          <div  className="text-sm text-[#636361] dark:text-[#adadad] ">Author: {favorite.author}</div>
        </div>
      </div> 
        ))}
      </div>
      
    </div>
  </div>;
};

export default MyFavorites;

