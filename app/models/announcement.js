import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema(
  {
    announcement: { type: String, required: true },
    isPinned: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Announcement =
  mongoose.models.Announcement ||
  mongoose.model("Announcement", AnnouncementSchema); // Ensured consistent casing

export default Announcement;
