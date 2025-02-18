import WeeklyBookStats from "@/app/models/booksStats";
import BorrowBooks from "@/app/models/borrowBooks";
import { connectToDatabase } from "@/lib/mongodb";
import { MONTH, STATUS } from "@/utils/constant";
import { getCurrentDayName } from "@/utils/helpers";

export async function POST(req) {
  await connectToDatabase();

  const { month, bookId } = await req.json();

  // Get current date and reset time to midnight for consistent comparison
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  // Set end of day (just before midnight)
  const endOfDay = new Date(currentDate);
  endOfDay.setHours(23, 59, 59, 999);

  // Get yesterday's date
  const oneDayAgo = new Date(currentDate);
  oneDayAgo.setDate(currentDate.getDate() - 1);

  // Get the day of the week (e.g., "Monday", "Tuesday")
  const dayOfWeek = getCurrentDayName(oneDayAgo);

  // Get the current year and day of the month
  const year = currentDate.getFullYear();
  const day = currentDate.getDate();

  // Get BorrowBooks data for yesterday
  const data = await BorrowBooks.find({
    updatedAt: {
      $gte: currentDate, // Start of yesterday
      $lt: endOfDay, // End of yesterday
    },
  });

  const countStatus = {
    returned: 0,
    notReturned: 0,
    borrowing: 0,
  };

  // Process BorrowBooks data
  data.forEach((item) => {
    if (item.isApporoved === STATUS.RETURNED) countStatus.returned++;
    else if (item.isApproved === STATUS.FAILED) countStatus.notReturned++;
    else if (item.isApproved === STATUS.INPROGRESS) countStatus.borrowing++;
  });

  // Check if there's existing data for the current day, week, and year
  const existingData = await WeeklyBookStats.findOne({
    day,
    week: dayOfWeek,
    year,
    bookId, // Ensure the correct bookId is matched
  });

  if (!existingData) {
    // Create new data if no existing data
    const newData = new WeeklyBookStats({
      ...countStatus,
      bookId, // Use the provided bookId
      month: MONTH[currentDate.getMonth()],
      week: dayOfWeek,
      year,
      day,
    });

    // Save the new data to the database
    await newData.save();
  } else {
    // Update the existing document if data exists
    await WeeklyBookStats.findByIdAndUpdate(
      existingData._id, // Update the document by its _id
      { $set: countStatus },
      { new: true }
    );
  }

  return new Response(
    JSON.stringify({
      ...countStatus,
      month: MONTH[currentDate.getMonth()],
      week: dayOfWeek,
      year,
      day,
    }),
    {
      status: 200,
    }
  );
}
