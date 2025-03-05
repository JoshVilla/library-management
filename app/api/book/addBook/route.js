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
        const bytes = await picture.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        // Convert buffer to base64
        const base64Image = buffer.toString('base64');
        const uploadStr = `data:${picture.type};base64,${base64Image}`;
        
        // Upload to Cloudinary
        const uploadResponse = await cloudinary.v2.uploader.upload(uploadStr, {
          folder: "book_covers",
          resource_type: "auto"
        });

        console.log("Cloudinary upload successful:", uploadResponse.secure_url);
        bookData.pictureUrl = uploadResponse.secure_url;
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
