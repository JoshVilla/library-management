import { connectToDatabase } from "@/lib/mongodb";
import BorrowBooks from "@/app/models/borrowBooks";

export async function POST(req) {
  try {
    await connectToDatabase();

    const body = await req.json(); // ✅ Await JSON parsing
    const { studentId, page = 1, limit = 5, id } = body; // Extract studentId, page, and limit

    let params = {};
    if (studentId) params.studentId = studentId;
    if (id) params._id = id;

    // Convert page and limit to integers
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    const skip = (pageNumber - 1) * limitNumber;

    // Fetch paginated borrowed books
    const books = await BorrowBooks.find(params).skip(skip).limit(limitNumber);
    const totalRecords = await BorrowBooks.countDocuments(params);

    return new Response(
      JSON.stringify({
        data: books,
        totalRecords,
        totalPages: Math.ceil(totalRecords / limitNumber),
        currentPage: pageNumber,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching borrowed books:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch borrowed books" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
