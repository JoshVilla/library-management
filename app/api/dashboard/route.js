import { connectToDatabase } from "@/lib/mongodb";
import Books from "@/app/models/books";
import User from "@/app/models/admin";

export async function POST(req) {
  try {
    await connectToDatabase();
    const countBooks = await Books.countDocuments();
    const countStudents = await User.countDocuments();
    return new Response(
      JSON.stringify({ totalBooks: countBooks, totalStudents: countStudents }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching book count:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch book count" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
