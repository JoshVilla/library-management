import { NextRequest, NextResponse } from "next/server";
import Favorite from "@/app/models/myFavorites";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { userId, bookId, title, author, pictureUrl } = await request.json();

    if (!userId || !bookId || !title || !author) {
      return NextResponse.json({ 
        error: "User ID, book ID, title, and author are required" 
      }, { status: 400 });
    }

    const existingFavorite = await Favorite.findOne({ userId, bookId });

    if (existingFavorite) {
      return NextResponse.json({ 
        error: "Book already in favorites" 
      }, { status: 400 });
    }

    const newFavorite = new Favorite({ 
      userId, 
      bookId, 
      title, 
      author, 
      pictureUrl 
    });
    await newFavorite.save();

    return NextResponse.json({ 
      message: "Book added to favorites",
      favorite: newFavorite 
    }, { status: 200 });
  } catch (error) {
    console.error("Error adding favorite:", error);
    return NextResponse.json({ 
      error: "Internal server error" 
    }, { status: 500 });
  }
}
  
