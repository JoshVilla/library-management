import { connectToDatabase } from "@/lib/mongodb";
import Student from "@/app/models/student";

export async function POST(req) {
  try {
    await connectToDatabase();

    const { page = 1, limit = 5, usn, id, isRegistered } = await req.json();
    const query = {};

    // Build query object with proper type handling
    if (usn) query.usn = usn;
    if (id) query._id = id;

    // Handle isRegistered boolean properly
    if (isRegistered !== undefined && isRegistered !== "") {
      query.isRegistered = isRegistered === "true" || isRegistered === true;
    }

    const skip = (page - 1) * limit;

    // Fetch data and count in parallel with error handling
    const [users, totalUsers] = await Promise.all([
      Student.find(query).skip(skip).limit(limit).lean().exec(),
      Student.countDocuments(query),
    ]);

    return new Response(
      JSON.stringify({
        success: true,
        data: users,
        pagination: {
          currentPage: Number(page),
          totalPages: Math.ceil(totalUsers / limit),
          totalUsers,
          limit: Number(limit),
        },
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching students:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to fetch students",
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
