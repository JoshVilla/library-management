import { connectToDatabase } from "@/lib/mongodb";
import Books from "@/app/models/books";

export async function POST(req) {
  try {
    await connectToDatabase();

    const body = await req.json();

    const { page = 1, limit = 5, title, bookCode, category, id, author } = body;
    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 5;
    const skip = (pageNumber - 1) * limitNumber;

    const query = {};
    if (id) query._id = id;
    if (bookCode) query.bookCode = bookCode;
    if (category) query.category = category;
    if (author) query.author = author;
    if (title) query.title = title;

    const [books, totalBooks] = await Promise.all([
      Books.find(query).skip(skip).limit(limitNumber),
      Books.countDocuments(query),
    ]);

    return new Response(
      JSON.stringify({
        data: books,
        pagination: {
          currentPage: pageNumber,
          totalPages: Math.ceil(totalBooks / limitNumber),
          totalBooks,
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching books:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch books. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
