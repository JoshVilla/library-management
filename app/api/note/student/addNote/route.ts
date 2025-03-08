import { NextRequest, NextResponse } from "next/server";
import StudentNote from "@/app/models/studentNote";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { note, color, userId } = await request.json();
    await connectToDatabase();
    const studentNote = await StudentNote.create({ note, color, userId });
    if (!studentNote) {
      return NextResponse.json({ error: "Note not added" }, { status: 400 });
    }
    return NextResponse.json({ message: "Note added successfully" });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
