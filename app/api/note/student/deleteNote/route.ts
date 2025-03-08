import { NextRequest, NextResponse } from "next/server";
import StudentNote from "@/app/models/studentNote";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { noteId } = await request.json();
    await connectToDatabase();
    const studentNote = await StudentNote.findByIdAndDelete(noteId);
    if (!studentNote) {
      return NextResponse.json({ error: "Note not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Note deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
