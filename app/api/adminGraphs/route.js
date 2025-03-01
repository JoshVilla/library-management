import { connectToDatabase } from "@/lib/mongodb";
import BorrowBooks from "@/app/models/borrowBooks";
import monthlyBorrowedBooks from "@/app/models/monthlyBorrowedBooks";

// Define status map as a constant outside the function for better performance
const STATUS_MAP = {
  4: "totalReturned",
  3: "totalBorrowingInProgress",
  2: "totalPending",
  1: "totalApproved",
  0: "totalCancelled",
  "-1": "totalFailed",
};

// Initial stats object template
const INITIAL_STATS = {
  totalApproved: 0,
  totalBorrowingInProgress: 0,
  totalPending: 0,
  totalReturned: 0,
  totalNotReturned: 0,
  totalCancelled: 0,
  totalFailed: 0,
};

// Helper function to get current month-year string
const getCurrentMonthYear = () => {
  const today = new Date();
  return today.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
};

// Helper function to check if it's first day of month
const isFirstDayOfMonth = () => {
  return new Date().getDate() === 1;
};

// Helper function to create new monthly record
const createMonthlyRecord = async (monthYear) => {
  try {
    const existingEntry = await monthlyBorrowedBooks.findOne({ monthYear });
    
    if (!existingEntry) {
      await monthlyBorrowedBooks.create({
        monthYear,
        ...INITIAL_STATS,
      });
    }
  } catch (error) {
    console.error("Error creating monthly record:", error);
    throw new Error("Failed to create monthly record");
  }
};

// Helper function to calculate updated stats
const calculateStats = (borrowData) => {
  return borrowData.reduce((stats, entry) => {
    const statusKey = STATUS_MAP[entry.isApproved.toString()];
    if (statusKey) {
      stats[statusKey]++;
    }
    return stats;
  }, { ...INITIAL_STATS });
};

export async function POST() {
  let dbConnection = null;

  try {
    // Connect to database
    dbConnection = await connectToDatabase();

    const currentMonthYear = getCurrentMonthYear();

    // Handle first day of month operations
    if (isFirstDayOfMonth()) {
      await createMonthlyRecord(currentMonthYear);
    }

    // Fetch and process borrowing records
    const borrowData = await BorrowBooks.find({})
      .select('isApproved')  // Only select the field we need
      .lean()
      .exec();

    // Calculate updated stats
    const updatedStats = calculateStats(borrowData);

    // Update monthly stats with optimistic concurrency
    const result = await monthlyBorrowedBooks.findOneAndUpdate(
      { monthYear: currentMonthYear },
      { $set: updatedStats },
      { 
        upsert: true, 
        new: true,
        runValidators: true,
      }
    );

    return new Response(
      JSON.stringify({ 
        success: true,
        message: `Stats updated for ${currentMonthYear}`,
        data: result
      }),
      { 
        status: 200, 
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-store"
        } 
      }
    );

  } catch (error) {
    console.error("Error in adminGraphs:", error);

    // Determine appropriate error status
    const status = error.name === 'ValidationError' ? 400 : 500;
    const message = status === 400 ? error.message : 'Internal Server Error';

    return new Response(
      JSON.stringify({ 
        success: false,
        error: message,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }),
      { 
        status,
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-store"
        }
      }
    );
  }
}
