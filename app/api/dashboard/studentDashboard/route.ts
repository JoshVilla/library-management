import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { getBorrowedBooks } from "@/app/service/api";
import BorrowBooks from "@/app/models/borrowBooks";
import { STATUS } from "@/utils/constant";
export async function POST(request: NextRequest) {
  const { studentId } = await request.json();

  try {
    await connectToDatabase();

    const countPending = await BorrowBooks.countDocuments({ studentId: studentId, isApproved: STATUS.PENDING });
    const countBorrowed = await BorrowBooks.countDocuments({ studentId: studentId, isApproved: STATUS.BORROWED });
    const countReturned = await BorrowBooks.countDocuments({ studentId: studentId, isApproved: STATUS.RETURNED });
    const countCanceled = await BorrowBooks.countDocuments({ studentId: studentId, isApproved: STATUS.CANCELED });
    const countApproved = await BorrowBooks.countDocuments({ studentId: studentId, isApproved: STATUS.APPROVED });

    const countStatus = {
      pending: countPending,
      borrowed: countBorrowed,
      returned: countReturned,
      canceled: countCanceled,
      approved: countApproved
    }



    return NextResponse.json({ countStatus });
  } catch (error) {
    console.error("Error connecting to database:", error);
    return NextResponse.json({ error: "Failed to connect to database" }, { status: 500 });
  }
}