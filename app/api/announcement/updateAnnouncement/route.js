import { connectToDatabase } from "@/lib/mongodb";
import Announcement from "@/app/models/announcement";

export async function POST(req) {
  try {
    await connectToDatabase();
    const { id, isPinned } = await req.json();

    if (!id) {
      return new Response(
        JSON.stringify({ error: "Announcement ID is required" }),
        {
          status: 400,
        }
      );
    }

    // If setting as pinned, unpin all other announcements first
    if (isPinned) {
      await Announcement.updateMany({}, { isPinned: false });
    }

    // Update the selected announcement
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      id,
      { isPinned },
      { new: true }
    );

    if (!updatedAnnouncement) {
      return new Response(JSON.stringify({ error: "Announcement not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({
        message: isPinned ? "Pinned successfully" : "Unpinned successfully",
        data: updatedAnnouncement,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating announcement:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update announcement" }),
      {
        status: 500,
      }
    );
  }
}
