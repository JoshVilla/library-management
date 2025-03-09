import { connectToDatabase } from "@/lib/mongodb";
import Books from "@/app/models/books";

export async function POST(req) {
  try {
    await connectToDatabase(); // Ensure DB connection

    const { bookCode, quantity = 1, action = "reduce" } = await req.json(); // Get bookCode & quantity to reduce from request body

    if (!bookCode || quantity <= 0) {
      return new Response(JSON.stringify({ error: "Invalid request data" }), {
        status: 400,
      });
    }

    // Find the book by bookCode
    const book = await Books.findOne({ bookCode });

    if (!book) {
      return new Response(JSON.stringify({ error: "Book not found" }), {
        status: 404,
      });
    }

    if (action === "reduce" && book.available < quantity) {
      return new Response(JSON.stringify({ error: "Not enough stock" }), {
        status: 400,
      });
    }

    // Reduce the quantity
    if (action === "reduce") {
      book.available -= quantity;
    } else if (action === "add") {
      book.available += quantity;
    }
    await book.save();

    return new Response(
      JSON.stringify({ message: "Quantity updated successfully", book }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
