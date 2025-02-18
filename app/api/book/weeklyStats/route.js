import { connectToDatabase } from "@/lib/mongodb";
import WeeklyBookStats from "@/app/models/booksStats";

export async function POST(req) {
  try {
    await connectToDatabase();

    const { bookId, from, to } = await req.json();

    if (!bookId) {
      return new Response(JSON.stringify({ error: "bookId is required" }), {
        status: 400,
      });
    }

    // Parse and validate date range
    let startDate = from ? new Date(from) : new Date();
    let endDate = to ? new Date(to) : new Date();

    if (!from) {
      startDate.setDate(endDate.getDate() - 7); // Default to last 7 days
    }

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return new Response(JSON.stringify({ error: "Invalid date format" }), {
        status: 400,
      });
    }

    // Set time to the start of the day for startDate
    startDate.setHours(0, 0, 0, 0);
    // Set time to the end of the day for endDate
    endDate.setHours(23, 59, 59, 999);

    // MongoDB Query - Sorted from Oldest to Newest
    const books = await WeeklyBookStats.find({
      bookId,
      updatedAt: { $gte: startDate.toISOString(), $lte: endDate.toISOString() },
    }).sort({ updatedAt: 1 }); // Ascending order (old to new)

    return new Response(JSON.stringify(books), { status: 200 });
  } catch (error) {
    console.error("Error fetching book stats:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
