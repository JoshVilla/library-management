import mongoose from "mongoose";

const booksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bookCode: {
      type: Number,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    pictureUrl: {
      type: String,
      default: null,
    },
    numberOfBooksBorrowed: {
      type: Number,
      default: 0,
    },
    totalOfBooksBorrowed: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Books = mongoose.models.Books || mongoose.model("Books", booksSchema);

export default Books;
