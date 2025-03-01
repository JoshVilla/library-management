import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  bookId: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  pictureUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Add a compound index to ensure uniqueness of userId and bookId combination
favoriteSchema.index({ userId: 1, bookId: 1 }, { unique: true });

// Check if the model exists before compiling it
const Favorite = mongoose.models.Favorite || mongoose.model('Favorite', favoriteSchema);

export default Favorite;


