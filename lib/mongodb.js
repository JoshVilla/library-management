import mongoose from "mongoose";

const MONGODB_URI = process.env.ATLAS_DB_LINK;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the ATLAS_DB_LINK environment variable in .env.local"
//   );
// }

// Ensure global object exists for caching (important for Next.js and serverless)
global.mongoose = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (global.mongoose.conn) {
    console.log("Using existing MongoDB connection");
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    console.log("Establishing new MongoDB connection...");
    global.mongoose.promise = mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // 30 seconds
        connectTimeoutMS: 30000, // 30 seconds
      })
      .then((mongoose) => {
        console.log("MongoDB connected successfully ✅");
        return mongoose;
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB.");
      });
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}
