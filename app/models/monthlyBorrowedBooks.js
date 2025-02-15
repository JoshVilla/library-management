import mongoose from "mongoose";

const MonthlyBorrowedBooksSchema = new mongoose.Schema({
  monthYear: { type: String, unique: true },
  totalApproved: { type: Number, default: 0 },
  totalBorrowingInProgress: { type: Number, default: 0 },
  totalPending: { type: Number, default: 0 },
  totalReturned: { type: Number, default: 0 },
  totalNotReturned: { type: Number, default: 0 },
  totalCancelled: { type: Number, default: 0 },
  totalFailed: { type: Number, default: 0 },
});

// Ensure the model is not compiled multiple times
export default mongoose.models.MonthlyBorrowedBooksStats ||
  mongoose.model("MonthlyBorrowedBooksStats", MonthlyBorrowedBooksSchema);
