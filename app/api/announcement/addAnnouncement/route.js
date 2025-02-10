import { connectToDatabase } from "@/lib/mongodb"; // Your connection helper
import Announcement from "@/app/models/announcement";

export async function POST(req) {
  try {
    // Ensure the database connection is established
    await connectToDatabase();

    const { announcement, isPinned } = await req.json();

    const newAnnouncement = new Announcement({
      announcement,
      isPinned,
    });

    await newAnnouncement.save();

    return new Response(
      JSON.stringify({ message: "Announcement added successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding Announcement:", error);
    return new Response(
      JSON.stringify({ error: "Failed to add Announcement" }),
      {
        status: 500,
      }
    );
  }
}
