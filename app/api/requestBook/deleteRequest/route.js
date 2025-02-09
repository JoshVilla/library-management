import { connectToDatabase } from "@/lib/mongodb";
import BorrowBooks from "@/app/models/borrowBooks";

export async function POST(req) {
  try {
    await connectToDatabase();

    const { id } = await req.json();

    const requestInfo = await BorrowBooks.findByIdAndDelete(id);

    if (!requestInfo) {
      return new Response(JSON.stringify({ error: "Request not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({
        message: "Delete Succesfully",
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to delete request",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
