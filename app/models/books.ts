import mongoose from "mongoose";
import { IBookDocument, BookModel } from "./types";

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
    available: {
      type: Number,
      default: 1,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Books: BookModel = mongoose.models.Books || mongoose.model<IBookDocument>("Books", booksSchema);

export default Books; 