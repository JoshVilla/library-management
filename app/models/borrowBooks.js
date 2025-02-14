import mongoose from "mongoose";

const BorrowBooksSchema = new mongoose.Schema(
  {
    studentId: { type: String, required: true },
    usn: { type: String, required: true },
    studentName: { type: String, required: true },
    fromDate: { type: Date, required: true }, // Changed to Date type
    toDate: { type: Date, required: true }, // Changed to Date type
    isApproved: { type: Number, default: 2 },
    isCanceled: { type: Boolean, default: false },
    reason: { type: String, required: true },
    bookId: { type: String, required: true },
    titleBook: { type: String, required: true },
    authorBook: { type: String, required: true },
    reasonToChangeStatus: { type: String, default: "" },
    dateReturned: { type: String, default: "" },
  },
  { timestamps: true }
);

const BorrowBooks =
  mongoose.models.BorrowBooks ||
  mongoose.model("BorrowBooks", BorrowBooksSchema); // Ensured consistent casing

export default BorrowBooks;
