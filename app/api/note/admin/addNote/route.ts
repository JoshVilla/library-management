import { NextRequest, NextResponse } from "next/server";
import AdminNote from "@/app/models/adminNote";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { note, color, userId } = await request.json();
    await connectToDatabase();
    const adminNote = await AdminNote.create({ note, color, userId });
    if (!adminNote) {
      return NextResponse.json({ error: "Note not added" }, { status: 400 });
    }
    return NextResponse.json({ message: "Note added successfully" });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
