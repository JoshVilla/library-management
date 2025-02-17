import { connectToDatabase } from "@/lib/mongodb";
import Books from "@/app/models/books";
import cloudinary from "@/lib/cloudinaryConfig";

export async function POST(req) {
  try {
    await connectToDatabase();

    // Parse the form data
    const formData = await req.formData();
    console.log("Received form data fields:", [...formData.keys()]); // Debug log

    const bookData = {};
    for (const [key, value] of formData.entries()) {
      if (key !== "picture") bookData[key] = value;
    }

    console.log("Parsed Book Data:", bookData); // Debug log

    // Validate required fields
    const requiredFields = [
      "title",
      "author",
      "description",
      "bookCode",
      "category",
      "quantity",
      "available",
    ];
    for (const field of requiredFields) {
      if (!bookData[field]) {
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    }

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

        bookData.pictureUrl = imageUrl;
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

    // Create and save the new book
    const newBook = new Books({
      ...bookData,
      numberOfBooksBorrowed: 0,
      totalOfBooksBorrowed: 0,
    });

    await newBook.save();
    console.log("Book saved successfully:", newBook); // Debug log

    return new Response(
      JSON.stringify({
        message: "Book added successfully",
        book: newBook,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error adding a book:", error);
    return new Response(
      JSON.stringify({ error: "Failed to add book", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
