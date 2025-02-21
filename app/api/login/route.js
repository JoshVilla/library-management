import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/admin";
import { Base64 } from "base64-string";
import { comparePassword } from "@/utils/helpers";

export async function POST(req) {
  try {
    const base = new Base64();
    await connectToDatabase();
    const { usn, password } = await req.json(); // Await req.json()

    const user = await User.find({ usn }); // Use findOne() with an object filter
    console.log(user);
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const isPasswordValid = await comparePassword(password, user[0].password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ message: "Wrong Password", isSuccess: false }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ user, message: "Login Successfull", isSuccess: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
