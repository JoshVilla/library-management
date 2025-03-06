import { NextRequest, NextResponse } from "next/server";
import Admin from "@/app/models/admin";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const {
      username,
      isSuperAdmin,
      page = 1,
      limit = 10,
    } = await request.json();
    await connectToDatabase();

    // Build query parameters
    let params: any = {};
    if (username) params.username = username;
    if (isSuperAdmin !== undefined && isSuperAdmin !== "")
      params.isSuperAdmin = isSuperAdmin === "true" || isSuperAdmin === true;

    // Calculate skip value for pagination
    const skip = (Number(page) - 1) * Number(limit);

    // Get total count for pagination
    const totalCount = await Admin.countDocuments(params);

    // Get paginated admins
    const admins = await Admin.find(params)
      .skip(skip)
      .limit(Number(limit))
      .select("-password") // Exclude password from response
      .lean(); // Convert to plain JavaScript objects

    return NextResponse.json(
      {
        data: admins,
        pagination: {
          currentPage: Number(page),
          totalPages: Math.ceil(totalCount / Number(limit)),
          totalItems: totalCount,
          itemsPerPage: Number(limit),
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to get admins", details: error.message },
      { status: 500 }
    );
  }
}
