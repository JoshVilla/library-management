import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/admin";
import { Base64 } from "base64-string";

export async function POST(req) {
  try {
    const base = new Base64();
    await connectToDatabase();

    const { usn, password } = await req.json(); // Correctly await req.json()

    const user = await User.findOne({ usn }); // Find user by USN

    if (!user) {
      return new Response(
        JSON.stringify({
          message: "USN not exist, Contact your librarian for the USN",
          isSuccess: false,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (user.isRegistered) {
      return new Response(
        JSON.stringify({ message: "USN already registered", isSuccess: false }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Update user password and mark as registered
    const updatedUser = await User.findOneAndUpdate(
      { usn }, // Filter condition
      { $set: { password: base.encode(password), isRegistered: true } }, // Update object
      { new: true } // Return the updated document
    );

    return new Response(
      JSON.stringify({
        message: "User registered successfully",
        isSuccess: true,
        user: updatedUser,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
