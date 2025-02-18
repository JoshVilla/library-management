import mongoose from "mongoose";

const weeklyBookStatsSchema = new mongoose.Schema(
  {
    week: {
      type: String,
      required: true,
    },
    month: {
      type: String, // e.g., "January", "February"
      required: true,
    },
    year: {
      type: Number, // e.g., 2025
      required: true,
    },
    day: {
      type: Number, // e.g., 2025
      required: true,
    },
    returned: {
      type: Number,
      required: true,
      default: 0,
    },
    notReturned: {
      type: Number,
      required: true,
      default: 0,
    },
    borrowing: {
      type: Number,
      required: true,
      default: 0,
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the book object
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const WeeklyBookStats =
  mongoose.models.WeeklyBookStats ||
  mongoose.model("WeeklyBookStats", weeklyBookStatsSchema);

export default WeeklyBookStats;
