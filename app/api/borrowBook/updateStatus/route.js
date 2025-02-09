import { connectToDatabase } from "@/lib/mongodb";
import BorrowBooks from "@/app/models/borrowBooks";

export async function POST(req) {
  try {
    await connectToDatabase();

    if (!req.body) {
      return new Response(
        JSON.stringify({ message: "Invalid request body", status: 400 }),
        { status: 400 }
      );
    }

    const { isApproved, reasonToChangeStatus, id } = await req.json();

    if (!id) {
      return new Response(
        JSON.stringify({ message: "Missing request ID", status: 400 }),
        { status: 400 }
      );
    }

    const params = {};
    if (isApproved !== undefined) params.isApproved = isApproved; // Allow `0`
    if (reasonToChangeStatus)
      params.reasonToChangeStatus = reasonToChangeStatus;

    console.log("Updating request:", id, params);

    const updatedRequest = await BorrowBooks.findByIdAndUpdate(id, params, {
      new: true,
    });

    if (!updatedRequest) {
      return new Response(
        JSON.stringify({ message: "Request not found", status: 404 }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Status updated successfully",
        status: 200,
        data: updatedRequest, // Return updated data
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating request:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
