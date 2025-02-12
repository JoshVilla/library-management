import { connectToDatabase } from "@/lib/mongodb";
import Notification from "@/app/models/notification";

export async function POST(req) {
  try {
    await connectToDatabase();

    const { id } = await req.json();

    const res = await Notification.findById(id);

    return new Response(JSON.stringify({ notification: res }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching notification:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch notification" }),
      {
        status: 500,
      }
    );
  }
}
