import { connectToDatabase } from "@/lib/mongodb";
import Notification from "@/app/models/notification";

export async function POST(req) {
  try {
    await connectToDatabase();

    const { id } = await req.json();

    const res = await Notification.findByIdAndUpdate(
      id,
      { isRead: true },
      { new: true }
    );

    return new Response(
      JSON.stringify({ notification: res, message: "Oh yeah!!!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error updating notification:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update notification" }),
      {
        status: 500,
      }
    );
  }
}
