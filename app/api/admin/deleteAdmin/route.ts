import { NextRequest, NextResponse } from "next/server";
import Admin from "@/app/models/admin";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { id } = await request.json();

    await connectToDatabase();
    await Admin.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Admin deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Admin deletion failed" },
      { status: 500 }
    );
  }
}
