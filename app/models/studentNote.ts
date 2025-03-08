import mongoose from "mongoose";

const StudentNoteSchema = new mongoose.Schema({
  note: { type: String, required: true },
  color: { type: String, required: true },
  userId: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
});

const StudentNote =
  mongoose.models.StudentNote ||
  mongoose.model("StudentNote", StudentNoteSchema);

export default StudentNote;
