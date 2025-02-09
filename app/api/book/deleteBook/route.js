import { connectToDatabase } from "@/lib/mongodb";
import Books from "@/app/models/books";
import cloudinary from "@/lib/cloudinaryConfig";
import { deleteCloudinaryImage, getCloudinaryPublicId } from "@/utils/helpers";

export async function POST(req) {
  try {
    // Connect to database
    await connectToDatabase();

    // Parse request body
    const { id, pictureUrl } = await req.json();

    // Validate input
    if (!id) {
      return new Response(JSON.stringify({ error: "Book ID is required" }), {
        status: 400,
      });
    }

    // Find book first to ensure it exists
    const book = await Books.findById(id);

    if (!book) {
      return new Response(JSON.stringify({ error: "Book not found" }), {
        status: 404,
      });
    }

    // Delete image from Cloudinary if exists
    if (pictureUrl) {
      const publicId = getCloudinaryPublicId(pictureUrl);
      if (publicId) {
        await deleteCloudinaryImage(publicId);
      }
    }

    // Delete book from database
    await book.deleteOne();

    return new Response(
      JSON.stringify({
        message: "Book deleted successfully",
        id: book._id,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in delete book operation:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to delete book",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
