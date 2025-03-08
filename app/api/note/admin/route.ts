import { NextRequest, NextResponse } from "next/server";
import AdminNote from "@/app/models/adminNote";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();
    await connectToDatabase();

    const adminNotes = await AdminNote.find({ userId });
    return NextResponse.json({ data: adminNotes });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
