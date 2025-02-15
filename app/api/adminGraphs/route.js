import { connectToDatabase } from "@/lib/mongodb";
import BorrowBooks from "@/app/models/borrowBooks";
import monthlyBorrowedBooks from "@/app/models/monthlyBorrowedBooks";
const STATUS_MAP = {
  4: "totalReturned",
  3: "totalBorrowingInProgress",
  2: "totalPending",
  1: "totalApproved",
  0: "totalCancelled",
  "-1": "totalFailed",
};

export async function POST() {
  try {
    await connectToDatabase();

    // Get the current date
    const today = new Date();
    const dayOfMonth = today.getDate(); // Get the day (1-31)

    // Generate current and previous month-year keys
    const currentMonthYear = today.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });

    // Check if today is the first of the month
    const isFirstDay = dayOfMonth === 1;

    if (isFirstDay) {
      // Create a new record for the new month
      const newMonthYear = currentMonthYear; // Since it's the first day, it's the new month

      // Check if this new month entry already exists
      const existingEntry = await MonthlyStats.findOne({
        monthYear: newMonthYear,
      });

      if (!existingEntry) {
        // Create a fresh entry for the new month
        await monthlyBorrowedBooks.create({
          monthYear: newMonthYear,
          totalApproved: 0,
          totalBorrowingInProgress: 0,
          totalPending: 0,
          totalReturned: 0,
          totalNotReturned: 0,
          totalCancelled: 0,
          totalFailed: 0,
        });
      }
    }

    // Fetch all borrowing records
    const data = await BorrowBooks.find({}).lean();

    // Initialize the stats object
    const updatedStats = {
      totalApproved: 0,
      totalBorrowingInProgress: 0,
      totalPending: 0,
      totalReturned: 0,
      totalNotReturned: 0,
      totalCancelled: 0,
      totalFailed: 0,
    };

    data.forEach((entry) => {
      const statusKey = STATUS_MAP[entry.isApproved.toString()];
      if (statusKey) {
        updatedStats[statusKey]++;
      }
    });

    // Update the stats of the current month
    await monthlyBorrowedBooks.findOneAndUpdate(
      { monthYear: currentMonthYear }, // Ensure we update the current month
      { $set: updatedStats },
      { upsert: true, new: true }
    );

    return new Response(
      JSON.stringify({ message: `Stats updated for ${currentMonthYear}` }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing data:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
