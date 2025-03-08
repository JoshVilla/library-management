import mongoose from "mongoose";

const AdminNoteSchema = new mongoose.Schema({
  note: { type: String, required: true },
  color: { type: String, required: true },
  userId: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
});

const AdminNote =
  mongoose.models.AdminNote || mongoose.model("AdminNote", AdminNoteSchema);

export default AdminNote;
