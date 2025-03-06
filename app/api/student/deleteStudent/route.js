import { connectToDatabase } from "@/lib/mongodb";
import Student from "@/app/models/student";

export async function POST(req) {
  try {
    await connectToDatabase();
    const { id } = await req.json(); // Await JSON parsing

    const deletedUser = await Student.findByIdAndDelete(id);

    if (!deletedUser) {
      return new Response(JSON.stringify({ error: " Student not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Student deleted successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error deleting student:", error);
    return new Response(JSON.stringify({ error: "Failed to delete student" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
