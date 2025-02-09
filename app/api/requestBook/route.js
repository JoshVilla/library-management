import { connectToDatabase } from "@/lib/mongodb";
import BorrowBooks from "@/app/models/borrowBooks";

export async function POST(req) {
  try {
    await connectToDatabase();
    const {
      studentId,
      usn,
      studentName,
      fromDate,
      toDate,
      reason,
      bookId,
      titleBook,
      authorBook,
    } = await req.json();

    const newBorrow = new BorrowBooks({
      studentId,
      usn,
      studentName,
      fromDate,
      toDate,
      reason,
      bookId,
      titleBook,
      authorBook,
    });

    await newBorrow.save();
    return new Response(JSON.stringify({ message: "Request successfully" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error requesting book:", error);
    return new Response(
      JSON.stringify({ error: "Failed to  request a book" }),
      {
        status: 500,
      }
    );
  }
}
