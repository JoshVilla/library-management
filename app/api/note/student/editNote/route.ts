import { NextRequest, NextResponse } from "next/server";
import StudentNote from "@/app/models/studentNote";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { noteId, note, color, isCompleted } = await request.json();

    let params: any = {};
    if (note) params.note = note;
    if (color) params.color = color;
    if (isCompleted !== undefined && isCompleted !== null)
      params.isCompleted = isCompleted;
    await connectToDatabase();
    const studentNote = await StudentNote.findByIdAndUpdate(noteId, params);
    if (!studentNote) {
      return NextResponse.json({ error: "Note not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Note updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
