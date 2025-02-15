import { connectToDatabase } from "@/lib/mongodb";
import MonthlyBorrowedBooks from "@/app/models/monthlyBorrowedBooks";

export async function POST(req) {
  try {
    await connectToDatabase();

    const graphs = await MonthlyBorrowedBooks.find({});

    return new Response(
      JSON.stringify({
        data: graphs.length ? graphs : "No data available",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching data graphs:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch data graphs. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
