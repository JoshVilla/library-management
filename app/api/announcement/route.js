import { connectToDatabase } from "@/lib/mongodb";
import Announcement from "@/app/models/announcement";

export async function POST(req) {
  try {
    await connectToDatabase();

    // Parse request body for pagination
    const { page = 1, limit = 5 } = await req.json();
    const pageNumber = Math.max(1, parseInt(page, 10));
    const limitNumber = Math.max(1, parseInt(limit, 10));

    // Get total count for pagination
    const total = await Announcement.countDocuments();

    // Fetch paginated announcements, sorted from latest to oldest
    const announcements = await Announcement.find({})
      .sort({ _id: -1 }) // Sort by ID in descending order (latest first)
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    return new Response(
      JSON.stringify({
        total,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(total / limitNumber),
        announcements,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching announcements:", error);

    return new Response(
      JSON.stringify({ error: "Failed to fetch announcements" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
