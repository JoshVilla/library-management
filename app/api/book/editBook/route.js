import { connectToDatabase } from "@/lib/mongodb";
import Books from "@/app/models/books";
import cloudinary from "@/lib/cloudinaryConfig";
import { replaceNewImagefromCurrentImage } from "@/utils/helpers";
export async function POST(req) {
  try {
    await connectToDatabase();
    // const { id, title, author, bookCode, description } = await req.json();
    const formData = await req.formData();
    const id = formData.get("id");

    let params = {};
    if (formData.get("title")) params.title = formData.get("title");
    if (formData.get("author")) params.author = formData.get("author");
    if (formData.get("description"))
      params.description = formData.get("description");
    if (formData.get("bookCode")) params.bookCode = formData.get("bookCode");
    if (formData.get("category")) params.category = formData.get("category");
    if (formData.get("quantity")) params.quantity = formData.get("quantity");
    if (formData.get("available")) params.available = formData.get("available");
    // Handle image upload if present
    const picture = formData.get("picture");
    if (picture) {
      try {
        const buffer = Buffer.from(await picture.arrayBuffer()); // Ensure correct buffer conversion
        const imageUrl = await new Promise((resolve, reject) => {
          cloudinary.v2.uploader
            .upload_stream({ folder: "book_covers" }, (error, result) => {
              if (error) {
                console.error("Cloudinary upload failed:", error);
                reject(new Error("Failed to upload image"));
              } else {
                console.log("Cloudinary upload successful:", result.secure_url);
                resolve(result.secure_url);
              }
            })
            .end(buffer);
        });
        await replaceNewImagefromCurrentImage(Books, id);
        params.pictureUrl = imageUrl;
      } catch (uploadError) {
        console.error("Error uploading to Cloudinary:", uploadError);
        return new Response(
          JSON.stringify({
            error: "Failed to upload image",
            details: uploadError.message,
          }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    if (!id) {
      return new Response(JSON.stringify({ error: "Book ID is required" }), {
        status: 400,
      });
    }

    const updatedBook = await Books.findByIdAndUpdate(id, params, {
      new: true,
    });

    if (!updatedBook) {
      return new Response(JSON.stringify({ error: "Book not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({
        message: "Edit Book Successfully",
        status: 200,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
