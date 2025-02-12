import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/admin";
import cloudinary from "@/lib/cloudinaryConfig";

export async function POST(req) {
  try {
    await connectToDatabase();

    // Parse the form data and log it for debugging
    const formData = await req.formData();
    console.log("Received form data:", Object.fromEntries(formData.entries()));

    const userData = {};

    // Get USN from form data
    const usn = formData.get("usn");
    if (!usn) {
      return Response.json({ error: "USN is required" }, { status: 400 });
    }

    // Process form data
    for (const [key, value] of formData.entries()) {
      if (key !== "picture" && key !== "usn") {
        userData[key] = value;
      }
    }

    console.log("Processed user data:", userData);

    // Handle image upload if present
    const picture = formData.get("picture");
    if (picture) {
      try {
        const buffer = Buffer.from(await picture.arrayBuffer());
        const imageUrl = await new Promise((resolve, reject) => {
          cloudinary.v2.uploader
            .upload_stream(
              {
                folder: "student_pictures",
                transformation: [
                  { width: 300, height: 300, crop: "fill" },
                  { quality: "auto:good" },
                ],
              },
              (error, result) => {
                if (error) {
                  console.error("Cloudinary upload failed:", error);
                  reject(new Error("Failed to upload image"));
                } else {
                  resolve(result.secure_url);
                }
              }
            )
            .end(buffer);
        });
        userData.pictureUrl = imageUrl;
      } catch (uploadError) {
        console.error("Error uploading to Cloudinary:", uploadError);
        return Response.json(
          {
            error: "Failed to upload image",
            details: uploadError.message,
          },
          { status: 500 }
        );
      }
    }

    // Update student profile using USN
    const updatedUser = await User.findOneAndUpdate(
      { usn: usn },
      { $set: userData },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return Response.json({ error: "Student not found" }, { status: 404 });
    }

    console.log("Updated user:", updatedUser);

    return Response.json(
      {
        message: "Profile updated successfully",
        user: updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating profile:", error);
    return Response.json(
      {
        error: "Failed to update profile",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
