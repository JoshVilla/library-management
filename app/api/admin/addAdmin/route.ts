import Admin from "@/app/models/admin";
import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "@/utils/helpers";
import { connectToDatabase } from "@/lib/mongodb";
export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { username, password } = await request.json();

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create admin
    const admin = await Admin.create({
      username,
      password: hashedPassword,
      // isSuperAdmin: isSuperAdmin || false,
    });

    return NextResponse.json({ data: admin }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating admin:", error);
    return NextResponse.json(
      { error: "Failed to create admin" },
      { status: 500 }
    );
  }
}
