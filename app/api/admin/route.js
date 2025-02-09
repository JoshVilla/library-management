import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/admin";

export async function POST(req) {
  try {
    await connectToDatabase();

    const { page = 1, limit = 5, usn, id } = await req.json();
    let query = {};

    if (usn) query.usn = usn;
    if (id) query._id = id;

    const skip = (page - 1) * limit;

    // Fetch data and count in parallel
    const [users, totalUsers] = await Promise.all([
      User.find(query).skip(skip).limit(limit),
      User.countDocuments(query),
    ]);

    return new Response(
      JSON.stringify({
        data: users,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(totalUsers / limit),
          totalUsers,
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch users" }), {
      status: 500,
    });
  }
}
