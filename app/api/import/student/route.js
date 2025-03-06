import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/student";
import * as XLSX from "xlsx";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDatabase();

    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Read the uploaded Excel file
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log(jsonData, "Extracted Data from Excel");

    // Map and validate student data
    const students = jsonData.map((row) => ({
      firstname: row["First Name"] || row.firstname || "",
      middleinitial: row["Middle Initial"] || row.middleinitial || "",
      lastname: row["Last Name"] || row.lastname || "",
      usn: row["USN"] || row.usn || "",
    }));

    // Check for missing fields
    if (
      students.some(
        (student) => !student.firstname || !student.lastname || !student.usn
      )
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert students into the database
    await User.insertMany(students);

    return NextResponse.json(
      { message: "Students added successfully", isSuccess: 1 },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding students:", error);
    return NextResponse.json(
      { error: "Failed to add students" },
      { status: 500 }
    );
  }
}
