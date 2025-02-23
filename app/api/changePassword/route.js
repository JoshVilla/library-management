import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/admin";
import { Base64 } from "base64-string";
import { comparePassword, hashPassword } from "@/utils/helpers";

export async function POST(req) {
  try {
    const base = new Base64();
    await connectToDatabase();
    const { id, currentPassword, newPassword } = await req.json();

    const getUserInfo = await User.findById(id);
    console.log(getUserInfo);

    if (await comparePassword(currentPassword, getUserInfo.password)) {
      const updateData = await User.findByIdAndUpdate(
        id,
        {
          password: await hashPassword(newPassword),
        },
        { new: true, runValidators: true }
      );
      return new Response(
        JSON.stringify({
          message: "Password updated",
          data: updateData,
          status: 200,
        })
      );
    } else {
      return new Response(
        JSON.stringify({ message: "Password didnt match", data: {} }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
