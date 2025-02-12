import { connectToDatabase } from "@/lib/mongodb";
import Notification from "@/app/models/notification";

export async function POST(req) {
  try {
    await connectToDatabase();

    const {
      studentId,
      message,
      isRead,
      reason,
      bookTitle,
      author,
      borrowDuration,
    } = await req.json();

    const newNotification = new Notification({
      studentId,
      message,
      isRead,
      reason,
      bookTitle,
      author,
      borrowDuration,
    });

    await newNotification.save();
    return new Response(
      JSON.stringify({ message: "Student has been notified" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding student:", error);
    return new Response(JSON.stringify({ error: "Failed to notify student" }), {
      status: 500,
    });
  }
}
