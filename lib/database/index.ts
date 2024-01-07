import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

console.log("joder");
export const connectToDatabase = async () => {
  console.log("coño");
  if (cached.conn) return cached.conn;

  console.log("puta");
  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  console.log("maricon");
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "LPAonFire",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  if (cached.conn) {
    console.log("Connected!");
  }
  return cached.conn;
};
