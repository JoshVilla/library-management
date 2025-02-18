import { connectToDatabase } from "@/lib/mongodb";
import WeeklyBookStats from "@/app/models/booksStats";

export async function POST(req) {
  try {
    await connectToDatabase();

    const { bookId, dateRange } = await req.json();

    // If no date range is provided, default to the past 7 days
    let startDate = new Date();
    if (dateRange) {
      startDate = new Date(dateRange); // Use the provided dateRange if any
    } else {
      startDate.setDate(startDate.getDate() - 7); // Default to 7 days ago
    }

    const endDate = new Date(); // Current date
    console.log(startDate, endDate);
    // Query to find the document based on bookId and the 7-day range
    const res = await WeeklyBookStats.find({
      bookId, // Matching the provided bookId
      updatedAt: { $gte: startDate, $lte: endDate }, // Date range filter, less than or equal to current date
    });

    // Return the result as a JSON response
    return new Response(JSON.stringify(res), {
      status: 200, // HTTP status code for success
    });
  } catch (error) {
    console.log(error); // Log any errors

    // Return an error response if something goes wrong
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      status: 500, // HTTP status code for internal server error
    });
  }
}
