import { NextRequest, NextResponse } from "next/server";
import Favorite from "@/app/models/myFavorites";
import { connectToDatabase } from "@/lib/mongodb";

interface IMyFavoritesParams {
  userId: string;
  bookId?: string;
}


export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { userId, bookId } = await request.json();

    let params: IMyFavoritesParams = {
      userId: '',
    };


    if(userId && userId !== undefined) {
      params.userId = userId;
    }
    if(bookId && bookId !== undefined && bookId !== '') {
      params.bookId = bookId;
    }
    
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    console.log(params);

    const favorites = await Favorite.find(params);
    return NextResponse.json({data: favorites});
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}