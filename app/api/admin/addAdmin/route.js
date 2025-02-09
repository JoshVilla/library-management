import { connectToDatabase } from "@/lib/mongodb"; // Your connection helper
import User from "@/app/models/admin"; // Ensure the correct path for your 'students' model

export async function POST(req) {
  try {
    // Ensure the database connection is established
    await connectToDatabase();

    // Parse the incoming request body to get student data
    const { firstname, middleinitial, lastname, usn } = await req.json();

    // Create a new student instance with the parsed data
    const newUser = new User({
      firstname,
      middleinitial,
      lastname,
      usn,
      // numberOfBooksBorrowed and totalOfBooksBorrowed will default to 0
    });

    // Save the new student to the database
    await newUser.save();

    return new Response(
      JSON.stringify({ message: "Student added successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding student:", error);
    return new Response(JSON.stringify({ error: "Failed to add student" }), {
      status: 500,
    });
  }
}
