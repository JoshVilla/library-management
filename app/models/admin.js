import mongoose from "mongoose";

// Define the schema for the students collection
const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    middleinitial: { type: String, required: true },
    lastname: { type: String, required: true },
    numberOfBooksBorrowed: { type: Number, default: 0 },
    totalOfBooksBorrowed: { type: Number, default: 0 },
    usn: { type: String, required: true },
    isRegistered: { type: Boolean, default: false },
    pictureUrl: { type: String, default: null },
    password: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Explicitly set the collection name to "students" for the lms_db database
const User =
  mongoose.models.User || mongoose.model("User", UserSchema, "students");

export default User;
