import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema(
  {
    studentId: { type: String, required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    reason: { type: String, required: true },
    titleBook: { type: String, required: true },
    authorBook: { type: String, required: true },
    borrowDuration: { type: String, required: true },
  },
  { timestamps: true }
);

const Notification =
  mongoose.models.Notification ||
  mongoose.model("Notification", NotificationSchema); // Ensured consistent casing

export default Notification;
