import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { getBorrowedBooks } from "@/app/service/api";
import BorrowBooks from "@/app/models/borrowBooks";
import { STATUS } from "@/utils/constant";

type ICountStatus = {
  pending: number;
  returned: number;
  canceled: number;
  approved: number;
  borrowing: number;
  failed: number;
};

export async function POST(request: NextRequest) {
  const { studentId } = await request.json();

  try {
    await connectToDatabase();

    const countPending = await BorrowBooks.countDocuments({
      studentId: studentId,
      isApproved: STATUS.PENDING,
    });
    const countReturned = await BorrowBooks.countDocuments({
      studentId: studentId,
      isApproved: STATUS.RETURNED,
    });
    const countCanceled = await BorrowBooks.countDocuments({
      studentId: studentId,
      isApproved: STATUS.CANCELLED,
    });
    const countApproved = await BorrowBooks.countDocuments({
      studentId: studentId,
      isApproved: STATUS.APPROVED,
    });
    const countBorrowing = await BorrowBooks.countDocuments({
      studentId: studentId,
      isApproved: STATUS.INPROGRESS,
    });
    const countFailed = await BorrowBooks.countDocuments({
      studentId: studentId,
      isApproved: STATUS.FAILED,
    });
    const countStatus: ICountStatus = {
      pending: countPending,
      returned: countReturned,
      canceled: countCanceled,
      approved: countApproved,
      borrowing: countBorrowing,
      failed: countFailed,
    };

    const getCanceledBooks = await BorrowBooks.countDocuments({
      studentId: studentId,
      isApproved: STATUS.CANCELLED,
    });

    return NextResponse.json({ data: { countStatus } });
  } catch (error) {
    console.error("Error connecting to database:", error);
    return NextResponse.json(
      { error: "Failed to connect to database" },
      { status: 500 }
    );
  }
}
