import { NextRequest, NextResponse } from "next/server";
import StudentNote from "@/app/models/studentNote";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();
    await connectToDatabase();

    const studentNotes = await StudentNote.find({ userId });
    return NextResponse.json({ data: studentNotes });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
