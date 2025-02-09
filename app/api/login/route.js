import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/admin";
import { Base64 } from "base64-string";

export async function POST(req) {
  try {
    const base = new Base64();
    await connectToDatabase();
    const { usn, password } = await req.json(); // Await req.json()

    const user = await User.find({ usn, password: base.encode(password) }); // Use findOne() with an object filter

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log(user); // Debugging

    return new Response(JSON.stringify({ user }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
