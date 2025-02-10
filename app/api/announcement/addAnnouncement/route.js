import { connectToDatabase } from "@/lib/mongodb";
import Announcement from "@/app/models/announcement";

export async function POST(req) {
  try {
    await connectToDatabase();

    const { announcement, isPinned } = await req.json();

    if (!announcement) {
      return new Response(
        JSON.stringify({ error: "Announcement text is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // If the new announcement is pinned, remove any existing pinned announcement
    if (isPinned) {
      await Announcement.updateMany({ isPinned: true }, { isPinned: false });
    }

    // Create and save the new announcement
    const newAnnouncement = new Announcement({ announcement, isPinned });
    await newAnnouncement.save();

    return new Response(
      JSON.stringify({
        message: isPinned
          ? "Pinned announcement added and replaced previous one."
          : "Announcement added successfully.",
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error adding Announcement:", error);
    return new Response(
      JSON.stringify({ error: "Failed to add Announcement" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
