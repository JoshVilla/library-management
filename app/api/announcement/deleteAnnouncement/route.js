import { connectToDatabase } from "@/lib/mongodb";
import Announcement from "@/app/models/announcement";

export async function POST(req) {
  try {
    await connectToDatabase();

    const { id } = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ message: "ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const deletedAnnouncement = await Announcement.findByIdAndDelete(id);

    if (!deletedAnnouncement) {
      return new Response(JSON.stringify({ message: "ID not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        message: "Deleted Successfully",
        data: deletedAnnouncement,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error deleting announcement", error);

    return new Response(
      JSON.stringify({ error: "Failed to delete announcement" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
