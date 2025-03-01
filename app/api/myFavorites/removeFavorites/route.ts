import Favorite from "@/app/models/myFavorites";
import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

  try {
    await connectToDatabase();
    const { userId, bookId } = await request.json();
    const favorites = await Favorite.find({ userId, bookId });
    if (favorites.length > 0) {
      await Favorite.deleteOne({ _id: favorites[0]._id });
      return NextResponse.json({ message: "Favorites removed" });
    }
    return NextResponse.json({ message: "Favorites not found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ message: "Error removing favorites" }, { status: 500 });
  }
}
